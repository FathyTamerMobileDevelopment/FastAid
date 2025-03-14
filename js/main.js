// Handle form submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signupForm');
    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                nationalId: document.getElementById('nationalId').value,
                password: document.getElementById('password').value,
                illness: document.getElementById('illness').value
            };

            // Store in localStorage (in a real app, this would be sent to a server)
            localStorage.setItem('userInfo', JSON.stringify(formData));

            // Redirect to dashboard
            window.location.href = 'dashboard.html';
        });
    }
});

// Add to main.js
function switchLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('preferredLanguage', lang);
    
    // Update all text elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = translations[lang][key];
    });
}

// On page load
document.addEventListener('DOMContentLoaded', () => {
    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'en';
    switchLanguage(preferredLanguage);
});