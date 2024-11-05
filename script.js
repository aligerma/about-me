// Display a greeting based on the time of day
let greeting = document.getElementById("greeting");
let hour = new Date().getHours();

if (hour < 12) {
    greeting.textContent = "Good morning!";
} else if (hour < 18) {
    greeting.textContent = "Good afternoon!";
} else {
    greeting.textContent = "Good evening!";
}
