var React = require("react");

var Icon = React.createClass({
    render() {
        return (
            <span className={this.props.className} style={this.props.style} onClick={this.props.onClick}></span>
        );
    }
});

module.exports = Icon;