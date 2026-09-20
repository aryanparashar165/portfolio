/**
 * Portfolio JavaScript
 * Handles theme toggle, mobile navigation, and form interactions
 */

document.addEventListener('DOMContentLoaded', function() {
  // ============================================
  // THEME TOGGLE
  // ============================================
  
  const root = document.documentElement;
  const themeToggle = document.getElementById('theme-toggle');
  const savedTheme = localStorage.getItem('portfolio-theme');
  const preferredTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';

  const applyTheme = (theme) => {
    root.setAttribute('data-theme', theme);
    
    if (!themeToggle) return;
    
    const isSun = theme === 'dark';
    themeToggle.querySelector('i').className = `bi bi-${isSun ? 'sun' : 'moon-stars'}`;
    themeToggle.setAttribute('aria-label', `Switch to ${isSun ? 'light' : 'dark'} theme`);
  };

  // Apply saved theme or system preference
  applyTheme(savedTheme || preferredTheme);

  // Theme toggle click handler
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = root.getAttribute('data-theme') || 'dark';
      const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('portfolio-theme', nextTheme);
      applyTheme(nextTheme);
    });
  }

  // ============================================
  // MOBILE NAVIGATION
  // ============================================
  
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.style.display === 'block';
      navMenu.style.display = isOpen ? 'none' : 'block';
      navToggle.setAttribute('aria-expanded', !isOpen);
    });

    // Close menu when a link is clicked
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.style.display = 'none';
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navMenu.style.display = 'none';
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ============================================
  // CONTACT FORM HANDLING
  // ============================================
  
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Validate form
      if (!contactForm.checkValidity()) {
        // Show browser validation messages
        contactForm.reportValidity();
        return;
      }

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;

      try {
        // Disable button and show loading state
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';

        if (formStatus) {
          formStatus.className = 'form-status';
          formStatus.textContent = 'Sending your message…';
        }

        // Submit form to Formspree
        const formData = new FormData(contactForm);
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        // Success!
        contactForm.reset();
        submitBtn.textContent = originalText;

        if (formStatus) {
          formStatus.className = 'form-status is-success';
          formStatus.textContent = '✓ Thanks! Your message has been sent.';
          formStatus.setAttribute('role', 'status');
          formStatus.setAttribute('aria-live', 'polite');
        }

        // Clear success message after 5 seconds
        setTimeout(() => {
          if (formStatus) {
            formStatus.textContent = '';
            formStatus.className = 'form-status';
          }
        }, 5000);

      } catch (error) {
        console.error('Error:', error);

        if (formStatus) {
          formStatus.className = 'form-status is-error';
          formStatus.textContent = '✗ Your message could not be sent. Please try again or email me directly.';
          formStatus.setAttribute('role', 'alert');
          formStatus.setAttribute('aria-live', 'assertive');
        }

        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    });
  }

  // ============================================
  // SMOOTH SCROLL & ACTIVE LINKS
  // ============================================
  
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('a[href^="#"]');

  window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').slice(1) === current) {
        link.classList.add('active');
      }
    });
  });

  // ============================================
  // DYNAMIC BUTTON TEXT ANIMATION (Optional)
  // ============================================
  
  const animatedButtons = document.querySelectorAll('button[type="submit"], .btn-primary, .btn-outline-primary');
  
  animatedButtons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      if (this.querySelector('[data-text]')) {
        this.setAttribute('data-hover', 'true');
      }
    });

    button.addEventListener('mouseleave', function() {
      this.removeAttribute('data-hover');
    });
  });

  // ============================================
  // LAZY LOADING IMAGES (Optional)
  // ============================================
  
  if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img[data-src]');
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

    images.forEach(img => imageObserver.observe(img));
  }

  // ============================================
  // ACCESSIBILITY: TRAP FOCUS IN MODAL (If Needed)
  // ============================================
  
  document.addEventListener('keydown', (e) => {
    // ESC key closes mobile menu
    if (e.key === 'Escape' && navMenu && navMenu.style.display === 'block') {
      navMenu.style.display = 'none';
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });

  console.log('Portfolio JavaScript loaded successfully');
});
