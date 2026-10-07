let myTasks = [];


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

// Event listener for the add task button click event
document.getElementById("add-task").addEventListener("click", function(event) {
    event.preventDefault();

    let taskText = document.getElementById("task-name").value.trim();

    if (taskText !== "") {
        myTasks.push(taskText);
        let listItem = document.createElement("li");
        listItem.textContent = taskText;
        userTasks.appendChild(listItem);
    }

});