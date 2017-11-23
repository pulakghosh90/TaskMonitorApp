import React from "react";
import ToolBar from "./ToolBar.jsx";
import TaskManager from "./TaskManager.jsx";

class TaskMonitor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskName: ""
        };
    }
    handleSearch = (taskName) => {
        this.setState((prevState) => {
            taskName
        });
    }
    render() {
        return (
            <div className="task-monitor">
                <ToolBar search={this.handleSearch} />
                <TaskManager {...this.state} />
            </div>
        );
    }
}

export default TaskMonitor;