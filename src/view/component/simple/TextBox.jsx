var React = require("react");

var TextBox = React.createClass({
    render() {
        var className = this.props.className;
        return (
            <div>
                <input type="text" className={className} style={this.props.style} placeholder={this.props.placeholder}
                    onChange={this.props.handleChange} />
            </div>
        );
    }
});

module.exports = TextBox;