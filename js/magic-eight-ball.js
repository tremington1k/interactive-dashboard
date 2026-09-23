// Magic Eight Ball Answers
let answers = [
    "It is certain.",
    "As I see it, yes.",
    "Reply hazy, try again.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "Outlook not so good."
]

// Function to display a random answer
function displayAnswer() {
    let index = Math.floor(Math.random() * answers.length);
    
    let circle = document.getElementById("circle");
    circle.style.display = "flex";
    circle.innerHTML = answers[index];
}

// Event listener for the Magic Eight Ball
document.getElementById("ball").addEventListener("mousedown", function() {
    let question = document.getElementById("question").value;
    if (question.trim() === "") {
        alert("Please ask a question.");
        return;
    } else {
        displayAnswer();
    }
});

// Event listener for the reset button
document.getElementById("reset").addEventListener("click", function() {
  document.getElementById("circle").style.display = "none";
});