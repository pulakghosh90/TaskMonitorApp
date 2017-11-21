import React from "react";
import TaskBoard from "./TaskBoard.jsx";
import _TaskService from "../../service/TaskService.js";
import _TaskUtil from "../../util/TaskUtil.js";

var TaskService = new _TaskService();
var TaskUtil = new _TaskUtil();

class TaskManager extends React.Component {
    constructor(props) {
        super(props);
        this.updateTask = this._updateTask.bind(this);
        this.addTask = this._addTask.bind(this);
        this.refreshBoards = this._refreshBoards.bind(this);
        this.moveTask = this._moveTask.bind(this);
        this.fetchTasks = this._fetchTasks.bind(this);

        this.state = { taskObj: this.fetchTasks() };
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
        var taskObj = this.fetchTasks();
        this.setState({ taskObj });
    }
    _moveTask(task, direction) {
        let status = TaskUtil.taskStatus(task.status, direction);
        task.status = status;
        this.updateTask(task);
    }
    _fetchTasks() {
        var tasks = TaskService.fetchTasks(this.props.taskName) || [];
        return TaskUtil.splitTaskByStatus(tasks);
    }
    render() {
        var taskObj = this.fetchTasks();
        var TaskBoards = Object.keys(taskObj).map(key => {
            return <TaskBoard key={key} status={key} tasks={taskObj[key]} updateTask={this.updateTask} addTask={this.addTask}
                moveTask={this.moveTask} />;
        });
        return (
            <div>
                {TaskBoards}
            </div>
        );
    }
}

export default TaskManager;