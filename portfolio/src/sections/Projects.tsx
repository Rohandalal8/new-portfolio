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
                scale: 1.05,
                x: 0,
                duration: 0.5,
                ease: "power3.out",
            });

            gsap.to(project2, {
                scale: 0.95,
                x: 0,
                duration: 0.5,
                ease: "power3.out",
            });

            gsap.to(project3, {
                scale: 0.95,
                x: -20,
                duration: 0.5,
                ease: "power3.out",
            });
        }

        // Prime Nova hover
        if (project === 2) {
            gsap.to(project1, {
                scale: 0.95,
                x: 0,
                duration: 0.5,
                ease: "power3.out",
            });

            gsap.to(project2, {
                scale: 1.05,
                x: 0,
                duration: 0.5,
                ease: "power3.out",
            });

            gsap.to(project3, {
                scale: 0.95,
                x: 0,
                duration: 0.5,
                ease: "power3.out",
            });
        }

        // Rydo hover
        if (project === 3) {
            gsap.to(project1, {
                scale: 0.95,
                x: 20,
                duration: 0.5,
                ease: "power3.out",
            });

            gsap.to(project2, {
                scale: 0.95,
                x: 0,
                duration: 0.5,
                ease: "power3.out",
            });

            gsap.to(project3, {
                scale: 1.05,
                x: 0,
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
            x: 0,
            duration: 0.5,
            ease: "power3.out",
        });
    };


    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

        projects.forEach((card, index) => {
            gsap.fromTo(card, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 0.2 * (index + 1), scrollTrigger: { trigger: card, start: "top bottom-=1" } });
        });

        gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 });
    }, []);

    return (
        <section id="projects" ref={sectionRef} className="app-showcase xl:min-h-screen">
            <div className="w-full">
                <div className="projects-label">
                    <p className="text-blue-100 mb-10 xl:mt-0 flex justify-center items-center font-semibold md:text-5xl text-3xl text-center"> 
                        PROJECTS
                    </p>
                </div>
                <div className="showcaselayout" onMouseLeave={handleMouseLeave}>
                    <div className="project-wrapper group" ref={project1Ref} onMouseEnter={() => handleProjectHover(1)}>
                        <div className="image-wrapper relative">
                            <img src="/images/project1.png" alt="Hivbnb" />
                            <a
                                href="https://hivbnb.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute top-4 right-4 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-black/10 backdrop-blur-md text-black opacity-100 xl:opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:scale-110"
                            >
                                <span className="text-xl">↗</span>
                            </a>
                        </div>
                        <div className="text-content">
                            <h2>Hivbnb</h2>
                        </div>
                        <div className="text-sm group-hover:text-white-50 group-hover:px-4 pb-5 transition-all duration-300">
                            <p>Hivbnb is a full-stack vacation rental platform inspired by Airbnb. Users can explore properties, book stays, save wishlists, and securely pay online. Hosts can list and manage properties, while admins can monitor listings and bookings through a dedicated dashboard.</p>
                        </div>
                    </div>

                    <div className="project-wrapper group mt-5 md:mt-0" ref={project2Ref} onMouseEnter={() => handleProjectHover(2)}>
                        <div className="image-wrapper relative">
                            <img src="/images/project2.png" alt="Prime Nova" />
                            <a
                                href="https://prime-novaa.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute top-4 right-4 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-black opacity-100 xl:opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:scale-110"
                            >
                                <span className="text-xl">↗</span>
                            </a>
                        </div>
                        <div className="text-content">
                            <h2>Prime Nova</h2>
                        </div>
                        <div className="text-sm group-hover:text-white-50 group-hover:px-4 pb-5 transition-all duration-300">
                            <p>Prime Nova is a full-stack MERN e-commerce platform designed for handcrafted products. The platform provides a seamless shopping experience with secure authentication, product management, shopping cart functionality, order tracking, and online payments through Razorpay.</p>
                        </div>
                    </div>

                    <div className="project-wrapper group mt-5 md:mt-0" ref={project3Ref} onMouseEnter={() => handleProjectHover(3)}>
                        <div className="image-wrapper relative">
                            <img src="/images/project3.png" alt="Rydo" />
                            <a
                                href="https://github.com/Rohandalal8/Rydo"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute top-4 right-4 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-black opacity-100 xl:opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:scale-110"
                            >
                                <span className="text-xl">↗</span>
                            </a>
                        </div>
                        <div className="text-content">
                            <h2>Rydo</h2>
                        </div>
                        <div className="text-sm group-hover:text-white-50 group-hover:px-4 pb-5 transition-all duration-300">
                            <p>Rydo is a full-stack ride-booking platform that allows users to book rides, choose pickup and drop-off locations, and manage their trips through a seamless and intuitive interface. It focuses on delivering a smooth, responsive, and user-friendly experience for everyday transportation.</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Projects;