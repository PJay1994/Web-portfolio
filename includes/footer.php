<!-- Footer -->
    <footer>
        <div class="container">
            <div class="social-links">
                <a href="mailto:peterbidle1@gmail.com" title="Email"> <i class="fa-solid fa-envelope"></i> </a>
                <a href="https://linkedin.com/in/peterbidle" title="LinkedIn"> <i class="fa-brands fa-linkedin"></i> </a>
                <a href="https://github.com/PJay1994" title="GitHub"> <i class="fa-brands fa-github"></i> </a>
            </div>
            <p>&copy; <?php echo date('Y'); ?> Peter Bidle. All rights reserved.</p>
        </div>
    </footer>

    <!-- JavaScript -->
    <script>
        /* YOUR EXISTING JAVASCRIPT FROM THE BOTTOM OF YOUR HTML FILES GOES HERE */
        
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
                }
            });
        });

        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe portfolio items and skill items
        document.querySelectorAll('.portfolio-item, .skill-item, .education-item, .certification-item').forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = 'all 0.6s ease';
            observer.observe(item);
        });
    </script>
</body>
</html>