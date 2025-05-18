// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize countdown timers
    initializeCountdowns();
    
    // Initialize FAQ accordions
    initializeFAQs();
    
    // Initialize smooth scroll
    initializeSmoothScroll();
    
    // Initialize lazy loading
    lazyLoadImages();
    
    // Update dynamic content
    updateDynamicContent();
});

// Countdown Timer Implementation
function initializeCountdowns() {
    const expirationDate = new Date('2025-05-20T20:33:47Z');
    
    function updateCountdowns() {
        const now = new Date();
        const timeLeft = expirationDate - now;
        
        if (timeLeft <= 0) {
            document.querySelectorAll('.main-countdown, .bonus-countdown, .countdown').forEach(countdown => {
                countdown.innerHTML = '<div class="time-block"><span class="number">EXPIRED</span></div>';
            });
            return;
        }
        
        const hours = Math.floor(timeLeft / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        // Update all countdown elements
        if (document.getElementById('hours')) {
            document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
        }
        
        if (document.getElementById('bonus-hours')) {
            document.getElementById('bonus-hours').textContent = hours.toString().padStart(2, '0');
            document.getElementById('bonus-minutes').textContent = minutes.toString().padStart(2, '0');
            document.getElementById('bonus-seconds').textContent = seconds.toString().padStart(2, '0');
        }
        
        // Update standalone countdown
        const countdownEl = document.querySelector('.countdown');
        if (countdownEl) {
            countdownEl.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
    }
    
    updateCountdowns();
    setInterval(updateCountdowns, 1000);
}

// FAQ Accordion Implementation
function initializeFAQs() {
    document.querySelectorAll('.faq-item').forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isOpen = item.classList.contains('active');
            
            // Close all FAQ items
            document.querySelectorAll('.faq-item').forEach(faqItem => {
                faqItem.classList.remove('active');
            });
            
            // Toggle current item
            if (!isOpen) {
                item.classList.add('active');
            }
        });
    });
}

// Smooth Scroll Implementation
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function handleBonusImages() {
    const bonusImages = document.querySelectorAll('.bonus-image img');
    
    bonusImages.forEach(img => {
        img.onerror = function() {
            this.src = `https://placehold.co/600x400?text=${encodeURIComponent(this.alt)}`;
        };
    });
}

document.addEventListener('DOMContentLoaded', () => {
    handleBonusImages();
    // ... other initializations
});

// Replace the current lazyLoadImages call in your DOMContentLoaded event with:
document.addEventListener('DOMContentLoaded', () => {
    // Other initializations...
    handleImages();
});

// Update Dynamic Content
function updateDynamicContent() {
    const lastUpdated = new Date('2025-05-17T20:33:47Z');
    const username = 'Yassinosml';
    
    // Update dates
    document.querySelectorAll('.current-date').forEach(el => {
        el.textContent = lastUpdated.toLocaleDateString();
    });
    
    // Update username references
    document.querySelectorAll('.user-login').forEach(el => {
        el.textContent = username;
    });
}

// Console welcome message
console.log(`
ChannelBuilder AI Landing Page
Version: 1.0.0
Last Updated: 2025-05-17 20:33:47
Created by: Yassinosml
`);
// Add this to your scripts.js
function handleBonusImages() {
    const bonusImages = document.querySelectorAll('.bonus-image img');
    
    bonusImages.forEach(img => {
        // Store original src
        const originalSrc = img.src;
        
        // Set loading state
        img.parentElement.classList.remove('loaded');
        
        // Handle successful load
        img.addEventListener('load', function() {
            this.parentElement.classList.add('loaded');
            this.style.opacity = '1';
        });
        
        // Handle errors with retry
        img.addEventListener('error', function() {
            // Try without 's' in URL if present
            if (originalSrc.includes('ibb.co/')) {
                const newSrc = originalSrc.replace('/s/', '/');
                if (this.src !== newSrc) {
                    this.src = newSrc;
                    return;
                }
            }
            
            // If still fails, use fallback
            this.src = `https://placehold.co/600x400?text=${encodeURIComponent(this.alt)}`;
            this.classList.add('error');
            this.parentElement.classList.add('loaded');
        });
        
        // Force reload if already failed
        if (!img.complete || img.naturalHeight === 0) {
            img.src = originalSrc;
        }
    });
}

// Update your DOMContentLoaded event
document.addEventListener('DOMContentLoaded', () => {
    // ... other initializations ...
    handleBonusImages();
});
// Add to your scripts.js
function setupConversionTracking() {
    // Track main CTA buttons
    document.querySelectorAll('.cta-button, .bonus-cta').forEach(button => {
        button.addEventListener('click', function() {
            gtag('event', 'conversion', {
                'send_to': 'AW-17090665512/XXXXXXXXX', // Replace XXXXXXXXX with your specific conversion label
                'value': 47.00,
                'currency': 'USD'
            });
        });
    });
}

// Add this to your DOMContentLoaded event
document.addEventListener('DOMContentLoaded', () => {
    // ... your existing initializations ...
    setupConversionTracking();
});
