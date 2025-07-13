function showWelcomeMessage() {
  // Create a new element
  const message = document.createElement("div");

  // Add some content and styling
  message.innerText = "👋 Welcome Professor!";
  message.style.backgroundColor = "#f0f8ff";
  message.style.color = "#333";
  message.style.padding = "15px";
  message.style.textAlign = "center";
  message.style.fontSize = "20px";
  message.style.fontWeight = "bold";
  message.style.borderBottom = "2px solid #ccc";

  // Insert it at the top of the body
  document.body.insertBefore(message, document.body.firstChild);
}

// Run the function when the page loads
window.onload = showWelcomeMessage;





function askSriLanka() {
  let response = prompt("What do you know about Sri Lanka?");
  let display = document.getElementById("user-answer");

  if (response) {
    display.textContent = "You said: " + response;
  } else {
    display.textContent = "You didn't type anything.";
  }
}






