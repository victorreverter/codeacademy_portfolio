// Smooth scroll to projects section
function scrollToProjects() {
    const projectsSection = document.getElementById("projects");
    projectsSection.scrollIntoView({ behavior: "smooth" });
}

// Submit alert for contact form
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-section form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Thank you for reaching out, Peter will get back to you soon!");
    });
});
