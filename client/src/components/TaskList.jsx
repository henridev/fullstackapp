import React from "react";
import { connect } from "react-redux";
import { requestTaskCreation } from "../store/mutations";
import { Link } from "react-router-dom";

function TaskList({ tasks, name, id, createNewTask }) {
  return (
    <>
      <h3>{name}</h3>
      <div>
        {tasks.map((task, i) => (
          <Link key={i} to={`/task/${task.id}`}>
            <div>{task.name}</div>
          </Link>
        ))}
      </div>
      <button onClick={createNewTask.bind(this, id)}>new task</button>
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

function mapDispatchToProps(dispatch, ownProps) {
  return {
    createNewTask(id) {
      dispatch(requestTaskCreation(id));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
