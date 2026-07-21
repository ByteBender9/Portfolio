
/* ===================================================
   Kushal Sarkar Portfolio
   main.js
=================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ---------------- Loader ---------------- */

  const loader = document.getElementById("loader");

  window.addEventListener("load", () => {
    if (loader) {
      loader.style.transition = "opacity .8s ease";
      loader.style.opacity = "0";

      setTimeout(() => {
        loader.style.display = "none";
      }, 800);
    }
  });

  /* -------------- Smooth Scroll ------------ */

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {

      const target = document.querySelector(link.getAttribute("href"));

      if (!target) return;

      e.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    });
  });

  /* ------------ Cursor Glow --------------- */

  const glow = document.getElementById("cursor-glow");

  if (glow) {

    window.addEventListener("mousemove", e => {

      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";

    });

  }

  /* -------- Navbar Background ------------ */

  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 40) {

      navbar.style.background = "rgba(8,15,28,.92)";
      navbar.style.boxShadow = "0 15px 40px rgba(0,0,0,.35)";

    } else {

      navbar.style.background = "rgba(15,23,42,.6)";
      navbar.style.boxShadow = "none";

    }

  });

  /* -------- Reveal Sections --------------- */

  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

      }

    });

  }, {
    threshold: .15
  });

  sections.forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

  });

  /* -------- Active Navigation ------------ */

  const navLinks = document.querySelectorAll("nav a");

  window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

      const top = section.offsetTop - 150;

      if (window.scrollY >= top) {

        current = section.id;

      }

    });

    navLinks.forEach(link => {

      link.classList.remove("active");

      if (link.getAttribute("href") === "#" + current) {

        link.classList.add("active");

      }

    });

  });

  /* -------- Scroll Progress -------------- */

  const progress = document.createElement("div");

  progress.id = "scroll-progress";

  document.body.appendChild(progress);

  window.addEventListener("scroll", () => {

    const scroll =
      document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    progress.style.width = (scroll / height) * 100 + "%";

  });

  /* -------- Card Hover ------------------- */

  document.querySelectorAll(".placeholder-card")
    .forEach(card => {

      card.addEventListener("mouseenter", () => {

        card.style.transform =
          "translateY(-10px) scale(1.02)";

      });

      card.addEventListener("mouseleave", () => {

        card.style.transform =
          "translateY(0) scale(1)";

      });

    });

  console.log("Portfolio Loaded Successfully 🚀");

});
