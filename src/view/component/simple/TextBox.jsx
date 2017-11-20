import React from "react";

class TextBox extends React.Component {
    render() {
        var className = this.props.className;
        return (
            <div>
                <input type="text" className={className} style={this.props.style} placeholder={this.props.placeholder}
                    onChange={this.props.handleChange} />
            </div>
        );
    }
}

export default TextBox;