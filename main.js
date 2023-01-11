const navToggle = document.getElementById("mobile-nav-toggle");
const navbar = document.getElementById("primary-nav");

navToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");

  if (navbar.classList.contains("active")) {
    navToggle.setAttribute("aria-expanded", true);
  } else {
    navToggle.setAttribute("aria-expanded", false);
  }
});
