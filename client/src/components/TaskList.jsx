import React from "react";
import { connect } from "react-redux";
import { requestTaskCreation } from "../store/mutations";
import { Link } from "react-router-dom";

function TaskList({ tasks, name, id, createNewTask }) {
  return (
    <div className="card p-2 m-2">
      <h3>{name}</h3>
      <div className="card p-2 mt-2 list-group">
        {tasks.map((task, i) => (
          <Link key={i} to={`/task/${task.id}`} className="list-group-item">
            <div>{task.name}</div>
          </Link>
        ))}
      </div>
      <button
        onClick={createNewTask.bind(this, id)}
        className="btn btn-primary btn-block mt-2"
      >
        new task
      </button>
    </div>
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
