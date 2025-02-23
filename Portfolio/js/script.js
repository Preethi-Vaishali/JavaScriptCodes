document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navbar links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
            });
        });
    });

    // Fix "My Portfolio" scroll to top
    const portfolioHome = document.getElementById('portfolioHome');
    portfolioHome.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Scroll to top button functionality
    const scrollToTop = document.getElementById("scrollToTop");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollToTop.style.display = "block";
        } else {
            scrollToTop.style.display = "none";
        }
    });
    scrollToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Dynamic project cards (unchanged part)
    const projects = [
        { title: "E-Commerce Platform", description: "A scalable e-commerce application.", img: "img/project1.jpg" },
        { title: "Social Media App", description: "A social networking platform.", img: "img/project2.jpg" },
        { title: "Task Management Tool", description: "Collaborative task management tool.", img: "img/project3.jpg" }
    ];

    const projectCards = document.getElementById("projectCards");
    projects.forEach(project => {
        const col = document.createElement("div");
        col.classList.add("col-md-4");
        col.innerHTML = `
            <div class="card h-100">
                <img src="${project.img}" class="card-img-top" alt="${project.title}">
                <div class="card-body">
                    <h5 class="card-title">${project.title}</h5>
                    <p class="card-text">${project.description}</p>
                    <a href="#" class="btn btn-primary">View Details</a>
                </div>
            </div>
        `;
        projectCards.appendChild(col);
    });

    // Theme toggle (unchanged part)
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        if (savedTheme === 'dark-theme') {
            themeToggle.textContent = 'Light Mode';
        }
    }

    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-theme')) {
            body.classList.remove('dark-theme');
            themeToggle.textContent = 'Dark Mode';
            localStorage.setItem('theme', 'light-theme');
        } else {
            body.classList.add('dark-theme');
            themeToggle.textContent = 'Light Mode';
            localStorage.setItem('theme', 'dark-theme'); 
        }
    });

    // Scrollspy for navbar active links (unchanged part)
    const navLinks = document.querySelectorAll('.nav-link');
    window.addEventListener('scroll', () => {
        let scrollPosition = window.scrollY;

        navLinks.forEach((link) => {
            const section = document.querySelector(link.getAttribute('href'));

            if (section) {
                const sectionTop = section.offsetTop - 100; 
                const sectionHeight = section.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    navLinks.forEach((nav) => nav.classList.remove('active'));
                    link.classList.add('active');
                }
            }
        });
    });

    // Contact form submission (validation part)
    document.getElementById('contactForm').addEventListener('submit', function (e) {
        e.preventDefault();

        let isValid = true;

        const nameField = document.getElementById('name');
        const nameError = document.getElementById('nameError');
        const nameValue = nameField.value.trim();
        const nameRegex = /^[A-Za-z\s]{2,50}$/;

        if (!nameRegex.test(nameValue)) {
            nameError.classList.remove('d-none');
            isValid = false;
        } else {
            nameError.classList.add('d-none');
        }

        const emailField = document.getElementById('email');
        const emailError = document.getElementById('emailError');
        const emailValue = emailField.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(emailValue)) {
            emailError.classList.remove('d-none');
            isValid = false;
        } else {
            emailError.classList.add('d-none');
        }

        const messageField = document.getElementById('message');
        const messageError = document.getElementById('messageError');
        const messageValue = messageField.value.trim();
        const wordCount = messageValue.split(/\s+/).filter(word => word).length;

        if (wordCount > 200) {
            messageError.classList.remove('d-none');
            isValid = false;
        } else {
            messageError.classList.add('d-none');
        }

        if (isValid) {

            fetch('https://script.google.com/macros/s/AKfycbwiBrcEFrHhZDqMwPbpq1picVA5uI2u3d4Pf7WDbgGWU7-kvMqT_Qp3NZyNb-7g_MNg/exec', { method: 'POST', body: new FormData(this) })
                .then(response => {
                    alert('Thank you! Form is submitted.');
                    window.location.reload();
                })
                .catch(error => console.error('Error!', error.message));
        }
    });
});