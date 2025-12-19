/**
 * Vanilla JavaScript for Progressive Enhancement
 * Provides mobile menu toggle, smooth scrolling, and dynamic footer year
 */

// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // ============================================
  // Mobile Navigation Toggle
  // ============================================
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      // Toggle aria-expanded attribute for accessibility
      const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
      navToggle.setAttribute("aria-expanded", !isExpanded);

      // Toggle active class on menu
      navMenu.classList.toggle("active");
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        // Close menu when any nav link is clicked
        navMenu.classList.remove("active");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", function (event) {
      const isClickInsideNav =
        navToggle.contains(event.target) || navMenu.contains(event.target);
      if (!isClickInsideNav && navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // ============================================
  // Smooth Scrolling for Anchor Links (on same page)
  // ============================================
  // This enhances the CSS scroll-behavior: smooth
  // for better browser compatibility
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      // Skip if it's just "#" or empty
      if (href === "#" || href === "") {
        return;
      }

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();

        // Calculate offset for fixed header
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        // Close mobile menu if open
        if (navMenu && navMenu.classList.contains("active")) {
          navMenu.classList.remove("active");
          if (navToggle) {
            navToggle.setAttribute("aria-expanded", "false");
          }
        }
      }
    });
  });

  // ============================================
  // Update Footer Year Dynamically
  // ============================================
  const yearElement = document.getElementById("current-year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // ============================================
  // Highlight Active Navigation Link
  // ============================================
  // Highlight the current page in navigation
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  navLinks.forEach((link) => {
    const linkHref = link.getAttribute("href");
    // Match current page (handle index.html and empty string)
    if (
      linkHref === currentPage ||
      (currentPage === "" && linkHref === "index.html") ||
      (currentPage === "index.html" && linkHref === "index.html")
    ) {
      link.classList.add("nav-link-active");
    } else {
      link.classList.remove("nav-link-active");
    }
  });

  // ============================================
  // Keyboard Navigation Enhancement
  // ============================================
  // Ensure mobile menu closes on Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && navMenu && navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
      if (navToggle) {
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.focus(); // Return focus to toggle button
      }
    }
  });

  // ============================================
  // Scroll reveal (adds .in-view to elements with .reveal when they enter viewport)
  // ============================================
  (function () {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );
    const revealEls = document.querySelectorAll(".reveal");
    if (!revealEls.length) return;

    if (prefersReduced && prefersReduced.matches) {
      // Respect reduced motion: show elements immediately
      revealEls.forEach((el) => el.classList.add("in-view"));
      return;
    }

    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              obs.unobserve(entry.target);
            }
          });
        },
        { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
      );

      revealEls.forEach((el) => io.observe(el));
    } else {
      // Fallback: reveal immediately
      revealEls.forEach((el) => el.classList.add("in-view"));
    }
  })();
});
