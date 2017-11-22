import React from "react";
import TaskBoard from "./TaskBoard.jsx";
import _TaskService from "../../service/TaskService.js";
import _TaskUtil from "../../util/TaskUtil.js";

var TaskService = new _TaskService();
var TaskUtil = new _TaskUtil();

class TaskManager extends React.Component {
    constructor(props) {
        super(props);
        this.state = { taskObj: this.fetchTasks() };
    }
    updateTask = (task) => {
        TaskService.updateTask(task);
        this.refreshBoards();
    }
    addTask = (task) => {
        TaskService.addTask(task);
        this.refreshBoards();
    }
    refreshBoards = () => {
        var taskObj = this.fetchTasks();
        this.setState({ taskObj });
    }
    moveTask = (task, direction) => {
        task.status = TaskUtil.taskStatus(task.status, direction);
        this.updateTask(task);
    }
    fetchTasks = () => {
        var tasks = TaskService.fetchTasks(this.props.taskName) || [];
        return TaskUtil.splitTaskByStatus(tasks);
    }
    deleteTask = (task) => {
        TaskService.deleteTask(task);
        this.refreshBoards();
    }
    render = () => {
        var taskObj = this.fetchTasks();
        var TaskBoards = Object.keys(taskObj).map(key => {
            return <TaskBoard key={key} status={key} tasks={taskObj[key]} updateTask={this.updateTask} addTask={this.addTask}
                moveTask={this.moveTask} deleteTask={this.deleteTask} />;
        });
        return (
            <div>
                {TaskBoards}
            </div>
        );
    }
}

export default TaskManager;