import React from "react";
import { Link } from "react-router-dom";
import * as mutations from "../store/mutations";
import { connect } from "react-redux";

function Navigation({ authenticated }) {
  return (
    <div className="navbar mb-2 mt-2">
      {authenticated === mutations.AUTHENTICATED && (
        <>
          <Link to="/home">dashboard</Link>
          <Link to="/user">user</Link>
        </>
      )}
      {authenticated !== mutations.AUTHENTICATED && (
        <Link to="/login">login</Link>
      )}
    </div>
  );
}

function mapStateToProps({ session }, ownProps) {
  return {
    authenticated: session.authenticated,
  };
}

export default connect(mapStateToProps)(Navigation);
