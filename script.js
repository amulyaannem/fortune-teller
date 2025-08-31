// Step 1: Switch from Loading Screen → Choice Screen
window.onload = function() {
  setTimeout(() => {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("choice-screen").style.display = "block";
    document.getElementById("scroll-screen").style.display = "none";
  }, 3000); // after 3 seconds
};

// Step 2: Fortune messages
const fortunes = {
  love: [
    "💖 A new spark will ignite soon.",
    "💕 Love is closer than you think.",
    "🌹 Someone secretly admires you."
  ],
  career: [
    "🚀 A big opportunity is coming.",
    "💼 Your hard work will pay off soon.",
    "📚 A new skill will change your future."
  ],
  health: [
    "🍀 Energy flows through you.",
    "🧘 Your body craves balance.",
    "🌞 Good habits bring long life."
  ]
};

// Step 3: Function when a button is clicked
function pickCategory(category) {
  // Hide choice screen, show scroll
  document.getElementById("choice-screen").style.display = "none";
  document.getElementById("scroll-screen").style.display = "flex";

  // Pick random fortune
  let options = fortunes[category];
  let randomFortune = options[Math.floor(Math.random() * options.length)];

  // Show it inside the scroll
  document.getElementById("fortune-text").textContent = randomFortune;
}

// Step 4: Connect buttons to function
document.getElementById("love-btn").onclick = () => pickCategory("love");
document.getElementById("career-btn").onclick = () => pickCategory("career");
document.getElementById("health-btn").onclick = () => pickCategory("health");
