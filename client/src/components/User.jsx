import React from "react";
import { connect } from "react-redux";
import { requestTaskCreation } from "../store/mutations";
import { Link } from "react-router-dom";

function TaskList({ user }) {
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

function mapStateToProps({ user }, ownProps) {
  return {
    user,
  };
}

// function mapDispatchToProps(dispatch, ownProps) {
//   return {
//     createNewTask(id) {
//       dispatch(requestTaskCreation(id));
//     },
//   };
// }

export default connect(mapStateToProps)(TaskList);
