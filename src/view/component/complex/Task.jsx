var React = require("react");
var Label = require("../simple/Label.jsx");
var Icon = require("../simple/Icon.jsx");
var TaskEditor = require("./TaskEditor.jsx");

var Task = React.createClass({
    getInitialState() {
        return {
            className: "fa fa-pencil task-edit",
            edit: false,
            task: this.props.task || {}
        };
    },
    onMouseOver() {
        this.setState({
            className: "fa fa-pencil task-edit task-edit-operation"
        });
    },
    onMouseOut() {
        this.setState({
            className: "fa fa-pencil task-edit"
        });
    },
    toggleEditor() {
        this.setState({
            edit: !this.state.edit
        });
    },
    editTask(taskName) {
        var task = this.state.task;
        task.name = taskName;
        this.props.editTask(task);
        this.toggleEditor();
    },
    onClose() {
        this.toggleEditor();
    },
    render() {
        debugger;
        var task = this.state.task;
        var className = "task list-card list-card-title active-card";
        return (
            <div>
                {
                    !this.state.edit &&
                    <div className={className} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}
                        onClick={this.toggleEditor}>
                        <Label value={task.name} style={{ paddingLeft: "5px" }} />
                        <Icon className={this.state.className} />
                    </div>
                }
                {
                    this.state.edit &&
                    <TaskEditor style={{ margin: "0px" }} taskName={task.name} onEdit={this.editTask} onClose={this.onClose} />
                }
            </div>
        );
    }
});

module.exports = Task;