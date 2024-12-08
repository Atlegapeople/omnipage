document.getElementById('save-button').addEventListener('click', () => {
    const data = {
        heroTitle: document.getElementById('hero-title').value,
        heroDescription: document.getElementById('hero-description').value,
        ctaButton: document.getElementById('cta-button').value,
    };

    localStorage.setItem('omnipage-config', JSON.stringify(data));
    alert('Changes saved! Refresh the main page to see updates.');
});
