// Toggle PDF Report Visibility for each project
function toggleReport(reportId) {
    var report = document.getElementById(reportId);
    report.style.display = report.style.display === "none" ? "block" : "none";
}
document.querySelectorAll(".toggle-btn").forEach(button => {
    button.addEventListener("click", function () {
        var content = this.previousElementSibling;
        if (content.style.display === "none") {
            content.style.display = "block";
            this.innerText = "View Less";
        } else {
            content.style.display = "none";
            this.innerText = "View More";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Check if dark mode was previously enabled
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        themeToggle.textContent = "🌞";  // Set to sun icon in dark mode
    }

    // Toggle dark mode on button click
    themeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            themeToggle.textContent = "🌞";  // Sun for light mode
            localStorage.setItem("dark-mode", "enabled"); // Save preference
        } else {
            themeToggle.textContent = "🌙";  // Moon for dark mode
            localStorage.setItem("dark-mode", "disabled"); // Save preference
        }
    });
});

<!-- Floating Chatbot Button -->
    <script type="text/javascript">
        window.chatbaseConfig = {
            chatbotId: "SAWhxozDQuQpsuXfhcQoR",
        };
    </script>
    <script src="https://www.chatbase.co/embed.min.js" chatbotId="SAWhxozDQuQpsuXfhcQoR" defer></script>

</body>
