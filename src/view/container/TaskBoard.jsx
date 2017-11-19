var React = require("react");
var Label = require("../component/simple/Label.jsx");
var TaskList = require("../component/complex/TaskList.jsx");
var AddTask = require("../component/complex/AddTask.jsx");
var Constant = require("../constant/Constant.js");

var TaskBoard = React.createClass({
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
});

module.exports = TaskBoard;