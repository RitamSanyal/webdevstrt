document.addEventListener("DOMContentLoaded", () => {
    // 1. Scroll Reveal Animation
    const revealElements = document.querySelectorAll(".reveal");

    const revealOnScroll = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        },
        {
            threshold: 0.15, // Trigger when 15% of the element is visible
        },
    );

    revealElements.forEach((el) => revealOnScroll.observe(el));

    // 2. Navbar Scroll Effect
    const navbar = document.querySelector(".navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.padding = "10px 0";
            navbar.style.backgroundColor = "rgba(15, 23, 42, 0.95)";
            navbar.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.3)";
        } else {
            navbar.style.padding = "15px 0";
            navbar.style.backgroundColor = "rgba(15, 23, 42, 0.8)";
            navbar.style.boxShadow = "none";
        }
    });

    // 3. Active Link Highlighting (Updated pageYOffset to window.scrollY)
    const sections = document.querySelectorAll("section, header");
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 150) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active-nav");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active-nav");
            }
        });
    });

    // 4. Smooth Scrolling (Enhancement for older browsers)
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70, // Adjust for navbar height
                    behavior: "smooth",
                });
            }
        });
    });

    // 5. Infinite Scroll for Certificates
    const certificatesTrack = document.querySelector(".certificates-track");
    if (certificatesTrack) {
        const cards = Array.from(certificatesTrack.children);

        // Clone the cards multiple times to ensure the track is long enough
        for (let i = 0; i < 3; i++) {
            cards.forEach((card) => {
                const clone = card.cloneNode(true);
                certificatesTrack.appendChild(clone);
            });
        }
    }

    // 6. Certificate Modal Logic (Enhanced with Zoom transition & loader support)
    const modal = document.getElementById("cert-modal");
    const modalFrame = document.getElementById("pdf-viewer");
    const closeModal = document.querySelector(".close-modal");
    const modalLoader = document.getElementById("modal-loader");

    // Use event delegation for anything with data-pdf
    document.addEventListener("click", (e) => {
        const trigger = e.target.closest("[data-pdf]");
        if (trigger) {
            const pdfPath = trigger.getAttribute("data-pdf");
            if (pdfPath && pdfPath !== "#") {
                // Security Validation: Ensure the path is safe to load (starts with 'assets/' or './assets/'),
                // does not attempt directory traversal ('..'), and is not a dangerous protocol.
                const isSafePath =
                    (pdfPath.startsWith("assets/") || pdfPath.startsWith("./assets/")) &&
                    !pdfPath.includes("..") &&
                    !pdfPath.toLowerCase().startsWith("javascript:") &&
                    !pdfPath.toLowerCase().startsWith("data:");

                if (!isSafePath) {
                    console.error("Blocked loading of potentially unsafe path:", pdfPath);
                    return;
                }

                // Mobile Chrome & Safari do not support rendering PDFs inside iframes.
                // Open PDF in a new tab on mobile or small screens for a better native reading experience.
                const isMobile =
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                        navigator.userAgent,
                    ) || window.innerWidth < 768;
                if (isMobile) {
                    window.open(pdfPath, "_blank", "noopener,noreferrer");
                    return;
                }

                // Show loader, hide iframe initially for transition
                if (modalLoader) modalLoader.style.display = "flex";
                modalFrame.style.opacity = "0";
                modalFrame.src = pdfPath;

                modal.style.display = "flex";
                setTimeout(() => {
                    modal.classList.add("active");
                }, 10);

                document.body.style.overflow = "hidden"; // Prevent background scroll
            }
        }

        if (
            e.target === modal ||
            e.target === closeModal ||
            e.target.closest(".close-modal")
        ) {
            modal.classList.remove("active");
            setTimeout(() => {
                if (!modal.classList.contains("active")) {
                    modal.style.display = "none";
                    modalFrame.src = ""; // Clear iframe
                    modalFrame.style.opacity = "0";
                }
            }, 300);
            document.body.style.overflow = "auto"; // Re-enable scroll
        }
    });

    // Hide loader and fade in PDF viewer when it loads
    if (modalFrame) {
        modalFrame.addEventListener("load", () => {
            if (modalLoader) modalLoader.style.display = "none";
            modalFrame.style.opacity = "1";
        });
    }

    // 7. Mobile Hamburger Menu Toggle
    const hamburgerToggle = document.getElementById("hamburger-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (hamburgerToggle && navMenu) {
        hamburgerToggle.addEventListener("click", () => {
            const isActive = hamburgerToggle.classList.toggle("active");
            navMenu.classList.toggle("active");
            hamburgerToggle.setAttribute("aria-expanded", isActive);
        });

        // Close mobile menu when links are clicked
        const mobileLinks = navMenu.querySelectorAll("a");
        mobileLinks.forEach((link) => {
            link.addEventListener("click", () => {
                hamburgerToggle.classList.remove("active");
                navMenu.classList.remove("active");
                hamburgerToggle.setAttribute("aria-expanded", "false");
            });
        });
    }

    // 8. Typing Subtitle Effect
    const subtitleEl = document.querySelector(".hero-text .subtitle");
    if (subtitleEl) {
        const phrases = ["Junior Software Developer", "Full Stack Web Developer"];
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeEffect() {
            const currentPhrase = phrases[phraseIndex];
            if (isDeleting) {
                subtitleEl.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
            } else {
                subtitleEl.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 30 : 60;

            if (!isDeleting && charIndex === currentPhrase.length) {
                // Phrase is complete: pause
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                // Pause before typing next phrase
                typeSpeed = 500;
            }

            setTimeout(typeEffect, typeSpeed);
        }

        // Initial setup: clear text content if any before starting loop
        subtitleEl.textContent = "";
        typeEffect();
    }

    // 9. Project Category Filter
    const filterButtons = document.querySelectorAll(
        ".project-filters .filter-btn",
    );
    const projectCards = document.querySelectorAll(".project-card");

    if (filterButtons.length > 0) {
        filterButtons.forEach((button) => {
            button.addEventListener("click", () => {
                // Update active button
                filterButtons.forEach((btn) => btn.classList.remove("active"));
                button.classList.add("active");

                const filterValue = button.getAttribute("data-filter");

                projectCards.forEach((card) => {
                    const cardCategory = card.getAttribute("data-category");
                    if (filterValue === "all" || cardCategory === filterValue) {
                        card.style.display = "";
                        card.classList.remove("hidden");
                    } else {
                        card.style.display = "none";
                        card.classList.add("hidden");
                    }
                });
            });
        });
    }

    // 10. Contact Form Submission (Serverless/Web3Forms Integration)
    const contactForm = document.getElementById("contact-form");
    const formStatus = document.getElementById("form-status");
    const submitBtn = contactForm
        ? contactForm.querySelector(".submit-btn")
        : null;

    if (contactForm) {
        contactForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            const nameInput = document.getElementById("name");
            const emailInput = document.getElementById("email");
            const messageInput = document.getElementById("message");
            const botcheckInput = document.getElementById("botcheck");

            const name = nameInput ? nameInput.value.trim() : "";
            const email = emailInput ? emailInput.value.trim() : "";
            const message = messageInput ? messageInput.value.trim() : "";
            const isBot = botcheckInput ? botcheckInput.checked : false;

            // Clean previous status
            if (formStatus) {
                formStatus.className = "form-status";
                formStatus.textContent = "";
                formStatus.style.display = "none";
            }

            // Client-side validation
            if (!name || !email || !message) {
                showStatus("Please fill in all fields.", "error");
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showStatus("Please enter a valid email address.", "error");
                return;
            }

            // Honeypot check (deceive spambots with fake success response)
            if (isBot) {
                showStatus(
                    "Thank you! Your message has been sent successfully.",
                    "success",
                );
                if (contactForm) contactForm.reset();
                return;
            }

            // Disable button and show spinner inside it
            let originalBtnHTML = "";
            if (submitBtn) {
                originalBtnHTML = submitBtn.innerHTML;
                submitBtn.disabled = true;
                submitBtn.innerHTML =
                    '<i class="fas fa-circle-notch fa-spin"></i> Sending...';
            }
            showStatus("Sending your message...", "loading");

            try {
                const accessKeyInput = contactForm.querySelector(
                    'input[name="access_key"]',
                );
                const apiKey = accessKeyInput ? accessKeyInput.value.trim() : "";
                if (!apiKey) {
                    throw new Error(
                        'Web3Forms Access Key is not configured. Please add a hidden input with name="access_key" to the contact form.',
                    );
                }

                // Actual request to Web3Forms API
                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    body: JSON.stringify({
                        access_key: apiKey,
                        name: name,
                        email: email,
                        message: message,
                        botcheck: isBot,
                        subject: "New Message from Portfolio Website",
                    }),
                });

                const result = await response.json();

                if (response.ok && result.success) {
                    showStatus(
                        "Thank you! Your message has been sent successfully.",
                        "success",
                    );
                    contactForm.reset();
                } else {
                    throw new Error(
                        result.message || "Form submission response was not ok.",
                    );
                }
            } catch (err) {
                console.error(err);
                showStatus(
                    err.message || "Oops! Something went wrong. Please try again later.",
                    "error",
                );
            } finally {
                // Re-enable button
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalBtnHTML;
                }
            }
        });

        function showStatus(msg, type) {
            if (!formStatus) return;
            formStatus.textContent = msg;
            formStatus.className = `form-status ${type}`;
            formStatus.style.display = "block";
        }
    }

    // 11. Reading Progress Bar Indicator
    const progressBar = document.getElementById("progress-bar");
    if (progressBar) {
        window.addEventListener("scroll", () => {
            const scrollTop = window.scrollY;
            const docHeight =
                document.documentElement.scrollHeight - window.innerHeight;
            if (docHeight > 0) {
                const scrollPercent = (scrollTop / docHeight) * 100;
                progressBar.style.width = `${scrollPercent}%`;
            } else {
                progressBar.style.width = "0%";
            }
        });
    }

    // 12. Service Worker Unregistration (Clean up caching feature)
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.getRegistrations().then((registrations) => {
            for (let registration of registrations) {
                registration
                    .unregister()
                    .then(() => console.log("Service Worker unregistered successfully"))
                    .catch((err) =>
                        console.error("Failed to unregister Service Worker:", err),
                    );
            }
        });
    }
});
