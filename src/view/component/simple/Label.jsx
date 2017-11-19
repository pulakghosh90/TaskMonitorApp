var React = require("react");

var Label = React.createClass({
    render() {
        var value = this.props.value;
        return (
            <span className={this.props.className} style={this.props.style}>{value}</span>
        );
    }
});

module.exports = Label;