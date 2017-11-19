var React = require("react");
var ReactDOM = require("react-dom");
var TaskMonitor = require("../view/container/TaskMonitor.jsx");

ReactDOM.render(
    <div className="app-center">
        <TaskMonitor />
    </div>,
    document.getElementById("app")
);