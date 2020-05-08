import React from "react";
import { connect } from "react-redux";
import { requestAuthenticateUser } from "../store/mutations";
import * as mutations from "../store/mutations";

function Login({ authenticateUser, authenticated }) {
  return (
    <div className="card p-3 col-6">
      <h2>Login page</h2>
      <form action="" onSubmit={authenticateUser}>
        <input
          className="form-control"
          type="text"
          name="username"
          placeholder="username"
        />
        <input
          className="form-control mt-2"
          type="password"
          name="password"
          placeholder="password"
        />
        {authenticated === mutations.NOT_AUTHENTICATED ? (
          <p>incorrect login</p>
        ) : null}
        <button type="submit" className="form-control mt-2 btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}

function mapStateToProps({ session }, ownProps) {
  return {
    authenticated: session.authenticated,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    authenticateUser(e) {
      e.preventDefault();
      const username = e.target["username"].value;
      const password = e.target["password"].value;
      dispatch(requestAuthenticateUser(username, password));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
