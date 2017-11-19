var React = require("react");
var Button = require("../simple/Button.jsx");
var TaskEditor = require("./TaskEditor.jsx");

var AddTask = React.createClass({
    getInitialState() {
        return {
            edit: false
        };
    },
    toggleEditor(evt) {
        this.setState({
            edit: !this.state.edit
        });
    },
    add(name) {
        debugger;
        if (name) {
            this.props.addTask(
                {
                    name,
                    status: this.props.boardType
                }
            );
        }
        this.toggleEditor();
    },
    close() {
        this.toggleEditor();
    },
    render() {
        return (
            <div>
                {!this.state.edit && <Button label="Add a Task..." className="task-btn" handleClick={this.toggleEditor} />}
                {this.state.edit && <TaskEditor onClose={this.close} onEdit={this.add} />}
            </div>
        );
    }
});

module.exports = AddTask;