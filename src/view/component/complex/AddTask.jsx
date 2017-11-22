import React from "react";
import Button from "../simple/Button.jsx";
import TaskEditor from "./TaskEditor.jsx";

class AddTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false
        };
    }
    toggleEditor = () => {
        this.setState({
            edit: !this.state.edit
        });
    }
    add = (name) => {
        if (name) {
            this.props.addTask(
                {
                    name,
                    status: this.props.boardType
                }
            );
        }
        this.toggleEditor();
    }
    close = () => {
        this.toggleEditor();
    }
    render = () => {
        return (
            <div>
                {!this.state.edit && <Button label="Add a Task..." className="task-btn" onClick={this.toggleEditor} />}
                {this.state.edit && <TaskEditor onClose={this.close} onEdit={this.add} />}
            </div>
        );
    }
}

export default AddTask;