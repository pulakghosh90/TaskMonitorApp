import React from "react";
import ToolBar from "./ToolBar.jsx";
import TaskManager from "./TaskManager.jsx";

class TaskMonitor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskName: ""
        };
        this.handleSearch = this._handleSearch.bind(this);
    }
    _handleSearch(taskName) {
        this.setState({
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