var React = require("react");
var TaskBoard = require("./TaskBoard.jsx");
var TaskService = require("../../service/TaskService.js");
var TaskUtil = require("../../util/TaskUtil.js");

var TaskManager = React.createClass({
    getInitialState() {
        return {};
    },
    updateTask(task) {
        TaskService.updateTask(task);
        this.refreshBoards();
    },
    addTask(task) {
        TaskService.addTask(task);
        this.refreshBoards();
    },
    refreshBoards() {
        this.setState({});
    },
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
});

module.exports = TaskManager;