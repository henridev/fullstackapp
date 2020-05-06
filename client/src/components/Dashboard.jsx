import React from "react";
import { connect } from "react-redux";
import TaskList from "./TaskList";

function Dashboard({ groups }) {
  console.log("groups", groups);
  return (
    <div>
      <h1>To Do list</h1>
      {groups.map((group) => (
        <TaskList id={group.id} name={group.name} />
      ))}
    </div>
  );
}

function mapStateToProps(state) {
  return { groups: state.groups };
}

export default connect(mapStateToProps)(Dashboard);
