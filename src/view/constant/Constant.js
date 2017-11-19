
var C = {
    "done": "Done",
    "doing": "Doing",
    "todo": "To Do"
}

var Constant = {
    getStatusLabel: function (status) {
        return C[status];
    }
}

module.exports = Constant;