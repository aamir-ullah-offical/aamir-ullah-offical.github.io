const projects = {
  AdminPanel: {
    title: "Admin Panel",
    shortDescription: "A Powerful Dashboard for Web Management",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    features: [
      "Interactive and user-friendly interface",
      "Smooth animations and intuitive navigation",
      "Customizable components",
      "Responsive design",
    ],
    liveDemo: "https://aamir-ullah-offical.github.io/Admin-Pannel/",
    githubRepo: "https://github.com/aamir-ullah-offical/Admin-Pannel/",
    image: "/assets/img/gallery/project-3/1.PNG",
  },

  PortfolioProject: {
    title: "📚 Turning Pages of Innovation: My Portfolio Project 📚",
    shortDescription:
      "An interactive digital book showcasing my skills as a MERN Stack Developer and Python Programmer.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    features: [
      "Interactive book-style layout",
      "Smooth animations and intuitive design",
      "Responsive and immersive experience",
      "Showcases web development, internships, and cloud computing projects",
    ],
    liveDemo: "https://aamir-ullah-offical.github.io/portfolio-book-style/",
    githubRepo: "https://github.com/aamir-ullah-offical/portfolio-book-style",
    image: "/assets/img/gallery/portfolio.png",
  },

  ResturenSite: {
    title: "🍽️ David Chu's China Bistro: A Culinary Delight Online 🍽️",
    shortDescription:
      "Welcome to the David Chu's China Bistro project! This web application is designed to showcase the unique essence of the bistro, providing an immersive online experience. From browsing the menu to exploring special offers, this website brings the restaurant's ambiance right to your fingertips.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    features: [
      "Smooth animations",
      "Intuitive menu layout",
      "Sleek responsive design",
      "Engaging user experience",
    ],
    liveDemo:
      "https://aamir-ullah-offical.github.io/module5-solution/index.html",
    githubRepo: "https://github.com/aamir-ullah-offical/module5-solution",

    image: "/assets/img/gallery/resturenSite.png",
  },
  ProjectDetails: {
    title: "🎨 Beautiful Image Slider Project 🎨",
    shortDescription:
      "Welcome to a project that combines the power of modern web development with visually captivating transitions. This image slider is designed to deliver an elegant and smooth experience, letting users navigate through stunning visuals with just a click.",
      technologies: ["HTML", "CSS", "JavaScript"],
      features: [
      "Clean design principles",
      "Seamless interactivity",
      "Responsive layout",
      "Smooth transitions",
    ],
    liveDemo: "https://aamir-ullah-offical.github.io/image-slider/",
    githubRepo: "https://aamir-ullah-offical.github.io/image-slider/",
    image: "/assets/img/gallery/imageSlider.jpg",
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const projectsContainer = document.getElementById("projects");

  // Generate Project Cards
  Object.entries(projects).forEach(([key, project]) => {
    const projectCard = document.createElement("div");
    projectCard.className = "col-12 col-sm-6 col-md-4 col-lg-3 ai-card";
    projectCard.innerHTML = `
      <div class="card text-center" data-key="${key}" data-bs-toggle="modal" data-bs-target="#Modal">
        <div class="card-top position-relative">
          <img src="${project.image}" alt="${project.title}">
          <div class="overlay">Visit&nbsp;<i class="fa-solid fa-link"></i></div>
        </div>
      </div>
    `;
    projectsContainer.appendChild(projectCard);
  });

  // Handle Card Clicks
  projectsContainer.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    if (card) {
      const projectKey = card.getAttribute("data-key");
      if (projectKey && projects[projectKey]) {
        openDetailPopup(projects[projectKey]);
      }
    }
  });

  // Open Modal with Project Details
  function openDetailPopup(project) {
    console.log("✅ Opening modal for:", project.title);

    document.getElementById("title").innerText = project.title || "N/A";
    document.getElementById("short-description").innerText =
      project.shortDescription || "No description available";
    document.getElementById("githubRepo").innerText =
      project.githubRepo || "Not provided";

    // Update link
    document.getElementById("link").href = project.liveDemo || "#";
    document.getElementById("link").innerText = "Visit Platform";

    // Set Background Image
    const aiBgElement = document.getElementById("bg");
    aiBgElement.style.backgroundImage = `url(${project.image})`;
    aiBgElement.style.backgroundSize = "cover";
    aiBgElement.style.backgroundPosition = "center";

    // Populate Technologies
    document.getElementById("technologies").innerHTML =
      project.technologies
        .map((tech) => `<li><i class='fa-solid fa-check'></i> ${tech}</li>`)
        .join("") || "<li>No technologies listed</li>";

    // Populate Features
    document.getElementById("features").innerHTML =
      project.features
        .map(
          (feature) => `<li><i class='fa-solid fa-star'></i> ${feature}</li>`
        )
        .join("") || "<li>No features listed</li>";

    // Show Modal with Animation
    const modalContent = document.querySelector(".modal-content");
    modalContent.style.opacity = 0;
    const modal = new bootstrap.Modal(document.getElementById("Modal"));
    modal.show();
    setTimeout(() => (modalContent.style.opacity = 1), 150);
  }

  // Fix Modal Close Behavior
  document.getElementById("Modal").addEventListener("hidden.bs.modal", () => {
    document.body.classList.remove("modal-open");
    document.body.style.overflow = "auto";
    document
      .querySelectorAll(".modal-backdrop")
      .forEach((backdrop) => backdrop.remove());
  });
});
