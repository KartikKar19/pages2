const navLinks = document.querySelectorAll('.nav-links a');
        
            navLinks.forEach(link => {
                link.addEventListener('click', event => {
                    event.preventDefault();
                    const targetId = link.getAttribute('href');
                    const targetSection = document.querySelector(targetId);
                    
                    if (targetSection) {
                        const offsetTop = targetSection.offsetTop;
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                });
            });