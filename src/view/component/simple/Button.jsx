var React = require("react");

var Button = React.createClass({
    onClick(evt) {
        this.props.handleClick(evt);
    },
    render() {
        var label = this.props.label;
        var className = this.props.className;
        return (
            <button type="button" className={className} onClick={this.onClick}>{label}</button>
        );
    }
});

module.exports = Button;