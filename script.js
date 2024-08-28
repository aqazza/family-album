"use strict";
(function () {
    window.onload = () => {
        const obj = document.querySelector("#gallery");
        const time = 10000;

        function animStart() {
            if (obj.classList.contains("active") == false) {
                obj.classList.add("active");
                setTimeout(() => {
                    animEnd();
                }, time);
            }
        }

        function animEnd() {
            obj.classList.remove("active");
            obj.offsetWidth;
        }

        document.addEventListener("scroll", function () {
            animStart();
        });
        window.addEventListener("resize", animStart);
        animStart();
    };

    document.addEventListener('DOMContentLoaded', () => {
        const figures = document.querySelectorAll('#gallery figure');

        figures.forEach(figure => {
            // Add click event for navigation with zoom effect
            figure.addEventListener('click', (event) => {
                event.preventDefault(); // Prevent default click behavior

                const album = figure.getAttribute('data-album');
                if (album) {
                    figure.classList.add('zoom-active');

                    // Wait for the zoom animation to finish before navigating
                    setTimeout(() => {
                        window.location.href = `${album}.html`;
                    }, 500); // Matches the duration of the zoom animation
                }
            });

            // Add hover effect to mimic the side-to-side movement
            figure.addEventListener('mouseenter', () => {
                figure.classList.add('hover-active');
            });

            figure.addEventListener('mouseleave', () => {
                figure.classList.remove('hover-active');
            });
        });
    });
})();
