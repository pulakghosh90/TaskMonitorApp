import React from "react";

class Label extends React.Component {
    render() {
        var value = this.props.value;
        return (
            <span className={this.props.className} style={this.props.style}>{value}</span>
        );
    }
}

export default Label;