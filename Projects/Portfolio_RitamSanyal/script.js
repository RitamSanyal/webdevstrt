document.addEventListener('DOMContentLoaded', () => {
    // 1. Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, {
        threshold: 0.15 // Trigger when 15% of the element is visible
    });

    revealElements.forEach(el => revealOnScroll.observe(el));

    // 2. Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = '10px 0';
            navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.95)';
            navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.padding = '15px 0';
            navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });

    // 3. Active Link Highlighting
    const sections = document.querySelectorAll('section, header');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active-nav');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active-nav');
            }
        });
    });

    // 4. Smooth Scrolling (Enhancement for older browsers)
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70, // Adjust for navbar height
                    behavior: 'smooth'
                });
            }
        });
    });

    // 5. Infinite Scroll for Certificates
    const certificatesTrack = document.querySelector('.certificates-track');
    if (certificatesTrack) {
        const cards = Array.from(certificatesTrack.children);
        
        // Clone the cards multiple times to ensure the track is long enough
        for (let i = 0; i < 3; i++) {
            cards.forEach(card => {
                const clone = card.cloneNode(true);
                certificatesTrack.appendChild(clone);
            });
        }
    }

    // 6. Certificate Modal Logic
    const modal = document.getElementById('cert-modal');
    const modalFrame = document.getElementById('pdf-viewer');
    const closeModal = document.querySelector('.close-modal');

    // Use event delegation for anything with data-pdf
    document.addEventListener('click', (e) => {
        const trigger = e.target.closest('[data-pdf]');
        if (trigger) {
            const pdfPath = trigger.getAttribute('data-pdf');
            if (pdfPath && pdfPath !== '#') {
                modalFrame.src = pdfPath;
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden'; // Prevent background scroll
            }
        }

        if (e.target === modal || e.target === closeModal) {
            modal.style.display = 'none';
            modalFrame.src = ''; // Clear iframe
            document.body.style.overflow = 'auto'; // Re-enable scroll
        }
    });
});
