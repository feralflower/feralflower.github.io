//1. greeting
// changes the greeting based on the time of day
window.addEventListener("load", function() {
  let greeting = document.getElementById("greeting");

  let hour = new Date().getHours(); 
  if (hour < 12) {
    greeting.textContent = "Good Morning!";
  } else if (hour < 18) {
    greeting.textContent = "Good Afternoon!";
  } else {
    greeting.textContent = "Good Evening!";
  }
});
//store mood
let currentMood = "";

// 2. Mood buttons 
// changes bg color + stores current mood in "current mood"
document.getElementById("happy").addEventListener("click", function() {
  currentMood = "(˶˃ ᵕ ˂˶) Happy!";
  document.body.className = "happy";
  document.getElementById("moodMessage").textContent = "Glad you're feeling happy!";
});

document.getElementById("meh").addEventListener("click", function() {
  currentMood = "(„• ֊ •„) Meh..";
  document.body.className = "meh";
  document.getElementById("moodMessage").textContent = "Hope your day gets better!";
});

document.getElementById("upset").addEventListener("click", function() {
  currentMood = "(｡•́︿•̀｡) Upset";
  document.body.className = "upset";
  document.getElementById("moodMessage").textContent = "It's okay to feel sad.";
});

// 3 & 4. Add entry to list
// format: Mood - entry date
// example: (˶˃ ᵕ ˂˶) Happy! - cats! (4/28/2026)
document.getElementById("addEntry").addEventListener("click", function() {
  let input = document.getElementById("moodInput");

  if (input.value !== "" && currentMood !== "") {

    let today = new Date();
    let date = today.toLocaleDateString();

    let li = document.createElement("li");
    li.textContent = currentMood + " - " + input.value + " (" + date + ")";

    document.getElementById("entryList").appendChild(li);

    input.value = "";
  } else {
    alert("Please select a mood and write something!");
  }
});

//5. clear all
document.getElementById("clearButton").addEventListener("click", function() {
  document.getElementById("entryList").innerHTML = "";
});