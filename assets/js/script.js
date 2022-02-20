// particles background

particlesJS("particles-js", {
    particles: {
        number: {
            value: 50,
            density: {
                enable: true,
                value_area: 800,
            },
        },
        color: {
            value: "#333",
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000",
            },
            polygon: {
                nb_sides: 5,
            },
            image: {
                src: "img/github.svg",
                width: 100,
                height: 100,
            },
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
            },
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#000",
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
            },
        },
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "grab",
            },
            onclick: {
                enable: true,
                mode: "push",
            },
            resize: true,
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1,
                },
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
            push: {
                particles_nb: 4,
            },
            remove: {
                particles_nb: 2,
            },
        },
    },
    retina_detect: true,
});

/*========================= text animation ===============================*/

const words = ["Coding", "Programming", "Books"],
    text = document.querySelector(".text__animation");

// generate (iterate from 0-3)
function* generator() {
    var index = 0;
    while (true) {
        yield index++;

        if (index > 2) {
            index = 0;
        }
    }
}

// printing effect
function printChar(word) {
    let i = 0;
    text.innerHTML = "";
    let id = setInterval(() => {
        if (i >= word.length) {
            deleteChar();
            clearInterval(id);
        } else {
            text.innerHTML += word[i];
            i++;
        }
    }, 400);
}

// deleting effect
function deleteChar() {
    let word = text.innerHTML;
    let i = word.length - 1;
    let id = setInterval(() => {
        if (i >= 0) {
            text.innerHTML = text.innerHTML.substring(
                0,
                text.innerHTML.length - 1
            );
            i--;
        } else {
            printChar(words[gen.next().value]);
            clearInterval(id);
        }
    }, 300);
}

let gen = generator();
printChar(words[gen.next().value]);
