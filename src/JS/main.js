import '../CSS/style.css';
console.log('test');



const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    mobileMenu.classList.remove("active");
  });
});

// ===== PROJECTS SECTION LOAD MORE =====
const loadMoreBtn = document.getElementById("loadMoreBtn");
const projectsGrid = document.getElementById("projectsGrid");

if (loadMoreBtn) {
  loadMoreBtn.addEventListener("click", () => {
    const hiddenCards = projectsGrid.querySelectorAll(".project-card.hidden");

    // Reveal up to 4 hidden cards per click
    for (let i = 0; i < 4 && i < hiddenCards.length; i++) {
      hiddenCards[i].classList.remove("hidden");
    }

    // Hide button if no more cards left
    if (projectsGrid.querySelectorAll(".project-card.hidden").length === 0) {
      loadMoreBtn.style.display = "none";
    }
  });
}

// ===== SEE MORE BUTTONS =====
document.querySelectorAll(".see-more").forEach(btn => {
  btn.addEventListener("click", () => {
    // For now, just show an alert
    alert("Project details coming soon!");

    // Later you can redirect to a project detail page:
    // window.location.href = "./project.html";
  });
});


// ===== WORK PAGE SHOW MORE =====
const showMoreBtn = document.getElementById("showMoreBtn");
const workGrid = document.getElementById("workGrid");

if (showMoreBtn) {
  showMoreBtn.addEventListener("click", () => {
    const hiddenCards = workGrid.querySelectorAll(".project-card.hidden");

    // Reveal up to 4 hidden cards per click
    for (let i = 0; i < 4 && i < hiddenCards.length; i++) {
      hiddenCards[i].classList.remove("hidden");
    }

    // Hide button if no more cards left
    if (workGrid.querySelectorAll(".project-card.hidden").length === 0) {
      showMoreBtn.style.display = "none";
    }
  });
}

// ===== SEE MORE BUTTONS =====
document.querySelectorAll(".see-more").forEach(btn => {
  btn.addEventListener("click", () => {
    // For now, just show an alert
    alert("Project details coming soon!");

    // Later you can redirect to a project detail page:
    // window.location.href = "./project.html";
  });
});


