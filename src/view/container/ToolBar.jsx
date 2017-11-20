import React from "react";
import TextBox from "../component/simple/TextBox.jsx";

class ToolBar extends React.Component {
    render() {
        return (
            <div style={{ padding: "5px" }}>
                <TextBox className="task-search" placeholder="Search Task" onChange={this.props.search} />
            </div>
        );
    }
}

export default ToolBar;