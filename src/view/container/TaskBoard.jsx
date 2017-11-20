import React from "react";
import Label from "../component/simple/Label.jsx";
import TaskList from "../component/complex/TaskList.jsx";
import AddTask from "../component/complex/AddTask.jsx";
import Constant from "../constant/Constant.js";

class TaskBoard extends React.Component {
    render() {
        var status = Constant.getStatusLabel(this.props.status);
        return (
            <div className="task-board">
                <Label value={status} className="task-status" />
                <TaskList boardType={this.props.status} tasks={this.props.tasks} editTask={this.props.updateTask} />
                <AddTask boardType={this.props.status} addTask={this.props.addTask} />
            </div>
        );
    }
}

module.exports = TaskBoard;