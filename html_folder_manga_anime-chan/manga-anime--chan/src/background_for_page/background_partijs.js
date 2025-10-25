/* global particlesJS, Stats */

export const background_partijs = () => {
  window.addEventListener("load", () => {
    if (!window.particlesJS) return;

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

    if (window.Stats) {
      const stats = new Stats();
      stats.showPanel(0);
      document.body.appendChild(stats.dom);
      const update = () => {
        stats.begin();
        stats.end();
        requestAnimationFrame(update);
      };
      update();
    }
  });
};
