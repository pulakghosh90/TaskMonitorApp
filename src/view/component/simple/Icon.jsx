import React from "react";

class Icon extends React.Component {
    render() {
        return (
            <span className={this.props.className} style={this.props.style} onClick={this.props.onClick}></span>
        );
    }
}

export default Icon;