import React from "react";
import Label from "../simple/Label.jsx";
import Icon from "../simple/Icon.jsx";
import TaskEditor from "./TaskEditor.jsx";

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deleteIcon: "fa fa-trash-o task-edit",
            pencilIcon: "fa fa-pencil task-edit",
            arrowLeftIcon: "fa fa-arrow-left task-edit",
            arrowRightIcon: "fa fa-arrow-right task-edit",
            edit: false,
            task: this.props.task || {}
        };
    }
    onMouseOver = () => {
        this.setState({
            deleteIcon: "fa fa-trash-o task-edit task-edit-operation",
            pencilIcon: "fa fa-pencil task-edit task-edit-operation",
            arrowLeftIcon: "fa fa-arrow-left task-edit task-edit-operation",
            arrowRightIcon: "fa fa-arrow-right task-edit task-edit-operation"
        });
    }
    onMouseOut = () => {
        this.setState({
            deleteIcon: "fa fa-trash-o task-edit",
            pencilIcon: "fa fa-pencil task-edit",
            arrowLeftIcon: "fa fa-arrow-left task-edit",
            arrowRightIcon: "fa fa-arrow-right task-edit"
        });
    }
    toggleEditor = () => {
        this.setState({
            edit: !this.state.edit
        });
    }
    editTask = (taskName) => {
        var task = this.state.task;
        task.name = taskName;
        this.props.editTask(task);
        this.toggleEditor();
    }
    onClose = () => {
        this.toggleEditor();
    }
    moveTaskToRight = () => {
        this.props.moveTask(this.state.task, "right");
    }
    moveTaskToLeft = () => {
        this.props.moveTask(this.state.task, "left");
    }
    deleteTask = () => {
        this.props.deleteTask(this.state.task);
    }
    render() {
        var task = this.state.task;
        var className = "task list-card list-card-title active-card";
        var canMoveToRight = task.status === "todo" || task.status === "doing";
        var canMoveToLeft = task.status === "done" || task.status === "doing";
        return (
            <div>
                {
                    !this.state.edit &&
                    <div className={className} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
                        <Label value={task.name} style={{ paddingLeft: "5px", verticalAlign: "middle" }} />
                        <Icon className={this.state.deleteIcon} onClick={this.deleteTask} style={{ paddingLeft: "10px" }} />
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