document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.getElementById("submitButton");

  // Add click event listener to the button
  submitButton?.addEventListener("click", function () {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validate the form fields
    if (!name || !email || !phone || !message) {
      alert("Please fill out all fields before submitting!");
      return;
    }

    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Validate phone format (optional, basic validation for 10-digit number)
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    // Save data to session storage
    sessionStorage.setItem("contactName", name);
    sessionStorage.setItem("contactEmail", email);
    sessionStorage.setItem("contactPhone", phone);
    sessionStorage.setItem("contactMessage", message);

    // Show a confirmation message (instead of alert)
    const successMessage = document.createElement("div");
    successMessage.textContent = `Thank you, ${name}! Your message has been saved.`;
    successMessage.style.backgroundColor = "#4CAF50";
    successMessage.style.color = "white";
    successMessage.style.padding = "10px";
    successMessage.style.textAlign = "center";
    document.body.appendChild(successMessage);

    // Optional: You can clear the form after submission
    document.getElementById("contactForm").reset();
  });

  // Optional: Retrieve and display saved data from session storage
  const savedName = sessionStorage.getItem("contactName");
  const savedEmail = sessionStorage.getItem("contactEmail");
  const savedPhone = sessionStorage.getItem("contactPhone");
  const savedMessage = sessionStorage.getItem("contactMessage");

  if (savedName || savedEmail || savedPhone || savedMessage) {
    console.log("Saved Contact Info:");
    console.log(`Name: ${savedName}`);
    console.log(`Email: ${savedEmail}`);
    console.log(`Phone: ${savedPhone}`);
    console.log(`Message: ${savedMessage}`);
  }
});


/* Slideshow container */
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Dot controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].style.backgroundColor = "#bbb";
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].style.backgroundColor = "#717171";
}
