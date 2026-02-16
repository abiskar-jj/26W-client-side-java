
document.addEventListener("DOMContentLoaded", () => {

     // Get slider elements
  const redSlider = document.getElementById("red");
  const greenSlider = document.getElementById("green");
  const blueSlider = document.getElementById("blue");

  // HTML element whose background will change
  const htmlElement = document.documentElement;

  // Function to update background color
  function updateBackgroundColor() {
    const r = Number(redSlider.value);
    const g = Number(greenSlider.value);
    const b = Number(blueSlider.value);

    htmlElement.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }


    // Event listeners
    redSlider.addEventListener("input", updateBackgroundColor);
    greenSlider.addEventListener("input", updateBackgroundColor);
    blueSlider.addEventListener("input", updateBackgroundColor);
  


});

 