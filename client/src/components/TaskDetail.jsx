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
    <>
      <div>
        <input
          type="text"
          value={task.name}
          onChange={(e) => setTaskName(id, e.target.value)}
        />
      </div>
      <div>
        <button onClick={setTaskComplete.bind(this, id, !isComplete)}>
          {isComplete ? `re-open` : `complete`}
        </button>
      </div>
      <div>
        <select
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
          <button>Done</button>
        </Link>
      </div>
    </>
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
