import React from "react";
import { connect } from "react-redux";

function TaskList({ tasks, name }) {
  return (
    <>
      <h3>{name}</h3>
      <div>
        {tasks.map((task) => (
          <div>{task.name}</div>
        ))}
      </div>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  let groupId = ownProps.id;
  return {
    name: ownProps.name,
    id: groupId,
    tasks: state.tasks.filter((task) => task.group === groupId),
  };
}

export default connect(mapStateToProps)(TaskList);
