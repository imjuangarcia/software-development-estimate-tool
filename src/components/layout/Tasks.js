import React from "react";
import AddTaskForm from "../components/AddTaskForm";
import EditTaskForm from "../components/EditTaskForm";

const Tasks = (props) => {
  return (
    <section className={props.user === undefined || props.owner !== props.user.uid ? "hidden" : "tasks edit" }>
      <div className="title">
        <h2>Tasks</h2>
      </div>
      {props.tasks ? Object.keys(props.tasks).map(key => (
        <EditTaskForm
          key={key}
          index={key}
          task={props.tasks[key]}
          updateTask={props.updateTask}
          deleteTask={props.deleteTask}
          addToEstimate={props.addToEstimate}
        />
      )) : ''}
      <h3>Add a New Task</h3>
      <AddTaskForm addTask={props.addTask} />
      <button className="sample" onClick={props.loadSampleTasks}>
        Load Sample Tasks
      </button>
    </section>
  );
}

export default Tasks;
