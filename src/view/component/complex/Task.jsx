import React from "react";
import Label from "../simple/Label.jsx";
import Icon from "../simple/Icon.jsx";
import TaskEditor from "./TaskEditor.jsx";

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pencilIcon: "fa fa-pencil task-edit",
            arrowLeftIcon: "fa fa-arrow-left task-edit",
            arrowRightIcon: "fa fa-arrow-right task-edit",
            edit: false,
            task: this.props.task || {}
        };
        this.onMouseOver = this._onMouseOver.bind(this);
        this.onMouseOut = this._onMouseOut.bind(this);
        this.toggleEditor = this._toggleEditor.bind(this);
        this.editTask = this._editTask.bind(this);
        this.onClose = this._onClose.bind(this);
        this.moveTaskToRight = this._moveTaskToRight.bind(this);
        this.moveTaskToLeft = this._moveTaskToLeft.bind(this);
    }
    _onMouseOver() {
        this.setState({
            pencilIcon: "fa fa-pencil task-edit task-edit-operation",
            arrowLeftIcon: "fa fa-arrow-left task-edit task-edit-operation",
            arrowRightIcon: "fa fa-arrow-right task-edit task-edit-operation"
        });
    }
    _onMouseOut() {
        this.setState({
            pencilIcon: "fa fa-pencil task-edit",
            arrowLeftIcon: "fa fa-arrow-left task-edit",
            arrowRightIcon: "fa fa-arrow-right task-edit"
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
    _moveTaskToRight() {
        this.props.moveTask(this.state.task, "right");
    }
    _moveTaskToLeft() {
        this.props.moveTask(this.state.task, "left");
    }
    render() {
        var task = this.state.task;
        var className = "task list-card list-card-title active-card";
        let canMoveToRight = task.status === "todo" || task.status === "doing";
        let canMoveToLeft = task.status === "done" || task.status === "doing";
        return (
            <div>
                {
                    !this.state.edit &&
                    <div className={className} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
                        <Label value={task.name} style={{ paddingLeft: "5px", verticalAlign: "middle" }} />
                        <Icon className={this.state.pencilIcon} style={{ paddingLeft: "10px" }} onClick={this.toggleEditor} />
                        {
                            canMoveToRight &&
                            <Icon className={this.state.arrowRightIcon} style={{ paddingLeft: "10px" }} onClick={this.moveTaskToRight} />
                        }
                        {
                            canMoveToLeft &&
                            <Icon className={this.state.arrowLeftIcon} onClick={this.moveTaskToLeft} />
                        }
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