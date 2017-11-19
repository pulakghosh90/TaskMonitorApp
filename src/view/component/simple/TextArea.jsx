var React = require("react");

var TextArea = React.createClass({
    render() {
        return (
            <textarea className={this.props.className} autoFocus={this.props.focus} value={this.props.value}
                onChange={this.props.onChange} />
        );
    }
});

module.exports = TextArea;