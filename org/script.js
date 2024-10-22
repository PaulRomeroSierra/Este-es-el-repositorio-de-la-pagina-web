 
    const sections = document.querySelectorAll('section');
    const circles = document.querySelectorAll('.indicator-circle');

    window.addEventListener('scroll', () => {
        let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                circles.forEach(circle => circle.classList.remove('active'));
                circles[index].classList.add('active');
            }
        });
    }); 