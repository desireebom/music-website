// Elements
const searchToggle = document.getElementById('search-toggle');
const notifToggle  = document.getElementById('notif-toggle');
const searchBox    = document.getElementById('search-box');
const notifBox     = document.getElementById('notif-box');

// Toggle helpers
function toggle(el) {
  el.classList.toggle('hidden');
}
function hide(el) {
  if (!el.classList.contains('hidden')) el.classList.add('hidden');
}

// Open/close search
searchToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  toggle(searchBox);
  hide(notifBox); // close the other
});

// Open/close notifications
notifToggle.addEventListener('click', (e) => {
  e.stopPropagation();
  toggle(notifBox);
  hide(searchBox); // close the other
});

// Close both when clicking outside
document.addEventListener('click', (e) => {
  if (!searchBox.contains(e.target) && !searchToggle.contains(e.target)) {
    hide(searchBox);
  }
  if (!notifBox.contains(e.target) && !notifToggle.contains(e.target)) {
    hide(notifBox);
  }
});

// Recently Played scroll
const recentCards = document.getElementById("recent-cards");
document.getElementById("recent-left").addEventListener("click", () => {
  recentCards.scrollBy({ left: -300, behavior: "smooth" });
});
document.getElementById("recent-right").addEventListener("click", () => {
  recentCards.scrollBy({ left: 300, behavior: "smooth" });
});

// Top Mix scroll
const mixCards = document.getElementById("mix-cards");
document.getElementById("mix-left").addEventListener("click", () => {
  mixCards.scrollBy({ left: -300, behavior: "smooth" });
});
document.getElementById("mix-right").addEventListener("click", () => {
  mixCards.scrollBy({ left: 300, behavior: "smooth" });
});

// New Arrival scroll
const arrivalCards = document.getElementById("arrival-cards");
document.getElementById("arrival-left").addEventListener("click", () => {
  arrivalCards.scrollBy({ left: -300, behavior: "smooth" });
});
document.getElementById("arrival-right").addEventListener("click", () => {
  arrivalCards.scrollBy({ left: 300, behavior: "smooth" });
});

// Best of Artists scroll
const artistsCards = document.getElementById("artists-cards");
document.getElementById("artists-left").addEventListener("click", () => {
  artistsCards.scrollBy({ left: -300, behavior: "smooth" });
});
document.getElementById("artists-right").addEventListener("click", () => {
  artistsCards.scrollBy({ left: 300, behavior: "smooth" });
});

// Trending scroll
const trendingCards = document.getElementById("trending-cards");
document.getElementById("trending-left").addEventListener("click", () => {
  trendingCards.scrollBy({ left: -300, behavior: "smooth" });
});
document.getElementById("trending-right").addEventListener("click", () => {
  trendingCards.scrollBy({ left: 300, behavior: "smooth" });
});

// Artists scroll
const artistsCards = document.getElementById("artists-cards");
document.getElementById("artists-left").addEventListener("click", () => {
  artistsCards.scrollBy({ left: -300, behavior: "smooth" });
});
document.getElementById("artists-right").addEventListener("click", () => {
  artistsCards.scrollBy({ left: 300, behavior: "smooth" });
});