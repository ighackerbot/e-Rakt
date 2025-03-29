// Form Handling
document.addEventListener('DOMContentLoaded', function() {
    // Donate Form
    const donateForm = document.getElementById('donateForm');
    donateForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = {
            name: document.getElementById('name').value,
            bloodType: document.getElementById('bloodType').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value
        };
        handleDonateSubmission(formData);
    });

    // Request Form
    const requestForm = document.getElementById('requestForm');
    requestForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = {
            name: document.getElementById('reqName').value,
            bloodType: document.getElementById('reqBloodType').value,
            phone: document.getElementById('reqPhone').value,
            urgency: document.getElementById('urgency').value
        };
        handleRequestSubmission(formData);
    });

    // Contact Form
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = {
            name: document.getElementById('contactName').value,
            email: document.getElementById('contactEmail').value,
            message: document.getElementById('message').value
        };
        handleContactSubmission(formData);
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Login Button
    const loginBtn = document.querySelector('.login-btn');
    loginBtn.addEventListener('click', function() {
        // Add login modal functionality here
        alert('Login functionality will be implemented here');
    });

    // CTA Buttons
    const donateBtn = document.querySelector('.cta-buttons .primary-btn');
    const requestBtn = document.querySelector('.cta-buttons .secondary-btn');

    donateBtn.addEventListener('click', function() {
        document.getElementById('donate').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });

    requestBtn.addEventListener('click', function() {
        document.getElementById('request').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Form Submission Handlers
function handleDonateSubmission(formData) {
    // Here you would typically send the data to a server
    console.log('Donate Form Submitted:', formData);
    alert('Thank you for registering to donate blood! We will contact you soon.');
    document.getElementById('donateForm').reset();
}

function handleRequestSubmission(formData) {
    // Here you would typically send the data to a server
    console.log('Request Form Submitted:', formData);
    alert('Your blood request has been submitted. We will contact you shortly.');
    document.getElementById('requestForm').reset();
}

function handleContactSubmission(formData) {
    // Here you would typically send the data to a server
    console.log('Contact Form Submitted:', formData);
    alert('Thank you for your message. We will get back to you soon.');
    document.getElementById('contactForm').reset();
}

// Add scroll animation for sections
const sections = document.querySelectorAll('section');
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.5s ease-out';
    observer.observe(section);
});

// Update blood inventory counts randomly (for demo purposes)
function updateInventoryCounts() {
    const inventoryCards = document.querySelectorAll('.inventory-card');
    inventoryCards.forEach(card => {
        const countElement = card.querySelector('.count');
        const currentCount = parseInt(countElement.textContent);
        const newCount = Math.floor(Math.random() * 50) + 10;
        countElement.textContent = `${newCount} units`;
        
        // Update status based on count
        const statusElement = card.querySelector('.status');
        if (newCount < 20) {
            statusElement.textContent = 'Low Stock';
            statusElement.style.color = '#e74c3c';
        } else {
            statusElement.textContent = 'Available';
            statusElement.style.color = '#27ae60';
        }
    });
}

// Update inventory every 30 seconds (for demo purposes)
setInterval(updateInventoryCounts, 30000); 
