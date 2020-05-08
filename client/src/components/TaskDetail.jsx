import React from "react";
import { connect } from "react-redux";
import * as mutations from "../store/mutations";
import { Link } from "react-router-dom";

function TaskDetail({
  task,
  groups,
  id,
  isComplete,
  setTaskComplete,
  setTaskGroup,
  setTaskName,
}) {
  return (
    <div className="card p-3 col-6">
      <div>
        <input
          className="form-control form-control-lg"
          type="text"
          value={task.name}
          onChange={(e) => setTaskName(id, e.target.value)}
        />
      </div>
      <div className="mt-3">
        <button
          className="btn btn-primary mt-2"
          onClick={setTaskComplete.bind(this, id, !isComplete)}
        >
          {isComplete ? `re-open` : `complete`}
        </button>
      </div>
      <div className="mt-3">
        <select
          className="form-control"
          name="options"
          value={task.group}
          onChange={(e) => setTaskGroup(id, e.target.value)}
        >
          {groups.map((group) => {
            return (
              <option key={group.id} value={group.id}>
                {group.name}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <Link to="/dashboard">
          <button className="btn btn-primary mt-2">Done</button>
        </Link>
      </div>
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  let _id = ownProps.match.params.id;
  let task = state.tasks.find(({ id }) => id === _id);
  let groups = state.groups;
  if (task) {
    return {
      id: task.id,
      task,
      groups,
      isComplete: task.isComplete,
    };
  } else {
    console.log("no task found");
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    setTaskComplete(id, isComplete) {
      dispatch(mutations.setTaskComplete(id, isComplete));
    },
    setTaskGroup(id, groupId) {
      dispatch(mutations.setTaskGroup(id, groupId));
    },
    setTaskName(id, name) {
      dispatch(mutations.setTaskName(id, name));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskDetail);
