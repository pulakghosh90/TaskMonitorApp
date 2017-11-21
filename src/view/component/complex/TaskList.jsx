import React from "react";
import Task from "./Task.jsx";

class TaskList extends React.Component {
    render() {
        var tasks = this.props.tasks || [];
        var TaskComponents = tasks.map(
            task => <Task key={task.id} task={task} editTask={this.props.editTask}
                moveTask={this.props.moveTask} />
        );
        return (
            <div style={{ margin: "5px" }}>
                {TaskComponents}
            </div>
        );
    }
}

export default TaskList;