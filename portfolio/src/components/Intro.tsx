import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

interface IntroProps {
    onComplete: () => void;
}

const Intro = ({ onComplete }: IntroProps) => {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                onComplete: () => {
                    onComplete();
                },
            });

            // Initial state
            gsap.set(".intro-name", {
                y: 80,
                opacity: 0,
            });

            gsap.set(".intro-role", {
                y: 30,
                opacity: 0,
            });

            gsap.set(".intro-line", {
                scaleX: 0,
                transformOrigin: "left center",
            });

            gsap.set(".intro-subtitle", {
                opacity: 0,
                y: 20,
            });

            // ROHAN
            tl.to(".intro-name", {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power4.out",
            })

                // Line
                .to(
                    ".intro-line",
                    {
                        scaleX: 1,
                        duration: 0.8,
                        ease: "power3.inOut",
                    },
                    "-=0.5"
                )

                // Fullstack Developer
                .to(
                    ".intro-role",
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: "power3.out",
                    },
                    "-=0.3"
                )

                // Subtitle
                .to(
                    ".intro-subtitle",
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        ease: "power2.out",
                    },
                    "-=0.3"
                )

                // Hold
                .to({}, { duration: 0.8 })

                // Premium exit
                .to(".intro-content", {
                    scale: 1.08,
                    opacity: 0,
                    filter: "blur(12px)",
                    duration: 1.1,
                    ease: "power3.inOut",
                })

                .to(
                    container.current,
                    {
                        opacity: 0,
                        duration: 0.8,
                        ease: "power2.inOut",
                    },
                    "-=0.5"
                );
        },
        { scope: container }
    );

    return (
        <div
            ref={container}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden"
        >
            {/* Background glow */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none" >
                {/* <div className="container"> */}
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
                <div></div>
                {/* </div> */}
            </div>

            <div className="intro-content relative text-center">
                <p className="intro-subtitle mb-5 text-sm md:text-base tracking-[0.35em] uppercase text-indigo-300">
                    Welcome to my portfolio
                </p>

                <h1 className="intro-name text-6xl md:text-8xl font-black tracking-tight text-white">
                    ROHAN
                </h1>

                <div className="intro-line mx-auto mt-5 h-[2px] w-40 md:w-64 bg-gradient-to-r from-indigo-500 via-cyan-400 to-purple-500" />

                <h2 className="intro-role mt-5 text-xl md:text-3xl font-semibold tracking-[0.15em] uppercase bg-gradient-to-r from-indigo-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
                    Fullstack Developer
                </h2>

                <p className="intro-subtitle mt-5 text-sm md:text-base text-white/50">
                    Building modern digital experiences
                </p>
            </div>
        </div>
    );
};

export default Intro;