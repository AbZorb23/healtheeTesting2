
function showPage(id) {
  document.querySelectorAll(".page").forEach(p => p.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

function login() {
  const user = document.getElementById("loginUsername").value;
  const pass = document.getElementById("loginPassword").value;
  if (!user || !pass) return alert("Please enter all fields");
  showPage("mainPage");
}

function register() {
  const user = document.getElementById("registerUsername").value;
  const pass = document.getElementById("registerPassword").value;
  const confirm = document.getElementById("confirmPassword").value;
  if (!user || !pass || pass !== confirm) return alert("Check all fields");
  showPage("loginPage");
}

function submitHealthData() {
  const sleep = document.getElementById("sleep").value;
  const water = document.getElementById("water").value;
  const meals = document.getElementById("meals").value;
  const activity = document.getElementById("activity").value;
  const mood = document.getElementById("mood").value;
  if (!sleep || !water || !meals || !activity || !mood) return alert("All required fields must be filled.");
  showPage("loadingPage");
  setTimeout(() => {
    document.getElementById("resultText").innerText = "Based on your input, here's your health plan.";
    document.getElementById("dosList").innerHTML = "<li>Drink more water</li><li>Sleep early</li>";
    document.getElementById("dontsList").innerHTML = "<li>Avoid processed food</li><li>Don't skip meals</li>";
    showPage("resultPage");
  }, 2000);
}

function updateSettings() {
  alert("Settings updated!");
}

document.getElementById("downloadVideoBtn").addEventListener("click", function () {
  const videoUrl = "assets/stretching_damien_hakeem.mp4";
  const a = document.createElement("a");
  a.href = videoUrl;
  a.download = "stretching_damien_hakeem.mp4";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});
