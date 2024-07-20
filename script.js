document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('.toggle-button');
    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const comments = button.nextElementSibling;
            if (comments.style.display === 'none' || comments.style.display === '') {
                comments.style.display = 'block';
            } else {
                comments.style.display = 'none';
            }
        });
    });
});
