

/* Ordered list of page spreads */
const pages = [
    "temp1.html",
    "temp2.html",
];

/* Get current filename */
const currentFile = location.pathname.split("/").pop() || "index.html";

/* Determine current index */
const currentIndex = pages.indexOf(currentFile);

if (currentIndex === -1) {
    console.warn("Page not found in navigation list:", currentFile);
}

/* Go to next spread */
function nextPage() {
    const page = document.getElementById("rightPage");
    if (!page) return;

    page.classList.add("flipped");

    setTimeout(() => {
        if (currentIndex < pages.length - 1) {
            window.location.href = pages[currentIndex + 1];
        }
    }, 600);
}

function prevPage() {
    const page = document.getElementById("leftPage");
    if (!page) return;

    // For previous, flip the left page toward the right
    page.classList.add("flipped");

    setTimeout(() => {
        if (currentIndex > 0) {
            window.location.href = pages[currentIndex - 1];
        }
    }, 600);
}
