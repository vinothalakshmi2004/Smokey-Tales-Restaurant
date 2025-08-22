// =======================
// Mobile Menu Toggle
// =======================
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });

  // Close menu when a link is clicked (on mobile)
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
    });
  });
}

// =======================
// Smooth Scroll for Nav Links
// =======================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// =======================
// Footer Year
// =======================
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// =======================
// Food Data
// =======================
const allFoods = [
  { name: "Margherita Pizza", price: "₹250" },
  { name: "Cheese Burger", price: "₹180" },
  { name: "Chicken Biryani", price: "₹300" },
  { name: "Pasta Alfredo", price: "₹220" },
  { name: "Paneer Tikka", price: "₹280" },
  { name: "Spring Rolls", price: "₹120" },
  { name: "Chocolate Brownie", price: "₹100" },
  { name: "Fresh Juice", price: "₹90" },
  { name: "Ice Cream Sundae", price: "₹130" },
  { name: "Grilled Sandwich", price: "₹150" },
];

// =======================
// Today’s Specials
// =======================
const todaysSpecials = allFoods.slice(0, 3);
const todayList = document.getElementById("today-list");
const showMenuBtn = document.getElementById("show-menu");

if (todayList && showMenuBtn) {
  showMenuBtn.addEventListener("click", () => {
    document.getElementById("menu-section").style.display = "block";
    todayList.innerHTML = todaysSpecials.map(f => `
      <article class="card">
        <div class="card-body">
          <h3>${f.name}</h3>
          <p class="price">${f.price}</p>
        </div>
      </article>
    `).join("");
    // Scroll to menu
    document.getElementById("menu-section").scrollIntoView({ behavior: "smooth" });
  });
}

// =======================
// All Foods (order.html)
// =======================
const foodList = document.getElementById("food-list");
if (foodList) {
  foodList.innerHTML = allFoods.map(f => `
    <article class="card">
      <div class="card-body">
        <h3>${f.name}</h3>
        <p class="price">${f.price}</p>
        <button class="btn primary order-btn">Order</button>
      </div>
    </article>
  `).join("");

  document.querySelectorAll(".order-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      alert("✅ Your order was successful!");
    });
  });
}

// =======================
// Reservation Form
// =======================
const reserveForm = document.getElementById("reservation-form");
if (reserveForm) {
  reserveForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const guests = document.getElementById("guests").value;
    const table = document.getElementById("table").value;
    const time = document.getElementById("time").value;

    if (name && guests && table && time) {
      alert(
        `✅ Reservation confirmed!\n\n` +
        `👤 Name: ${name}\n` +
        `👥 Guests: ${guests}\n` +
        `📍 Table: ${table}\n` +
        `🕒 Time: ${time}`
      );
      reserveForm.reset();
    } else {
      alert("⚠️ Please fill in all required fields.");
    }
  });
}
