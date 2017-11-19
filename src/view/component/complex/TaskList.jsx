var React = require("react");
var Task = require("./Task.jsx");

var TaskList = React.createClass({
    render() {
        var tasks = this.props.tasks || [];
        var TaskComponents = tasks.map(task => <Task key={task.id} task={task} editTask={this.props.editTask} />);
        return (
            <div style={{ margin: "5px" }}>
                {TaskComponents}
            </div>
        );
    }
});

module.exports = TaskList;