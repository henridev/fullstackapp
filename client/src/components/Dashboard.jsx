import React from "react";
import { connect } from "react-redux";
import TaskList from "./TaskList";

function Dashboard({ groups }) {
  return (
    <div>
      <h1>My Todos</h1>
      <div className="row">
        {groups.map((group, i) => (
          <TaskList
            key={i}
            id={group.id}
            name={group.name}
            className="column"
          />
        ))}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return { groups: state.groups };
}

export default connect(mapStateToProps)(Dashboard);
