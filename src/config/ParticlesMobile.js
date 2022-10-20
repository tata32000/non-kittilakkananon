const ParticlesMobile = {
    fpsLimit: 60,
    particles: {
        number: {
            value: 40,
            limit: 40,
            density: {
              enable: true,
              area: 800
            }
          },
        color: {
            value: "#808080",
        },
        links: {
            enable: true,
            color: "#808080",
            distance: 100,
            opacity: 0.5,
        },
        move: {
            enable: true,
        },
    },
    smooth: true,
    retina_detect: true,
    interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push"
          }
        },
        modes: {
          push: {
            quantity: 2
          }
        }
      }
};
export default ParticlesMobile;