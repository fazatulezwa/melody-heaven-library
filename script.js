
/*
 * JavaScript functionality for Melody Haven Library
 * This file handles all interactive features including navigation,
 * form submission, and dynamic content switching
 */

// Wait for DOM to be fully loaded before executing scripts
document.addEventListener('DOMContentLoaded', function() {
    console.log('Melody Haven Library website loaded successfully');
    
    // Initialize all functionality
    initializeNavigation();
    initializeContactForm();
    initializeAnimations();
});

/**
 * Navigation functionality
 * Handles switching between different sections of the website
 */
function initializeNavigation() {
    console.log('Initializing navigation system...');
    
    // Get all navigation buttons
    const navButtons = document.querySelectorAll('.nav-button');
    // Get all content sections
    const contentSections = document.querySelectorAll('.content-section');
    
    // Add click event listeners to navigation buttons
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log(`Navigation clicked: ${this.dataset.section}`);
            
            // Get the target section from data attribute
            const targetSection = this.dataset.section;
            
            // Switch to the selected section
            switchToSection(targetSection);
            
            // Update active navigation button
            updateActiveNavigation(this);
        });
    });
    
    /**
     * Switch to a specific content section
     * @param {string} sectionId - The ID of the section to show
     */
    function switchToSection(sectionId) {
        console.log(`Switching to section: ${sectionId}`);
        
        // Hide all content sections
        contentSections.forEach(section => {
            section.classList.remove('active');
        });
        
        // Show the target section
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
            console.log(`Successfully switched to ${sectionId} section`);
        } else {
            console.error(`Section with ID '${sectionId}' not found`);
        }
    }
    
    /**
     * Update the active state of navigation buttons
     * @param {HTMLElement} activeButton - The button that was clicked
     */
    function updateActiveNavigation(activeButton) {
        // Remove active class from all navigation buttons
        navButtons.forEach(button => {
            button.classList.remove('active');
        });
        
        // Add active class to the clicked button
        activeButton.classList.add('active');
        console.log(`Updated active navigation to: ${activeButton.dataset.section}`);
    }
}

/**
 * Contact form functionality
 * Handles form submission and user feedback
 */
function initializeContactForm() {
    console.log('Initializing contact form...');
    
    // Get the contact form element
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        // Add submit event listener to the form
        contactForm.addEventListener('submit', function(event) {
            console.log('Contact form submitted');
            
            // Prevent default form submission
            event.preventDefault();
            
            // Process the form submission
            handleFormSubmission(this);
        });
    } else {
        console.error('Contact form not found');
    }
    
    /**
     * Handle contact form submission
     * @param {HTMLFormElement} form - The submitted form
     */
    function handleFormSubmission(form) {
        console.log('Processing form submission...');
        
        // Get form data
        const formData = new FormData(form);
        const formValues = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };
        
        console.log('Form data:', formValues);
        
        // Validate form data
        if (validateFormData(formValues)) {
            // Simulate form submission (in real application, this would send data to server)
            simulateFormSubmission(formValues);
            
            // Reset the form
            form.reset();
            
            // Show success message
            showSuccessMessage();
        } else {
            console.error('Form validation failed');
        }
    }
    
    /**
     * Validate form data
     * @param {Object} formData - The form data to validate
     * @returns {boolean} - True if valid, false otherwise
     */
    function validateFormData(formData) {
        console.log('Validating form data...');
        
        // Check if all required fields are filled
        if (!formData.name || !formData.email || !formData.message) {
            console.error('Required fields are missing');
            return false;
        }
        
        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            console.error('Invalid email format');
            return false;
        }
        
        console.log('Form validation passed');
        return true;
    }
    
    /**
     * Simulate form submission to server
     * @param {Object} formData - The form data to submit
     */
    function simulateFormSubmission(formData) {
        console.log('Simulating form submission to server...');
        console.log('Submitted data:', formData);
        
        // In a real application, you would send this data to your server
        // Example: fetch('/submit-contact', { method: 'POST', body: JSON.stringify(formData) })
        
        console.log('Form submission simulation completed');
    }
    
    /**
     * Show success message to user
     */
    function showSuccessMessage() {
        console.log('Showing success message...');
        
        // Get the success message element
        const successMessage = document.getElementById('successMessage');
        
        if (successMessage) {
            // Remove hidden class to show the message
            successMessage.classList.remove('hidden');
            
            // Hide the message after 5 seconds
            setTimeout(() => {
                successMessage.classList.add('hidden');
                console.log('Success message hidden');
            }, 5000);
            
            console.log('Success message displayed');
        } else {
            console.error('Success message element not found');
        }
    }
}

/**
 * Initialize animations and interactive effects
 */
function initializeAnimations() {
    console.log('Initializing animations...');
    
    // Add hover effects to interactive elements
    addHoverEffects();
    
    // Initialize scroll animations (if needed)
    initializeScrollAnimations();
}

/**
 * Add hover effects to interactive elements
 */
function addHoverEffects() {
    console.log('Adding hover effects...');
    
    // Get all buttons and cards
    const interactiveElements = document.querySelectorAll(
        '.download-button, .event-button, .program-button, .plan-button, .form-submit-button'
    );
    
    // Add hover sound effect (optional - uncomment if you want sound)
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            // Optional: Add sound effect
            // playHoverSound();
            console.log('Hover effect triggered');
        });
        
        element.addEventListener('click', function() {
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            console.log(`Button clicked: ${this.textContent.trim()}`);
        });
    });
}

/**
 * Initialize scroll-based animations
 */
function initializeScrollAnimations() {
    console.log('Initializing scroll animations...');
    
    // Create intersection observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                console.log('Element animated into view:', entry.target.className);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.feature-card, .catalog-card, .event-card, .program-card');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

/**
 * Utility function to play hover sound (optional)
 * Uncomment and add sound file if you want audio feedback
 */
function playHoverSound() {
    // Example implementation:
    // const audio = new Audio('sounds/hover.mp3');
    // audio.volume = 0.3;
    // audio.play().catch(e => console.log('Sound play failed:', e));
}

/**
 * Handle window resize events for responsive design
 */
window.addEventListener('resize', function() {
    console.log('Window resized:', window.innerWidth, 'x', window.innerHeight);
    
    // Handle responsive navigation if needed
    handleResponsiveNavigation();
});

/**
 * Handle responsive navigation adjustments
 */
function handleResponsiveNavigation() {
    const navButtons = document.querySelector('.nav-buttons');
    
    if (window.innerWidth < 768) {
        console.log('Mobile view detected - adjusting navigation');
        // Add mobile-specific navigation behavior if needed
    } else {
        console.log('Desktop view detected');
        // Add desktop-specific navigation behavior if needed
    }
}

/**
 * Add keyboard navigation support for accessibility
 */
document.addEventListener('keydown', function(event) {
    // Handle keyboard navigation
    if (event.key === 'Tab') {
        console.log('Tab navigation detected');
        // Ensure proper focus management
    }
    
    // Handle escape key to close any open modals or messages
    if (event.key === 'Escape') {
        const successMessage = document.getElementById('successMessage');
        if (successMessage && !successMessage.classList.contains('hidden')) {
            successMessage.classList.add('hidden');
            console.log('Success message closed with Escape key');
        }
    }
});

/**
 * Handle page visibility changes (when user switches tabs)
 */
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        console.log('Page hidden - user switched tabs');
    } else {
        console.log('Page visible - user returned to tab');
    }
});

/**
 * Add smooth scrolling behavior for internal links
 */
function addSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                console.log(`Smooth scrolled to: ${targetId}`);
            }
        });
    });
}

// Initialize smooth scrolling when DOM is loaded
document.addEventListener('DOMContentLoaded', addSmoothScrolling);

// Export functions for potential external use (if using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeNavigation,
        initializeContactForm,
        initializeAnimations
    };
}

console.log('Melody Haven Library JavaScript loaded successfully');
