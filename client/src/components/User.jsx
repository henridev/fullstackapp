import React, { useEffect } from "react";
import { connect } from "react-redux";
import { requestUser } from "../store/mutations";

function User({ userId, setUserInfo, user }) {
  useEffect(() => {
    setUserInfo(userId);
    console.log("here");
  }, []);

  if (!user) return <div>Loading</div>;

  return (
    <div className="card p-2 m-2 bg-light ">
      <div class="card-header">{user.name}</div>
      <div class="card-body">
        <h5 class="card-title">user info</h5>
        <p class="card-text">id: {user.id}</p>
      </div>
    </div>
  );
}

function mapStateToProps({ session, user }, ownProps) {
  return {
    userId: session.id,
    user,
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    setUserInfo(id) {
      console.log("userinfo", id);
      dispatch(requestUser(id));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
