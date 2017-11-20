
class TaskUtil {
    splitTaskByStatus(tasks) {
        return {
            todo: tasks.filter(t => t.status == "todo"),
            doing: tasks.filter(t => t.status == "doing"),
            done: tasks.filter(t => t.status == "done")
        };
    }
};

export default new TaskUtil();