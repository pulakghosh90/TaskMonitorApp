
var tasksJson = [
    { id: 1, name: "Verify Defects", status: "todo" },
    { id: 2, name: "Code Review", status: "todo" },
    { id: 3, name: "Update Status", status: "doing" },
    { id: 4, name: "React Session", status: "doing" },
    { id: 5, name: "Standup", status: "done" },
    { id: 6, name: "Coding", status: "done" }
];

class TaskService {
    retrieveFromLocalStorage() {
        return JSON.parse(localStorage.getItem("tasks")) || tasksJson;
    }
    saveToLocalStorage(tasks) {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    fetchTasks(taskName) {
        if (taskName)
            return this.search(taskName);
        return this.retrieveFromLocalStorage();
    }
    search(name) {
        var tasks = this.retrieveFromLocalStorage();
        return tasks.filter(t => t.name.toLowerCase().startsWith(name.toLowerCase()));
    }
    addTask(task) {
        var tasks = this.retrieveFromLocalStorage();
        tasks.push({
            id: tasks.length + 1,
            name: task.name,
            status: task.status
        });
        this.saveToLocalStorage(tasks);
    }
    updateTask(newTask) {
        var tasks = this.retrieveFromLocalStorage();
        var oldTask = tasks.filter(t => t.id == newTask.id)[0];
        oldTask.name = newTask.name;
        oldTask.status = newTask.status;
        this.saveToLocalStorage(tasks);
    }
}

export default TaskService;