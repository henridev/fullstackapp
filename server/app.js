const path = require("path");

require("dotenv").config({ path: __dirname + "/.env" });
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(
  cors({
    origin: (origin, cb) => {
      cb(null, process.env.NODE_ENV !== "production");
    },
    optionsSuccessStatus: 200,
    credentials: true,
  }),
  bodyParser.urlencoded({ extended: true }),
  bodyParser.json()
);

app.use(express.static(path.join(__dirname, "../client/dist")));

app.use("/api/tasks", require("./routes/tasks"));
app.use("/api/auth", require("./routes/authenticate"));

// we can send our entry html file in any other case
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

// Error handler
app.use((err, req, res, next) => {
  console.error("----- An error happened -----");
  console.error(err);

  // only render if the error ocurred before sending the response
  if (!res.headersSent) {
    res.status(err.status || 500);

    // A limited amount of information sent in production
    if (process.env.NODE_ENV === "production") res.json(err);
    else
      res.json(
        JSON.parse(JSON.stringify(err, Object.getOwnPropertyNames(err)))
      );
  }
});

app.listen(process.env.PORT || 7000, () => {
  console.log("server is listening on port: ", process.env.PORT || 7000);
});
