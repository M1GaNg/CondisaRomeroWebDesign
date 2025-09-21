import { useEffect } from 'react';

export default function useGlobalScripts() {
    useEffect(() => {
        // menu responsive
        const menu = document.querySelector("#menu-icon");
        if (menu) {
            menu.onclick = function () {
                const navBar = document.querySelector(".navbar");
                menu.classList.toggle('bx-x');
                if (navBar) navBar.classList.toggle("open");
            };
        }

        // cambio de color navbar
        const nav = document.querySelector('.nav');
        function fixNav() {
            if (nav && window.scrollY > nav.offsetHeight + 150) {
                nav.classList.add('change');
            } else if (nav) {
                nav.classList.remove('change');
            }
        }
        window.addEventListener('scroll', fixNav);

        // contador de la pagina
        const counters = document.querySelectorAll('.counter');
        function fixCount() {
            if (window.scrollY > nav.offsetHeight + 400) {
                counters.forEach(counter => {
                    counter.innerText = '0';
                    const updateCounter = () => {
                        const target = +counter.getAttribute('data-target');
                        const c = +counter.innerText;
                        const increment = target / 900;
                        if (c < target) {
                            counter.innerText = `${Math.ceil(c + increment)}`;
                            setTimeout(updateCounter, 1);
                        } else {
                            counter.innerText = target;
                        }
                    };
                    updateCounter();
                });
            } else {
                counters.forEach(counter => { counter.innerText = '0'; });
            }
        }
        window.addEventListener('scroll', fixCount);

        // Casillas deslizables
        const toggles = document.querySelectorAll('.faq-toggle');
        toggles.forEach(toggle => {
            toggle.addEventListener('click', () => {
                toggle.parentNode.classList.toggle('active');
            });
        });


        // Carrusel de imagenes Projects
        const imgs = document.getElementById('imgs');
        const leftBtn = document.getElementById('left');
        const rightBtn = document.getElementById('right');
        const img = document.querySelectorAll('#imgs img');
        let idy = 0;
        let interval = setInterval(run, 4000);
        function run() {
            idy++;
            changeImage();
        }
        function changeImage() {
            if (!imgs) return;
            if (idy > img.length - 1) {
                idy = 0;
            } else if (idy < 0) {
                idy = img.length - 1;
            }
            imgs.style.transform = `translateX(${-idy * 900}px)`;
        }
        function resetInterval() {
            clearInterval(interval);
            interval = setInterval(run, 4000);
        }
        if (rightBtn) {
            rightBtn.addEventListener('click', () => {
                idy++;
                changeImage();
                resetInterval();
            });
        }
        if (leftBtn) {
            leftBtn.addEventListener('click', () => {
                idy--;
                changeImage();
                resetInterval();
            });
        }

        // Carrusel de imagenes Projects DIseño de Interiores
        const imgs2 = document.getElementById('imgs2');
        const leftBtn2 = document.getElementById('izq');
        const rightBtn2 = document.getElementById('der');
        const img2 = document.querySelectorAll('#imgs2 img');
        let id_y = 0;
        let inter = setInterval(correr, 4000);
        function correr() {
            id_y++;
            changeImg();
        }
        function changeImg() {
            if (!imgs2) return;
            if (id_y > img2.length - 1) {
                id_y = 0;
            } else if (id_y < 0) {
                id_y = img2.length - 1;
            }
            imgs2.style.transform = `translateX(${-id_y * 900}px)`;
        }
        function resetInterv() {
            clearInterval(inter);
            inter = setInterval(correr, 4000);
        }
        if (rightBtn2) {
            rightBtn2.addEventListener('click', () => {
                id_y++;
                changeImg();
                resetInterv();
            });
        }
        if (leftBtn2) {
            leftBtn2.addEventListener('click', () => {
                id_y--;
                changeImg();
                resetInterv();
            });
        }

        // galeria de videos
        const video = document.getElementById('video');
        const playPauseButton = document.getElementById('play-pause');
        if (video && playPauseButton) {
            playPauseButton.addEventListener('click', () => {
                if (video.paused || video.ended) {
                    video.play();
                    playPauseButton.textContent = 'Pause';
                    playPauseButton.classList.remove('play');
                    playPauseButton.classList.add('pause');
                } else {
                    video.pause();
                    playPauseButton.textContent = 'Play';
                    playPauseButton.classList.remove('pause');
                    playPauseButton.classList.add('play');
                }
            });
        }
    }, []);
}
