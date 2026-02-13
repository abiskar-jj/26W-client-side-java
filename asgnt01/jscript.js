// Arrays of words
const characters = ["a dragon", "a ninja", "a robot", "a pirate", "my friend"];
const places = ["in space", "at school", "in a forest", "at the beach", "inside a castle"];
const actions = ["found", "broke", "ate", "stole", "invented"];
const things = ["a magic sandwich", "a golden phone", "a weird potion", "a flying car", "a talking cat"];
const endings = ["and ran away.", "and saved the world!", "and exploded!", "and laughed forever.", "and disappeared."];

// Index trackers
let i1 = -1, i2 = -1, i3 = -1, i4 = -1, i5 = -1;

// Function to cycle choices
function next(arr, index) {
    return (index + 1) % arr.length;
}

// Character
document.getElementById("btnCharacter").onclick = function() {
    i1 = next(characters, i1);
    document.getElementById("choiceCharacter").textContent = characters[i1];
};

// Place
document.getElementById("btnPlace").onclick = function() {
    i2 = next(places, i2);
    document.getElementById("choicePlace").textContent = places[i2];
};

// Action
document.getElementById("btnAction").onclick = function() {
    i3 = next(actions, i3);
    document.getElementById("choiceAction").textContent = actions[i3];
};

// Thing
document.getElementById("btnThing").onclick = function() {
    i4 = next(things, i4);
    document.getElementById("choiceThing").textContent = things[i4];
};

// Ending
document.getElementById("btnEnding").onclick = function() {
    i5 = next(endings, i5);
    document.getElementById("choiceEnding").textContent = endings[i5];
};
// Build final story
document.getElementById("showStory").onclick = function() {

    let story =
        characters[i1] + " " +
        places[i2] + " " +
        actions[i3] + " " +
        things[i4] + " " +
        endings[i5];

    document.getElementById("storyOutput").textContent = story;
};
