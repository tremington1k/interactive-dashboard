let myTasks = [];
let nextId = 1;


// Calculates total weekly goal and returns a message with the user's name and total weekly goal
function weeklyGoal(userName, dailyGoal, bonusTasks) {
    let weeklyGoal = dailyGoal * 5
    let totalGoal = weeklyGoal + bonusTasks

    let output = "User: " + userName + "<br>" + "Total Weekly Goal: " + totalGoal;

    document.getElementById("goal-message").innerHTML = output;
}

// Event listener for the goal button click event
document.getElementById("goal-btn").addEventListener("click", function(event) {
    event.preventDefault();
    
    let userName = document.getElementById("user-name").value;
    let dailyGoal = parseInt(document.getElementById("daily-goal").value);
    let bonusTasks = parseInt(document.getElementById("bonus-tasks").value);

    weeklyGoal(userName, dailyGoal, bonusTasks);
});


// Initializes the task list container and creates a new unordered list for user tasks
let taskList = document.getElementById("task-list");
let userTasks = document.createElement("ul")
userTasks.id = "user-tasks";
taskList.appendChild(userTasks);

// Adds a new task to the task list and renders it in the DOM
function addTask(name, priority, isImportant) {
    let newTask = {
        id: nextId++,
        name: name,
        priority: priority,
        isImportant: isImportant,
        isCompleted: false
    };
    myTasks.push(newTask);
    renderTask(newTask);

    console.log(JSON.stringify(myTasks));
}

// Renders a task in the task list with a checkbox, task name, and priority color
function renderTask(task) {
    let listItem = document.createElement("li");
    let checkbox = document.createElement("input");
    let taskName = document.createElement("span");

    checkbox.type = "checkbox";
    checkbox.checked = task.isCompleted;
    
    taskName.textContent = task.name;
    taskName.style.color = task.isImportant ? "red" : "";
    taskName.style.textDecoration = task.isCompleted ? "line-through" : "none";

    // Event listener for the checkbox change event to update task completion status and text decoration
    checkbox.addEventListener("change", function() {
        task.isCompleted = checkbox.checked;
        taskName.style.textDecoration = task.isCompleted ? "line-through" : "none";
        console.log(JSON.stringify(myTasks));
    });

    // Set the border color based on the task priority
    let priorityColors = {
        High: "red",
        Medium: "orange",
        Low: "green"
    };
    listItem.style.borderLeft = `5px solid ${priorityColors[task.priority]}`;

    listItem.append(checkbox, taskName);
    userTasks.appendChild(listItem);
}

// Event listener for the add task button click event
document.getElementById("add-task").addEventListener("click", function(event) {
    event.preventDefault();

    let taskText = document.getElementById("task-name").value.trim();

    if (taskText !== "") {
        let taskPriority = document.getElementById("task-priority").value;
        let taskImportant = document.getElementById("task-important").checked;
        addTask(taskText, taskPriority, taskImportant);

        document.getElementById("task-name").value = "";
    }
});

// Event listener for the delete tasks button click event
document.getElementById("delete-tasks").addEventListener("click", function(event) {
    event.preventDefault();
    userTasks.innerHTML = "";
    myTasks = [];
    nextId = 1;
    console.log(JSON.stringify(myTasks));
});