// trigger to play music in the background with sweetalert
window.addEventListener('load', () => {
    Swal.fire({
        title: 'Heyy Bhumika? Do you want to play music in the background?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
    }).then((result) => {
        if (result.isConfirmed) {
            document.querySelector('.song').play();
            animationTimeline();
        } else {
            animationTimeline();
        }
    });
});

// animation timeline
const animationTimeline = () => {
    // split chars that needs to be animated individually
    const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
    const hbd = document.getElementsByClassName("wish-hbd")[0];

    textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
        .split("")
        .join("</span><span>")}</span>`;

    hbd.innerHTML = `<span>${hbd.innerHTML
        .split("")
        .join("</span><span>")}</span>`;

    const ideaTextTrans = {
        opacity: 0,
        y: -20,
        rotationX: 5,
        skewX: "15deg"
    }

    const ideaTextTransLeave = {
        opacity: 0,
        y: 20,
        rotationY: 5,
        skewX: "-15deg"
    }

    // timeline
    const tl = new TimelineMax();

    tl.to(".container", 0.4, { // Reduced duration
            visibility: "visible"
        })
        .from(".one", 0.5, { // Reduced duration
            opacity: 0,
            y: 10
        })
        .from(".two", 0.3, { // Reduced duration
            opacity: 0,
            y: 10
        })
        .to(".one", 0.5, { // Reduced duration
            opacity: 0,
            y: 10
        }, "+=2.5") // Reduced delay
        .to(".two", 0.5, { // Reduced duration
            opacity: 0,
            y: 10
        }, "-=0.5") // Reduced delay
        .from(".three", 0.5, { // Reduced duration
            opacity: 0,
            y: 10
        })
        .to(".three", 0.5, { // Reduced duration
            opacity: 0,
            y: 10
        }, "+=2.5") // Reduced delay
        .from(".four", 0.5, { // Reduced duration
            scale: 0.2,
            opacity: 0,
        })
        .from(".fake-btn", 0.2, { // Reduced duration
            scale: 0.2,
            opacity: 0,
        })
        .staggerTo(
            ".hbd-chatbox span",
            1.0, { // Reduced duration
                visibility: "visible",
            },
            0.03 // Reduced delay
        )
        .to(".fake-btn", 0.1, {
            backgroundColor: "rgb(127, 206, 248)",
        }, "+=3.5") // Reduced delay
        .to(".four", 0.4, { // Reduced duration
            scale: 0.2,
            opacity: 0,
            y: -150
        }, "+=0.8") // Reduced delay
        .from(".idea-1", 0.5, ideaTextTrans) // Reduced duration
        .to(".idea-1", 0.5, ideaTextTransLeave, "+=1.5") // Reduced delay
        .from(".idea-2", 0.5, ideaTextTrans) // Reduced duration
        .to(".idea-2", 0.5, ideaTextTransLeave, "+=1.5") // Reduced delay
        .from(".idea-3", 0.5, ideaTextTrans) // Reduced duration
        .to(".idea-3 strong", 0.4, { // Reduced duration
            scale: 1.2,
            x: 10,
            backgroundColor: "rgb(21, 161, 237)",
            color: "#fff",
        })
        .to(".idea-3", 0.5, ideaTextTransLeave, "+=1.5") // Reduced delay
        .from(".idea-4", 0.5, ideaTextTrans) // Reduced duration
        .to(".idea-4", 0.5, ideaTextTransLeave, "+=1.5") // Reduced delay
        .from(
            ".idea-5",
            0.5, { // Reduced duration
                rotationX: 15,
                rotationZ: -10,
                skewY: "-5deg",
                y: 50,
                z: 10,
                opacity: 0,
            },
            "+=1"
        )
        .to(
            ".idea-5 span",
            0.5, { // Reduced duration
                rotation: 90,
                x: 8,
            },
            "+=1.0" // Reduced delay
        )
        .to(
            ".idea-5",
            0.5, { // Reduced duration
                scale: 0.2,
                opacity: 0,
            },
            "+=1.5" // Reduced delay
        )
        .staggerFrom(
            ".idea-6 span",
            0.6, { // Reduced duration
                scale: 3,
                opacity: 0,
                rotation: 15,
                ease: Expo.easeOut,
            },
            0.15 // Reduced delay
        )
        .staggerTo(
            ".idea-6 span",
            0.6, { // Reduced duration
                scale: 3,
                opacity: 0,
                rotation: -15,
                ease: Expo.easeOut,
            },
            0.15,
            "+=1.0" // Reduced delay
        )
        .staggerFromTo(
            ".baloons img",
            1.5, { // Reduced duration
                opacity: 0.9,
                y: 1400,
            }, {
                opacity: 1,
                y: -1000,
            },
            0.15 // Reduced delay
        )
        .from(
            ".profile-picture",
            0.4, { // Reduced duration
                scale: 3.5,
                opacity: 0,
                x: 25,
                y: -25,
                rotationZ: -45,
            },
            "-=1"
        )
        .from(".hat", 0.4, { // Reduced duration
            x: -100,
            y: 350,
            rotation: -180,
            opacity: 0,
        })
        .staggerFrom(
            ".wish-hbd span",
            0.5, { // Reduced duration
                opacity: 0,
                y: -50,
                rotation: 150,
                skewX: "30deg",
                ease: Elastic.easeOut.config(1, 0.5),
            },
            0.1
        )
        .staggerFromTo(
            ".wish-hbd span",
            0.5, { // Reduced duration
                scale: 1.4,
                rotationY: 150,
            }, {
                scale: 1,
                rotationY: 0,
                color: "#ff69b4",
                ease: Expo.easeOut,
            },
            0.1,
            "party"
        )
        .from(
            ".wish h5",
            0.4, { // Reduced duration
                opacity: 0,
                y: 10,
                skewX: "-15deg",
            },
            "party"
        )
        .staggerTo(
            ".eight svg",
            1.0, { // Reduced duration
                visibility: "visible",
                opacity: 0,
                scale: 80,
                repeat: 3,
                repeatDelay: 1.0, // Reduced delay
            },
            0.3
        )
        .to(".six", 0.4, { // Reduced duration
            opacity: 0,
            y: 30,
            zIndex: "-1",
        })
        .staggerFrom(".nine p", 0.8, ideaTextTrans, 1.0) // Reduced duration
        .to(
            ".last-smile",
            0.4, { // Reduced duration
                rotation: 90,
            },
            "+=0.5" // Reduced delay
        );

    // Restart Animation on click
    const replyBtn = document.getElementById("replay");
    replyBtn.addEventListener("click", () => {
        tl.restart();
    });
}
