import React from "react";

class TextBox extends React.Component {
    constructor(props) {
        debugger;
        super(props);
        this.onChange = this._onChange.bind(this);
    }
    _onChange(evt) {
        debugger;
        this.props.onChange(evt.target.value, evt);
    }
    render() {
        var className = this.props.className;
        return (
            <input type="text" className={className} style={this.props.style} placeholder={this.props.placeholder}
                onChange={this.onChange} />
        );
    }
}

export default TextBox;