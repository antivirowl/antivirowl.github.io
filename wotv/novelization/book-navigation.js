/* Ordered list of page spreads */
const pages = [
    "temp1.html",
    "temp2.html",
];

/* Detect current page */
let currentIndex = pages.indexOf(
    location.pathname.split("/").pop() || "index.html"
);

/* Go to next spread */
function nextPage() {
    if (currentIndex < pages.length - 1) {
        window.location.href = pages[currentIndex + 1];
    }
}

/* Go to previous spread */
function prevPage() {
    if (currentIndex > 0) {
        window.location.href = pages[currentIndex - 1];
    }
}

/* Optional: disable corners when unavailable */
window.addEventListener("DOMContentLoaded", () => {
    if (currentIndex <= 0) {
        document.querySelector(".page-turn.prev")?.style.pointerEvents = "none";
    }

    if (currentIndex >= pages.length - 1) {
        document.querySelector(".page-turn.next")?.style.pointerEvents = "none";
    }
});

console.log('hello')
