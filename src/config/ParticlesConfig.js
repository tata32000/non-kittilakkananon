const ParticlesConfig = {
    fpsLimit: 60,
    particles: {
        number: {
            value: 50,
            limit: 60,
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
            distance: 150,
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
          onHover: {
            enable: true,
            mode: "grab"
          },
          onClick: {
            enable: true,
            mode: "push"
          }
        },
        modes: {
          grab: {
            distance: 150,
            links: {
              opacity: 1
            }
          },
          push: {
            quantity: 4
          }
        }
      }
};
export default ParticlesConfig;