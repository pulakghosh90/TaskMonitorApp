
class TaskUtil {
    splitTaskByStatus(tasks) {
        return {
            todo: tasks.filter(t => t.status == "todo"),
            doing: tasks.filter(t => t.status == "doing"),
            done: tasks.filter(t => t.status == "done")
        };
    }
    taskStatus(status, direction) {
        if (status == "todo" && direction == "right") {
            return "doing";
        } else if (status == "doing" && direction == "left") {
            return "todo";
        } else if (status == "doing" && direction == "right") {
            return "done";
        } else if (status == "done" && direction == "left") {
            return "doing";
        }
        return null;
    }
}

export default TaskUtil;