
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

    /* -------- Button Click Animation -------- */
document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", () => {
        button.style.transform = "scale(.96)";
        setTimeout(() => {
            button.style.transform = "";
        },150);
    });
});

/* -------- Skill Card Click -------- */
document.querySelectorAll(".skill-card").forEach(card=>{
    card.addEventListener("click",()=>{
        card.classList.toggle("selected");
    });
});

  console.log("Portfolio Loaded Successfully 🚀");
});

const projects = {

    dochat: {
        title: "DoChat",
        image: "assets/images/projects/dochat.png",
        description: "A modern real-time chat application with channels, persistent messaging, responsive design, and a clean user experience.",
        github: "https://github.com/ByteBender9/DoChat",
        demo: "#",
        tech: ["HTML", "CSS", "JavaScript"]
    },

    lipvision: {
        title: "LipVision",
        image: "assets/images/projects/lipvision.png",
        description: "An AI-powered lip reading system built using deep learning, OpenCV, MediaPipe, and TensorFlow.",
        github: "https://github.com/ByteBender9/LipVision",
        demo: "#",
        tech: ["Python", "TensorFlow", "OpenCV", "MediaPipe"]
    },

    jarvis: {
        title: "Jarvis Voice Assistant",
        image: "assets/images/projects/jarvis.png",
        description: "A desktop voice assistant capable of voice commands, automation, and face authentication.",
        github: "https://github.com/ByteBender9/Jarvis_VoiceAssistent",
        demo: "#",
        tech: ["Python", "Speech Recognition", "Automation"]
    },

    cyberbullying: {
        title: "Cyberbullying Detection",
        image: "assets/images/projects/cyberbullying.png",
        description: "A machine learning web application that detects cyberbullying using NLP and text classification.",
        github: "https://github.com/ByteBender9/Cyberbullying-Detection",
        demo: "#",
        tech: ["Python", "Flask", "Machine Learning", "NLP"]
    },

    aiimage: {
        title: "AI Image Generator",
        image: "assets/images/projects/ai-image-generator.png",
        description: "A responsive AI image generation web application that creates images from user prompts.",
        github: "https://github.com/ByteBender9/ai-image-generator",
        demo: "#",
        tech: ["HTML", "CSS", "JavaScript", "API"]
    }

};