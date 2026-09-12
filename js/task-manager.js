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