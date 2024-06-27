// Script for Contact Form Modal

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('contactModal');
    const btn = document.getElementById('mailButton');
    const span = document.getElementsByClassName('close')[0];

    // When the user clicks the button, open the modal
    btn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    // When the user clicks on <span> (x), close the modal
    span.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // When the user clicks anywhere outside of the modal, close it
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});



