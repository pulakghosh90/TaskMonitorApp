import React from "react";
import Button from "../simple/Button.jsx";
import TextArea from "../simple/TextArea.jsx";

class TaskEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskName: this.props.taskName || "",
            focus: this.props.focus || true
        };
    }
    onChange = (evt) => {
        this.setState({
            taskName: evt.target.value
        });
    }
    onClose = (evt) => {
        this.props.onClose(evt);
    }
    onEdit = (evt) => {
        this.props.onEdit(this.state.taskName, evt);
    }
    render() {
        return (
            <div className="task-editor" style={this.props.style}>
                <TextArea className="task-textarea" value={this.state.taskName} focus={this.state.focus}
                    onChange={this.onChange} />
                <Button label="Submit" className="task-btn" onClick={this.onEdit} />
                <Button label="Close" className="task-btn" onClick={this.onClose} />
            </div>
        );
    }
}

export default TaskEditor;