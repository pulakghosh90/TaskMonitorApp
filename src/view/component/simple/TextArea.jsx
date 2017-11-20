import React from "react";

class TextArea extends React.Component {
    render() {
        return (
            <textarea className={this.props.className} autoFocus={this.props.focus} value={this.props.value}
                onChange={this.props.onChange} />
        );
    }
}

export default TextArea;