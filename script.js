
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

// Animate all buttons on page load
window.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("button");
  buttons.forEach(btn => {
    btn.style.opacity = 0;
    btn.style.transition = "opacity 1s ease, background 1s ease";
    setTimeout(() => {
      btn.style.opacity = 1;
      btn.style.background = "linear-gradient(to right, #007BFF, #00BFFF)";
      btn.style.border = "none";
      btn.style.color = "#fff";
      btn.style.cursor = "pointer";
      btn.style.borderRadius = "8px";
      btn.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
    }, 100);

    // Add hover effect
    btn.addEventListener("mouseenter", () => {
      btn.style.background = "linear-gradient(to right, #00BFFF, #007BFF)";
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.background = "linear-gradient(to right, #007BFF, #00BFFF)";
    });
  });
});
