// Countdown Timer Functionality
function initCountdown() {
    // Set launch date (30 days from now)
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 30);
    
    function updateCountdown() {
        const now = new Date();
        const difference = launchDate - now;
        
        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);
            
            document.getElementById('days').textContent = days.toString().padStart(2, '0');
            document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        } else {
            // Launch date reached
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
        }
    }
    
    // Update immediately and then every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Email Signup Functionality
function initEmailSignup() {
    const form = document.getElementById('emailForm');
    const emailInput = document.getElementById('emailInput');
    const submitBtn = document.getElementById('submitBtn');
    const successMessage = document.getElementById('successMessage');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        
        // Basic email validation
        if (!email || !email.includes('@')) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }
        
        // Show loading state
        submitBtn.innerHTML = `
            <div class="loading">
                <div class="spinner"></div>
                Joining...
            </div>
        `;
        submitBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            // Hide form and show success message
            form.style.display = 'none';
            successMessage.style.display = 'block';
            
            showNotification("You're on the list! 🎉", 'success');
        }, 1000);
    });
}

// Smooth Scrolling
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Simple Toast Notification System
function showNotification(message, type = 'info') {
    // Remove existing notification
    const existing = document.querySelector('.toast-notification');
    if (existing) {
        existing.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `toast-notification toast-${type}`;
    notification.innerHTML = `
        <div class="toast-content">
            ${message}
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 2rem;
        right: 2rem;
        z-index: 1000;
        background: ${type === 'error' ? 'hsl(0, 84%, 60%)' : 'hsl(142, 76%, 36%)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.75rem;
        box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.3);
        animation: slideInRight 0.3s ease-out;
        max-width: 300px;
        font-weight: 500;
    `;
    
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Add to page
    document.body.appendChild(notification);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideInRight 0.3s ease-out reverse';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 4000);
}

// Initialize everything when the page loads
document.addEventListener('DOMContentLoaded', function() {
    initCountdown();
    initEmailSignup();
    
    // Add smooth scroll behavior to window
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add entrance animations with staggered delays
    const animatedElements = document.querySelectorAll('.feature-card, .stat-item, .time-unit');
    animatedElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
        el.classList.add('fade-in-up');
    });
});

// Add CSS for entrance animations
const animationStyles = document.createElement('style');
animationStyles.textContent = `
    .fade-in-up {
        animation: fadeInUp 0.8s ease-out forwards;
        opacity: 0;
        transform: translateY(30px);
    }
    
    @keyframes fadeInUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(animationStyles);