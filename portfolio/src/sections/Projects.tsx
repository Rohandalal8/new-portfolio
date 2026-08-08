import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    const handleProjectHover = (project: number) => {
        const project1 = project1Ref.current;
        const project2 = project2Ref.current;
        const project3 = project3Ref.current;

        if (!project1 || !project2 || !project3) return;

        // Hivbnb hover
        if (project === 1) {
            gsap.to(project1, {
                scale: 1,
                y: 0,
                duration: 0.5,
                ease: "power3.out",
            });

            gsap.to(project2, {
                scale: 1,
                y: 0,
                duration: 0.5,
                ease: "power3.out",
            });

            gsap.to(project3, {
                scale: 1,
                y: 0,
                duration: 0.5,
                ease: "power3.out",
            });
        }

        // Prime Nova hover
        if (project === 2) {
            gsap.to(project1, {
                scale: 0.6,
                y: -120,
                x: -140,
                duration: 0.5,
                ease: "power3.out",
            });

            gsap.to(project2, {
                scale: 1.7,
                y: 120,
                x: -100,
                duration: 0.5,
                ease: "power3.out",
            });

            gsap.to(project3, {
                scale: 0.82,
                y: 120,
                duration: 0.5,
                ease: "power3.out",
            });
        }

        // Rydo hover
        if (project === 3) {
            gsap.to(project1, {
                scale: 0.78,
                y: 120,
                duration: 0.5,
                ease: "power3.out",
            });

            gsap.to(project2, {
                scale: 0.82,
                y: -40,
                duration: 0.5,
                ease: "power3.out",
            });

            gsap.to(project3, {
                scale: 1.08,
                y: 0,
                duration: 0.5,
                ease: "power3.out",
            });
        }
    };

    // -----------------------------
    // RESET WHEN MOUSE LEAVES
    // -----------------------------

    const handleMouseLeave = () => {
        const project1 = project1Ref.current;
        const project2 = project2Ref.current;
        const project3 = project3Ref.current;

        if (!project1 || !project2 || !project3) return;

        gsap.to([project1, project2, project3], {
            scale: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
        });
    };


    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

        projects.forEach((card) => {
            gsap.fromTo(card, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: card, start: "top bottom-=100" } });
        });

        gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 });
    }, []);

    return (
        <section id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="projects-label">
                    <p className="text-lg md:text-xl text-blue-100 text-center mb-10 xl:mt-0">
                        PROJECTS
                    </p>
                </div>
                <div className="showcaselayout" onMouseLeave={handleMouseLeave}>
                    <div className="first-project-wrapper">
                        <div className="image-wrapper">
                            <img src="/images/project1.png" alt="Hivbnb" />
                        </div>
                        <div className="text-content">
                            <h2>Hivbnb</h2>
                        </div>
                        <div className="md:text-xl">
                            <p>A modern web application for booking accommodations.</p>
                        </div>
                    </div>

                    <div className="first-project-wrapper">
                        <div className="image-wrapper">
                            <img src="/images/project1.png" alt="Hivbnb" />
                        </div>
                        <div className="text-content">
                            <h2>Hivbnb</h2>
                        </div>
                        <div className="md:text-xl">
                            <p>A modern web application for booking accommodations.</p>
                        </div>
                    </div>

                    <div className="project-wrapper">
                        <div className="image-wrapper">
                            <img src="/images/project1.png" alt="Hivbnb" />
                        </div>
                        <div className="text-content">
                            <h2>Hivbnb</h2>
                        </div>
                        <div className="md:text-xl">
                            <p>A modern web application for booking accommodations.</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Projects;