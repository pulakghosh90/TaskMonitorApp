var React = require("react");
var Button = require("../simple/Button.jsx");
var TextArea = require("../simple/TextArea.jsx");

var TaskEditor = React.createClass({
    getInitialState() {
        return {
            taskName: this.props.taskName || "",
            focus: this.props.focus || true
        };
    },
    onChange(evt) {
        this.setState({
            taskName: evt.target.value
        });
    },
    onClose(evt) {
        this.props.onClose(evt);
    },
    onEdit(evt) {
        this.props.onEdit(this.state.taskName, evt);
    },
    render() {
        return (
            <div className="task-editor" style={this.props.style}>
                {/* <textarea className="task-textarea" value={this.state.taskName} autoFocus={this.state.focus}
                    onChange={this.onChange} /> */}
                <TextArea className="task-textarea" value={this.state.taskName} focus={this.state.focus}
                    onChange={this.onChange} />
                <Button label="Submit" className="task-btn" handleClick={this.onEdit} />
                <Button label="Close" className="task-btn" handleClick={this.onClose} />
            </div>
        );
    }
});

module.exports = TaskEditor;