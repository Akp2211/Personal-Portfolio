      // Smooth scrolling for navigation links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute("href"));
          if (target) {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        });
      });

      // Navbar scroll effect
      window.addEventListener("scroll", () => {
        const navbar = document.getElementById("navbar");
        if (window.scrollY > 100) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      });

      // Form submission
      document
        .querySelector(".contact-form")
        .addEventListener("submit", function (e) {
          e.preventDefault();

          // Create a simple success message
          const formData = new FormData(this);
          const successMessage = document.createElement("div");
          successMessage.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: linear-gradient(135deg, #6366f1 0%, #ec4899 100%);
                color: white;
                padding: 2rem 3rem;
                border-radius: 20px;
                text-align: center;
                z-index: 9999;
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
            `;
          successMessage.innerHTML = `
                <h3>Message Sent! ✨</h3>
                <p>Thanks for reaching out. I'll get back to you soon!</p>
            `;

          document.body.appendChild(successMessage);

          // Remove message after 3 seconds
          setTimeout(() => {
            successMessage.remove();
          }, 3000);

          // Reset form
          this.reset();
        });

      // Add intersection observer for animations
      const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      }, observerOptions);

      // Observe skill cards and project cards for scroll animations
      document
        .querySelectorAll(".skill-card, .project-card")
        .forEach((card) => {
          card.style.opacity = "0";
          card.style.transform = "translateY(30px)";
          card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
          observer.observe(card);
        });

      // Add typing effect to the hero title
      const heroTitle = document.querySelector(".hero-text h1");
      const titleText = heroTitle.textContent;
      heroTitle.textContent = "";

      let i = 0;
      const typeWriter = () => {
        if (i < titleText.length) {
          heroTitle.textContent += titleText.charAt(i);
          i++;
          setTimeout(typeWriter, 100);
        }
      };

      // Start typing effect after page load
      setTimeout(typeWriter, 1000);
 