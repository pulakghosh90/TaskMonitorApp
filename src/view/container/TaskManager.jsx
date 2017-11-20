import React from "react";
import TaskBoard from "./TaskBoard.jsx";
import TaskService from "../../service/TaskService.js";
import TaskUtil from "../../util/TaskUtil.js";

class TaskManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.updateTask = this._updateTask.bind(this);
        this.addTask = this._addTask.bind(this);
        this.refreshBoards = this._refreshBoards.bind(this);
    }
    _updateTask(task) {
        TaskService.updateTask(task);
        this.refreshBoards();
    }
    _addTask(task) {
        TaskService.addTask(task);
        this.refreshBoards();
    }
    _refreshBoards() {
        this.setState({});
    }
    render() {
        var tasks = TaskService.fetchTasks(this.props.taskName) || [];
        var taskObj = TaskUtil.splitTaskByStatus(tasks);
        var TaskBoards = Object.keys(taskObj).map(key => {
            return <TaskBoard key={key} status={key} tasks={taskObj[key]} updateTask={this.updateTask} addTask={this.addTask} />;
        });
        return (
            <div>
                {TaskBoards}
            </div>
        );
    }
}

export default TaskManager;