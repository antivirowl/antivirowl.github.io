console.log("hello")
alert("hi")

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
