import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import AnimatedCounter from "../components/AnimatedCounter.tsx";
import TitleHeader from "../components/TitleHeader.tsx";

const About = () => {
    const aboutRef = useRef<HTMLElement | null>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: aboutRef.current,
                    start: "top 75%",
                    toggleActions: "play none none none",
                },
            });

            tl.from(".about-label", {
                y: 30,
                opacity: 0,
                duration: 0.8,
            })
                .from(
                    ".about-title",
                    {
                        x: -80,
                        opacity: 0,
                        duration: 1,
                    },
                    "-=0.5"
                )
                .from(
                    ".about-text p",
                    {
                        x: 35,
                        opacity: 0,
                        duration: 0.7,
                        stagger: 0.15,
                    },
                    "-=0.9"
                );
        }, aboutRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={aboutRef}
            id="about"
            className="app-showcase flex-col xl:min-h-screen"
        >
            {/* Top Label */}
            <div className="about-label">
                <p className="text-lg md:text-xl text-blue-100 text-center mt-15 xl:mt-0 xl:pt-20">
                    <TitleHeader title="ABOUT ME" />
                </p>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 gap-12 pt-8 md:grid-cols-2 lg:pt-14">

                {/* Left */}
                <div className="overflow-hidden">
                    <h2 className="about-title text-[#6366F1] text-5xl font-semibold leading-[1.05] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl ">
                        Rohan
                    </h2>
                    <h2 className="about-title text-white-50 whitespace-nowrap text-3xl font-light leading-[1.05] tracking-tight md:text-2xl lg:text-4xl xl:text-4xl">
                        FULLSTACK DEVELOPER
                    </h2>
                </div>

                {/* Right */}
                <div className="about-text max-w-3xl text-md leading-relaxed text-white-200">
                    <p>
                        I'm a passionate Full Stack developer who loves transforming
                        concepts into interactive web applications.
                    </p>

                    <p>
                        My expertise lies in building user-friendly interfaces and robust
                        backend systems.
                    </p>

                    <p>
                        I enjoy solving complex problems and delivering solutions that
                        make a difference.
                    </p>

                    <p className="mt-2">
                        My approach focuses on creating scalable, high-performing
                        solutions tailored to both user needs and business objectives.
                    </p>

                    <p>
                        By prioritizing performance, accessibility, and responsiveness, I
                        strive to deliver experiences that not only engage users but also
                        drive tangible results.
                    </p>
                </div>
            </div>

            <AnimatedCounter />
        </section>
    );
};

export default About;