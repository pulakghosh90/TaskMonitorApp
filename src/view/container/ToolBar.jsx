import React from "react";
import TextBox from "../component/simple/TextBox.jsx";

class ToolBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this._handleChange.bind(this);
    }
    _handleChange(taskName) {
        this.props.handleSearch(taskName);
    }
    render() {
        return (
            <div style={{ padding: "5px" }}>
                <TextBox handleChange={this.handleChange} className="task-search" placeholder="Search Task" />
            </div>
        );
    }
}

export default ToolBar;