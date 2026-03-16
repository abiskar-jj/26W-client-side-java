let petName = "Luna";
let petType = "dragon";
let petAge = 3;
let isHungry = false;
let mood = "excited";
let favoriteActivity = "flying";

const ageText = document.getElementById("ageText");
const hungryText = document.getElementById("hungryText");
const description = document.getElementById("description");

const randomBtn = document.getElementById("randomBtn");
const ageUp = document.getElementById("ageUp");
const ageDown = document.getElementById("ageDown");

const nameInput = document.getElementById("nameInput");
const nameBtn = document.getElementById("nameBtn");
const hungryCheck = document.getElementById("hungryCheck");

const petTypes = ["dog", "cat", "dragon", "hamster"];
const moods = ["happy", "sleepy", "excited", "grumpy"];
const activities = ["flying", "playing", "napping", "running"];

function render() {
  ageText.textContent = petAge;
  hungryText.textContent = isHungry ? "Hungry" : "Not hungry";

  description.textContent =
    "Meet " + petName + ", a " + petAge + "-year-old " + petType +
    " who loves " + favoriteActivity +
    " and is currently feeling " + mood + "!";
}

function randomPick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

randomBtn.addEventListener("click", () => {
  petType = randomPick(petTypes);
  mood = randomPick(moods);
  favoriteActivity = randomPick(activities);
  petAge = Math.floor(Math.random() * 11);
  render();
});

ageUp.addEventListener("click", () => {
    petAge = petAge + 1;
    render();
  });
  
  ageDown.addEventListener("click", () => {
    petAge = petAge - 1;
    if (petAge < 0) petAge = 0;
    render();
  });
  
  nameBtn.addEventListener("click", () => {
    const newName = nameInput.value.trim();
    if (newName !== "") {
      petName = newName;
      render();
    }
  });
  
  hungryCheck.addEventListener("change", () => {
    isHungry = hungryCheck.checked;
    render();
  });
  render();