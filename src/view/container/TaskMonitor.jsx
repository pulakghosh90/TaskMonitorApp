var React = require("react");
var ToolBar = require("./ToolBar.jsx");
var TaskManager = require("./TaskManager.jsx");

var TaskMonitor = React.createClass({
    getInitialState() {
        return {
            taskName: ""
        };
    },
    handleSearch(taskName) {
        this.setState({
            taskName
        });
    },
    render() {
        return (
            <div className="task-monitor">
                <ToolBar handleSearch={this.handleSearch} />
                <TaskManager {...this.state} />
            </div>
        );
    }
});

module.exports = TaskMonitor;