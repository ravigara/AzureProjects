document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('interaction-btn');
    const output = document.getElementById('output-message');

    button.addEventListener('click', () => {
        output.textContent = 'JavaScript is working perfectly! Your files are served correctly.';
    });
});