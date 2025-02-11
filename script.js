document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.querySelector(".no");
    const popup = document.createElement("div"); // Create popup element

    popup.classList.add("popup-message");
    popup.innerText = "WRONG ANSWER!!!!!!!!!!!!!!!! >:("; // Message text
    document.body.appendChild(popup); // Add popup to the body
    popup.style.display = "none"; // Hide initially

    noButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link action
        
        popup.style.display = "block"; // Show popup
        popup.style.opacity = "20"; // Make it visible

        setTimeout(() => {
            popup.style.opacity = "20"; // Start fade-out effect
            setTimeout(() => {
                popup.style.display = "none"; // Hide after fading out
            }, 500); // 0.5s fade-out duration
        }, 2000); // Show for 2 seconds
    });
});
