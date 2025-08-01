// Technicolor Hearts Website JavaScript

// Mobile navigation toggle
function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Image hover effects for social icons
    const socialImages = document.querySelectorAll('a img[src*="social"]');
    socialImages.forEach(img => {
        const originalSrc = img.src;
        const hoverSrc = originalSrc.replace('.png', '_ro.png');
        
        img.addEventListener('mouseenter', function() {
            this.src = hoverSrc;
        });
        
        img.addEventListener('mouseleave', function() {
            this.src = originalSrc;
        });
        
        // Handle error if hover image doesn't exist
        img.addEventListener('error', function() {
            this.src = originalSrc;
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                const navMenu = document.getElementById('navMenu');
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        const navMenu = document.getElementById('navMenu');
        const navToggle = document.querySelector('.nav-toggle');
        
        if (navMenu && navToggle && 
            !navMenu.contains(e.target) && 
            !navToggle.contains(e.target) && 
            navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    });

    // Mailchimp form validation (if present)
    if (typeof window.fnames === 'undefined') {
        window.fnames = new Array(); 
        window.ftypes = new Array();
        fnames[0]='EMAIL';
        ftypes[0]='email';
        fnames[1]='FNAME';
        ftypes[1]='text';
        fnames[2]='LNAME';
        ftypes[2]='text';
        fnames[3]='MMERGE3';
        ftypes[3]='text';
        fnames[4]='MMERGE4';
        ftypes[4]='text';
        fnames[5]='MMERGE5';
        ftypes[5]='text';
    }

    // Add loading states to forms
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function() {
            const submitBtn = form.querySelector('input[type="submit"]');
            if (submitBtn) {
                submitBtn.value = 'Subscribing...';
                submitBtn.disabled = true;
            }
        });
    });

    // Lazy loading for images (progressive enhancement)
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
});

// Handle window resize for responsive adjustments
window.addEventListener('resize', function() {
    const navMenu = document.getElementById('navMenu');
    if (navMenu && window.innerWidth > 768) {
        navMenu.classList.remove('active');
    }
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Close mobile menu with Escape key
    if (e.key === 'Escape') {
        const navMenu = document.getElementById('navMenu');
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
        }
    }
});
