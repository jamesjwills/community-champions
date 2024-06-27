// Script for Projects Page
document.addEventListener('DOMContentLoaded', function() {
    const projectItems = document.querySelectorAll('.projects__list-item');
    const projectDescriptions = document.querySelectorAll('.projects__description');

    projectItems.forEach(item => {
        item.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');

            // Hide all descriptions
            projectDescriptions.forEach(desc => {
                desc.classList.remove('active');
            });

            // Remove color from all project items
            projectItems.forEach(item => {
                item.style.color = ''; // Reset to default color
            });

            // Show the corresponding description
            document.getElementById(projectId).classList.add('active');

            // Change the color of the clicked project item
            this.style.color = 'rgba(122, 193, 209, 0.806)';
        });
    });
});