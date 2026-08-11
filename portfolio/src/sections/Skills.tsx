import { techStack } from "../constants/index.tsx";
import TitleHeader from "../components/TitleHeader";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    const rows = [
        techStack.slice(0, 8),
        techStack.slice(8, 16),
        techStack.slice(16, 24),
    ];

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".tech-stack-section",
                start: "top 75%",
                toggleActions: "play none none none",
            },
        });

        // Header
        tl.from(".tech-header", {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
        })

            // Subtitle
            .from(
                ".tech-header .subtitle",
                {
                    y: 20,
                    opacity: 0,
                    duration: 0.6,
                    ease: "power2.out",
                },
                "-=0.4"
            )

            // Rows
            .from(
                ".tech-row",
                {
                    y: 70,
                    opacity: 0,
                    scale: 0.96,
                    duration: 0.9,
                    stagger: 0.18,
                    ease: "power3.out",
                },
                "-=0.25"
            );

        // Subtle scroll parallax
        gsap.utils.toArray<HTMLElement>(".tech-row").forEach(
            (row, index) => {
                gsap.to(row, {
                    x: index === 1 ? -25 : 25,
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".tech-stack-section",
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1.5,
                    },
                });
            }
        );
    });

    return (
        <section id="skills" className="tech-stack-section">
            <div className="tech-header">
                <p className="text-lg md:text-xl text-blue-100 text-center mb-10 xl:mt-0">
                    <TitleHeader title="TECH STACK" />
                </p>

                <p className="subtitle text-white-50">
                    Technologies and tools I use to bring ideas to life
                </p>
            </div>

            <div className="tech-marquee">
                {rows.map((row, rowIndex) => (
                    <div
                        className={`tech-row ${rowIndex % 2 === 1 ? "reverse" : ""
                            }`}
                        key={rowIndex}
                    >
                        <div className="tech-track">
                            {/* First set */}
                            {row.map((tech) => (
                                <div className="tech-card" key={tech.name}>
                                    {tech.icon}
                                    <span>{tech.name}</span>
                                </div>
                            ))}

                            {/* Duplicate set for infinite loop */}
                            {row.map((tech) => (
                                <div
                                    className="tech-card"
                                    key={`${tech.name}-duplicate`}
                                >
                                    {tech.icon}
                                    <span>{tech.name}</span>
                                </div>
                            ))}

                            {row.map((tech) => (
                                <div
                                    className="tech-card"
                                    key={`${tech.name}-duplicate`}
                                >
                                    {tech.icon}
                                    <span>{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;