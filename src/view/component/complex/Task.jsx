import React from "react";
import Label from "../simple/Label.jsx";
import Icon from "../simple/Icon.jsx";
import TaskEditor from "./TaskEditor.jsx";

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            className: "fa fa-pencil task-edit",
            edit: false,
            task: this.props.task || {}
        };
        this.onMouseOver = this._onMouseOver.bind(this);
        this.onMouseOut = this._onMouseOut.bind(this);
        this.toggleEditor = this._toggleEditor.bind(this);
        this.editTask = this._editTask.bind(this);
        this.onClose = this._onClose.bind(this);
    }
    _onMouseOver() {
        this.setState({
            className: "fa fa-pencil task-edit task-edit-operation"
        });
    }
    _onMouseOut() {
        this.setState({
            className: "fa fa-pencil task-edit"
        });
    }
    _toggleEditor() {
        this.setState({
            edit: !this.state.edit
        });
    }
    _editTask(taskName) {
        var task = this.state.task;
        task.name = taskName;
        this.props.editTask(task);
        this.toggleEditor();
    }
    _onClose() {
        this.toggleEditor();
    }
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
}

export default Task;