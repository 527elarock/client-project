/* =========================================================
   HOLLOW CREEK FARM — main.js
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  /* --------------------------------------------------
     Scroll-based fade-up animations
  -------------------------------------------------- */
  const fadeEls = document.querySelectorAll(".fade-up");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // stagger by index within parent
          const siblings = [
            ...entry.target.parentElement.querySelectorAll(".fade-up"),
          ];
          const delay = siblings.indexOf(entry.target) * 80;
          setTimeout(() => entry.target.classList.add("visible"), delay);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  fadeEls.forEach((el) => observer.observe(el));

  /* --------------------------------------------------
     Active nav link on scroll
  -------------------------------------------------- */
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(
    "#main-nav .nav-link[data-section]",
  );

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((l) => l.classList.remove("active"));
          const active = document.querySelector(
            `#main-nav .nav-link[data-section="${entry.target.id}"]`,
          );
          if (active) active.classList.add("active");
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px" },
  );

  sections.forEach((s) => navObserver.observe(s));

  /* --------------------------------------------------
     Navbar shrink on scroll
  -------------------------------------------------- */
  const nav = document.getElementById("main-nav");
  window.addEventListener(
    "scroll",
    () => {
      if (window.scrollY > 60) {
        nav.classList.add("nav-scrolled");
      } else {
        nav.classList.remove("nav-scrolled");
      }
    },
    { passive: true },
  );

  // Add scrolled style inline (avoids extra CSS rule)
  const styleTag = document.createElement("style");
  styleTag.textContent = `
    #main-nav.nav-scrolled { box-shadow: 0 4px 20px rgba(0,0,0,0.22); }
    #main-nav.nav-scrolled .navbar { min-height: 54px; transition: min-height 0.25s ease; }
  `;
  document.head.appendChild(styleTag);

  /* --------------------------------------------------
     Shop filter buttons
  -------------------------------------------------- */
  const filterBtns = document.querySelectorAll(".filter-btn");
  const productCards = document.querySelectorAll(
    ".product-card[data-category]",
  );

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const cat = btn.dataset.filter;
      productCards.forEach((card) => {
        const show = cat === "all" || card.dataset.category === cat;
        card.closest(".product-col").style.display = show ? "" : "none";
      });
    });
  });

  /* --------------------------------------------------
     Season tabs
  -------------------------------------------------- */
  const seasonTabs = document.querySelectorAll(".season-tab");
  const seasonPanels = document.querySelectorAll(".season-panel");

  seasonTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      seasonTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      const target = tab.dataset.season;
      seasonPanels.forEach((panel) => {
        panel.style.display = panel.dataset.season === target ? "" : "none";
      });
    });
  });

  // Activate first season by default
  if (seasonTabs.length) {
    seasonTabs[0].click();
  }

  /* --------------------------------------------------
     Add to cart (demo)
  -------------------------------------------------- */
  let cartCount = 0;
  const cartBadge = document.getElementById("cart-count");

  document.querySelectorAll(".btn-add-cart").forEach((btn) => {
    btn.addEventListener("click", function () {
      cartCount++;
      if (cartBadge) {
        cartBadge.textContent = cartCount;
        cartBadge.style.display = "inline-flex";
      }
      const orig = this.textContent;
      this.textContent = "✓ Added";
      this.style.background = "var(--color-gold)";
      this.style.color = "var(--color-earth)";
      setTimeout(() => {
        this.textContent = orig;
        this.style.background = "";
        this.style.color = "";
      }, 1200);
    });
  });

  /* --------------------------------------------------
     Smooth scroll for anchor links
  -------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        const navH = nav ? nav.offsetHeight : 0;
        const top =
          target.getBoundingClientRect().top + window.scrollY - navH - 8;
        window.scrollTo({ top, behavior: "smooth" });

        // Close mobile menu if open
        const toggler = document.querySelector(".navbar-toggler");
        const collapse = document.querySelector(".navbar-collapse");
        if (collapse && collapse.classList.contains("show")) {
          toggler && toggler.click();
        }
      }
    });
  });
});
