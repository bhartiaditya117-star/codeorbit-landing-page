
// Mobile navigation menu toggle.
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Open or close the menu when the button is clicked.
menuToggle.addEventListener("click", function () {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
  );
});

// Close the menu after a navigation link is selected.
navLinks.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  });
});

// Display the current year in the footer automatically.
document.getElementById("year").textContent = new Date().getFullYear();

// Show a message when the call-to-action button is clicked.
// This is a demonstration; it does not register a real account.
const startButton = document.getElementById("start-button");
const ctaMessage = document.getElementById("cta-message");

startButton.addEventListener("click", function () {
  ctaMessage.textContent =
    "Thanks for your interest! This is a demo landing page.";
});
