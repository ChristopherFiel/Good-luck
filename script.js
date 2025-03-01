const images = [
    "Img/pig1.gif",
    "Img/download.gif",
    "Img/pig2.gif"
];

let luckScore = 0; // Counter for luck score

function handleYesClick() {
    // Increase luck score
    luckScore++;
    document.getElementById("luckCounter").textContent = `Luck score: ${luckScore}`;

    // Play pig sound
    const pigSound = new Audio("Img/Audiooink.wav"); // Ensure the file exists
    pigSound.volume = 0.5; // Adjust volume if needed
    pigSound.play();

    // Create a new image element
    const newImg = document.createElement("img");
    newImg.src = images[Math.floor(Math.random() * images.length)];
    newImg.classList.add("floating-gif");

    // Random position within the viewport
    const maxX = window.innerWidth - 150; // Keeping it within bounds
    const maxY = window.innerHeight - 150;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    // Apply position
    newImg.style.left = `${randomX}px`;
    newImg.style.top = `${randomY}px`;

    // Append image to the body
    document.body.appendChild(newImg);

    // Make the GIF fade out and remove after 3 seconds
    setTimeout(() => {
        newImg.style.opacity = "0"; // Start fading
        setTimeout(() => newImg.remove(), 1000); // Remove from DOM after fading
    }, 2000);
}

// Ensure the script runs only after the document loads
document.addEventListener("DOMContentLoaded", function () {
    // Create a luck counter display
    const counterElement = document.createElement("p");
    counterElement.id = "luckCounter";
    counterElement.textContent = "Luck score: 0";
    counterElement.style.fontSize = "1.5em";
    counterElement.style.color = "#d32f2f";

    // Add counter below the button
    document.querySelector(".buttons").appendChild(counterElement);
});
