// Change text content dynamically
document.getElementById("changeTextBtn").addEventListener("click", () => {
  const p = document.getElementById("dynamicText");
  p.textContent = "Text has been changed!";
});

// Modify CSS styles via JavaScript
document.getElementById("changeStyleBtn").addEventListener("click", () => {
  const p = document.getElementById("styleText");
  p.style.color = "crimson";
  p.style.fontWeight = "bold";
  p.style.fontSize = "1.5rem";
});

// Add or remove an element when button is clicked
const container = document.getElementById("elementContainer");

document.getElementById("addElementBtn").addEventListener("click", () => {
  const newElem = document.createElement("p");
  newElem.textContent = "New element added!";
  newElem.classList.add("added-element");
  container.appendChild(newElem);
});

document.getElementById("removeElementBtn").addEventListener("click", () => {
  const lastElem = container.lastElementChild;
  if (lastElem) {
    container.removeChild(lastElem);
  }
});

