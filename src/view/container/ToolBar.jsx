var React = require("react");
var TextBox = require("../component/simple/TextBox.jsx");

var ToolBar = React.createClass({
    handleChange(taskName) {
        this.props.handleSearch(taskName);
    },
    render() {
        return (
            <div style={{ padding: "5px" }}>
                <TextBox handleChange={this.handleChange} className="task-search" placeholder="Search Task" />
            </div>
        );
    }
});

module.exports = ToolBar;