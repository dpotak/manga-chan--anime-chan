/* global particlesJS, Stats */

export const background_partijs = () => {
  // Удаляем предыдущий canvas, если он остался
  const oldCanvas = document.querySelector("#particles-js > canvas");
  if (oldCanvas) oldCanvas.remove();

  // Если библиотека ещё не загружена — ждём немного
  const initParticles = () => {
    if (!window.particlesJS) {
      setTimeout(initParticles, 100);
      return;
    }

    particlesJS("particles-js", {
      particles: {
        number: { value: 100 },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.5 },
        size: { value: 3 },
        move: { enable: true, speed: 2 },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "push" },
        },
        modes: {
          repulse: { distance: 100 },
          push: { particles_nb: 4 },
        },
      },
      retina_detect: true,
    });
  };

  initParticles();
};
