

/*--------------------------------------------------
  AI CART FEATUREs
--------------------------------------------------*/
const HCFCart = {
  items: [],

  add(name, price, category) {
    const existing = this.items.find((i) => i.name === name);
    if (existing) {
      existing.qty++;
    } else {
      this.items.push({ name, price, category, qty: 1 });
    }
    this.save();
  },

  remove(name) {
    this.items = this.items.filter((i) => i.name !== name);
    this.save();
  },

  updateQty(name, qty) {
    const item = this.items.find((i) => i.name === name);
    if (item) {
      item.qty = qty;
      if (item.qty <= 0) this.remove(name);
    }
    this.save();
  },

  total() {
    return this.items.reduce((sum, i) => sum + i.price * i.qty, 0);
  },

  count() {
    return this.items.reduce((sum, i) => sum + i.qty, 0);
  },

  clear() {
    this.items = [];
    this.save();
  },

  save() {
    try {
      sessionStorage.setItem("hcf_cart", JSON.stringify(this.items));
    } catch (e) {}
  },

  load() {
    try {
      const saved = sessionStorage.getItem("hcf_cart");
      if (saved) this.items = JSON.parse(saved);
    } catch (e) {}
  },
};

// Load cart immediately so badge is correct before DOM finishes
HCFCart.load();

/*--------------------------------------------------
  END OF AI CART FEATURES
--------------------------------------------------*/

/*--------------------------------------------------
  Update nav cart badge (From Data Collection Site)
--------------------------------------------------*/
function updateCartBadge() {
  const badge = document.getElementById("cart-count");
  if (!badge) return;
  const count = HCFCart.count();
  badge.textContent = count;
  badge.style.display = count > 0 ? "inline-flex" : "none";
}

updateCartBadge();


/*--------------------------------------------------
AI SCROLL ANIMATIONS
--------------------------------------------------*/


document.addEventListener("DOMContentLoaded", () => {
  /* --------------------------------------------------
     Scroll-based fade-up animations
  -------------------------------------------------- */
  const fadeEls = document.querySelectorAll(".fade-up");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
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
  if (nav) {
    window.addEventListener(
      "scroll",
      () => {
        nav.classList.toggle("nav-scrolled", window.scrollY > 60);
      },
      { passive: true },
    );

    const styleTag = document.createElement("style");
    styleTag.textContent = `
      #main-nav.nav-scrolled { box-shadow: 0 4px 20px rgba(0,0,0,0.22); }
      #main-nav.nav-scrolled .navbar { min-height: 54px; transition: min-height 0.25s ease; }
    `;
    document.head.appendChild(styleTag);
  }

  /*--------------------------------------------------
END OF AI SCROLL ANIMATIONS
--------------------------------------------------*/

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

  if (seasonTabs.length) seasonTabs[0].click();

  /* --------------------------------------------------
     Add to cart
  -------------------------------------------------- */
  document.querySelectorAll(".btn-add-cart").forEach((btn) => {
    btn.addEventListener("click", function () {
      const name = this.dataset.name;
      const price = parseFloat(this.dataset.price);
      const category = this.dataset.category || "";

      HCFCart.add(name, price, category);
      updateCartBadge();

      //used ai
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
  //end of ai

  /*--------------------------------------------------
  MORE AI SCROLL ANIMATIONS
--------------------------------------------------*/

  /* --------------------------------------------------
     Smooth scroll for anchor links
  -------------------------------------------------- */
  const mainNav = document.getElementById("main-nav");
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        const navH = mainNav ? mainNav.offsetHeight : 0;
        const top =
          target.getBoundingClientRect().top + window.scrollY - navH - 8;
        window.scrollTo({ top, behavior: "smooth" });

        const toggler = document.querySelector(".navbar-toggler");
        const collapse = document.querySelector(".navbar-collapse");
        if (collapse && collapse.classList.contains("show"))
          toggler && toggler.click();
      }
    });
  });

  /*--------------------------------------------------
  END OF MORE AI SCROLL ANIMATIONS
--------------------------------------------------*/


  /* --------------------------------------------------
     Cart page — render items
  -------------------------------------------------- */
  //find container where items will be displayed
  const cartContainer = document.getElementById("cart-items-container");
  //if container exists, display cart contents
  if (cartContainer) renderCart();

  function renderCart() {
    //get all items stored in cart
    const cart = HCFCart.items;
    //get cart summary section
    const summary = document.getElementById("cart-summary");

    //check if cart empty
    if (cart.length === 0) {
      //if empty, show empty message
      cartContainer.innerHTML = `
        <div class="cart-empty">
          <div class="cart-empty-icon">🛒</div>
          <h3>Your cart is empty</h3>
          <p>Head back to the farm shop and add some goodies!</p>
          <a href="index.html#farm-shop" class="btn-primary" style="margin-top:16px;display:inline-block;">Back to Shop</a>
        </div>`;
        //hide summary section since no items
      if (summary) summary.style.display = "none";
      //stop running function
      return;
    }

    //if there are items, show summary
    if (summary) summary.style.display = "";
    //create HTML for each item in cart (.map does it)
    cartContainer.innerHTML = cart
      .map(
        (item) => `
      <div class="cart-row" data-name="${item.name}">
        <div class="cart-row-info">
          <p class="cart-item-name">${item.name}</p>
          <p class="cart-item-category">${item.category}</p>
        </div>
        <div class="cart-row-controls">
          <button class="qty-btn minus" data-name="${item.name}">−</button>
          <span class="qty-display">${item.qty}</span>
          <button class="qty-btn plus" data-name="${item.name}">+</button>
        </div>
        <div class="cart-row-price">$${(item.price * item.qty).toFixed(2)}</div>
        <button class="cart-remove" data-name="${item.name}" aria-label="Remove item">✕</button>
      </div>
    `,
      )
      //combine all items into one string
      .join("");

      //used ai

    const subtotal = HCFCart.total();
    const tax = subtotal * 0.07;
    const total = subtotal + tax;

    document.getElementById("cart-subtotal").textContent =
      `$${subtotal.toFixed(2)}`;
    document.getElementById("cart-tax").textContent = `$${tax.toFixed(2)}`;
    document.getElementById("cart-total").textContent = `$${total.toFixed(2)}`;

    cartContainer.querySelectorAll(".qty-btn.minus").forEach((btn) => {
      btn.addEventListener("click", () => {
        const item = HCFCart.items.find((i) => i.name === btn.dataset.name);
        if (item) HCFCart.updateQty(item.name, item.qty - 1);
        updateCartBadge();
        renderCart();
      });
    });

    cartContainer.querySelectorAll(".qty-btn.plus").forEach((btn) => {
      btn.addEventListener("click", () => {
        const item = HCFCart.items.find((i) => i.name === btn.dataset.name);
        if (item) HCFCart.updateQty(item.name, item.qty + 1);
        updateCartBadge();
        renderCart();
      });
    });

    cartContainer.querySelectorAll(".cart-remove").forEach((btn) => {
      btn.addEventListener("click", () => {
        HCFCart.remove(btn.dataset.name);
        updateCartBadge();
        renderCart();
      });
    });
  }

    //end of ai


  /* --------------------------------------------------
     Checkout functionality 
  -------------------------------------------------- */
  //find button using its id
  const checkoutBtn = document.getElementById("checkout-btn");
  //if it exists, continue
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      //if cart is empty, stop the function immediately 
      if (HCFCart.items.length === 0) return;
      //remove items from cart
      HCFCart.clear();
      //update the little number icon
      updateCartBadge();
      //replace cards contents with a success message
      cartContainer.innerHTML = `
        <div class="cart-empty">
          <div class="cart-empty-icon">✅</div>
          <h3>Order placed — thank you!</h3>
          <p>Your farm order has been received. We'll have everything ready for your visit.</p>
          <a href="index.html" class="btn-primary" style="margin-top:16px;display:inline-block;">Back to Home</a>
        </div>`;
        //hide the summary section since no more items
      document.getElementById("cart-summary").style.display = "none";
    });
  }


  /* --------------------------------------------------
     Reservations page USED AI
  -------------------------------------------------- */
  const resForm = document.getElementById("reservation-form");
  if (resForm) {
    resForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("res-name").value;
      const date = document.getElementById("res-date").value;
      const time = document.getElementById("res-time").value;
      const guests = document.getElementById("res-guests").value;
      const activity = document.getElementById("res-activity").value;

      const dateObj = new Date(date + "T12:00:00");
      const dateStr = dateObj.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      document.getElementById("conf-name").textContent = name;
      document.getElementById("conf-date").textContent = dateStr;
      document.getElementById("conf-time").textContent = time;
      document.getElementById("conf-guests").textContent =
        guests + (guests === "1" ? " guest" : " guests");
      document.getElementById("conf-activity").textContent = activity;
      document.getElementById("conf-number").textContent =
        "HCF-" + Math.floor(10000 + Math.random() * 90000);

      resForm.closest(".res-form-wrap").style.display = "none";
      document.getElementById("res-confirmation").style.display = "block";
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}); 
