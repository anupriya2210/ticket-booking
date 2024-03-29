// Function to open the popup
function openPopup() {
  document.getElementById("popup-layer").style.display = "block";
}

// Function to close the popup
function closePopup() {
  document.getElementById("popup-layer").style.display = "none";
}

// Event listener for form submission
document.getElementById("booking-form").addEventListener("submit", function(event) {
  // Prevent default form submission
  event.preventDefault();
  
  // Perform form validation
  var form = event.target;
  if (form.checkValidity()) {
    // If form is valid, open the popup
    openPopup();
  }
});
