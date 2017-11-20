
var C = {
    "done": "Done",
    "doing": "Doing",
    "todo": "To Do"
}

class Constant {
    getStatusLabel(status) {
        return C[status];
    }
}

export default new Constant();