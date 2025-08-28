// Dynamic Canvas Updates
function updateCanvas(id, data) {
    const box = document.getElementById(id);
    if (!box) return;

    const content = box.querySelector('.content-container');

    // Remove all existing <p> elements
    content.querySelectorAll('p').forEach(p => p.remove());

    // Add new facts
    if (data.facts) {
        data.facts.forEach(fact => {
            const p = document.createElement('p');
            p.innerText = fact;
            content.appendChild(p);
        });
    }

    // Update or create link at the BOTTOM
    let link = content.querySelector('.suggestion-link');
    if (!link) {
        link = document.createElement('a');
        link.className = 'suggestion-link';
        link.target = '_blank';
    }

    if (data.linkText) link.innerText = data.linkText;
    if (data.linkHref) link.href = data.linkHref;

    // Ensure the link is the last child of content-container
    content.appendChild(link); // this moves it to the bottom if it existed
}

// Example usage:
updateCanvas('ryan-suggestion', {
    facts: [
        "Height: 828 meters",
        "Floors: 160",
        "Construction: 2004–2010",
        "Observation Deck: 124th floor",
        "Design Inspiration: Desert flower Hymenocallis"
    ],
    imgSrc: "Burj_Khalifa.png",
    linkText: "- Ryan's suggestion",
    linkHref: "https://www.youtube.com/@Rayyu_Hibu"
});
