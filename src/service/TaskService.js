
var tasks = [
    { id: 1, name: "Eating Lunch", status: "doing" },
    { id: 2, name: "Eating Lunch", status: "doing" },
    { id: 3, name: "Ate Breakfast", status: "done" },
    { id: 4, name: "Ate Breakfast", status: "done" },
    { id: 5, name: "Eat Dinner", status: "todo" }
];

var TaskService = {
    fetchTasks(taskName) {
        if (taskName)
            return this.search(taskName);
        return tasks;
    },
    search(name) {
        return tasks.filter(t => t.name.toLowerCase().startsWith(name.toLowerCase()));
    },
    addTask(task) {
        tasks.push({
            id: tasks.length + 1,
            name: task.name,
            status: task.status
        });
    },
    updateTask(newTask) {
        var oldTask = tasks.filter(t => t.id == newTask.id)[0];
        oldTask.name = newTask.name;
        oldTask.status = newTask.status;
    }
};

module.exports = TaskService;