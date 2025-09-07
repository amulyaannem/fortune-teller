// Step 1: Switch from Loading Screen → Choice Screen
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loading-screen").classList.add("hidden");
    document.getElementById("choice-screen").classList.remove("hidden");
    document.getElementById("scroll-screen").classList.add("hidden");
  }, 3000); // after 3 seconds
});

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
  // Hide choice, show scroll
  document.getElementById("choice-screen").classList.add("hidden");
  document.getElementById("scroll-screen").classList.remove("hidden");

  // Pick random fortune
  let options = fortunes[category];
  let randomFortune = options[Math.floor(Math.random() * options.length)];

  // Show it with fade-in
  let fortuneText = document.getElementById("fortune-text");
  fortuneText.classList.add("opacity-0");
  fortuneText.textContent = randomFortune;
  setTimeout(() => {
    fortuneText.classList.remove("opacity-0");
  }, 100);
}

// Step 4: Connect buttons
document.getElementById("love-btn").onclick = () => pickCategory("love");
document.getElementById("career-btn").onclick = () => pickCategory("career");
document.getElementById("health-btn").onclick = () => pickCategory("health");

// Step 5: Back button to return to choice
document.getElementById("back-btn").onclick = () => {
  document.getElementById("scroll-screen").classList.add("hidden");
  document.getElementById("choice-screen").classList.remove("hidden");
};
