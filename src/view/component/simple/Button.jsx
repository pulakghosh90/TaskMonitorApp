import React from "react";

class Button extends React.Component {
    render() {
        var label = this.props.label;
        var className = this.props.className;
        return (
            <button type="button" className={className} onClick={this.props.onClick}>{label}</button>
        );
    }
}

export default Button;