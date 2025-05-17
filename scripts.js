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

// Lazy Loading Implementation
function lazyLoadImages() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[loading="lazy"]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

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
