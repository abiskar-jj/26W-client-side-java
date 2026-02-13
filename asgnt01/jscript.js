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
