import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "../navbar.css";

gsap.registerPlugin(useGSAP);

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navRef = useRef<HTMLElement | null>(null);
    const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        const nav = navRef.current;

        if (!nav) return;

        // Initial position
        gsap.set(nav, {
            top: 20,
            right: 30,
            left: "auto",
            xPercent: 0,
            opacity: 1,
        });

        const moveNavbar = () => {
            const isTop = window.scrollY < 50;
            const isXL = window.matchMedia("(min-width: 1280px)").matches;

            if (isXL) {
                gsap.to(nav, {
                    top: 20,
                    right: isTop ? 30 : "50%",
                    left: isTop ? "auto" : "50%",
                    xPercent: isTop ? 0 : -62,
                    duration: 0.7,
                    ease: "power3.out",
                });
            }
        };

        const showNavbar = () => {
            gsap.to(nav, {
                opacity: 1,
                y: 0,
                duration: 0.35,
                ease: "power2.out",
            });
        };


        const resetHideTimer = () => {
            showNavbar();

            if (hideTimer.current) {
                clearTimeout(hideTimer.current);
            }

            hideTimer.current = setTimeout(() => {
                gsap.to(nav, {
                    opacity: 0,
                    y: -20,
                    duration: 0.5,
                    ease: "power2.out",
                });
            }, 3000);
        };

        const handleScroll = () => {
            moveNavbar();
            resetHideTimer();
        };

        const handleActivity = () => {
            resetHideTimer();
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("mousemove", handleActivity);
        window.addEventListener("click", handleActivity);
        window.addEventListener("keydown", handleActivity);
        window.addEventListener("touchstart", handleActivity);

        // Start timer
        resetHideTimer();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("mousemove", handleActivity);
            window.removeEventListener("click", handleActivity);
            window.removeEventListener("keydown", handleActivity);
            window.removeEventListener("touchstart", handleActivity);

            if (hideTimer.current) {
                clearTimeout(hideTimer.current);
            }
        };
    }, []);

    return (
        <header className="navbar">
            <div className="inner">
                <a className="logo" href="#hero">
                    <div className="logo-animate">
                        <img src="/images/logo.png" alt="Rohan" className="logo-image xl:size-12 size-8" />
                        <div className="logo-scan" />
                    </div>
                </a>
                <nav className="desktop" ref={navRef}>
                    <ul>
                        <li>
                            <div className="btn-wrapper">
                                <a href="#about">
                                    <button className="btn">
                                        <div className="txt-wrapper w-13">
                                            <div className="txt-1">
                                                <span className="btn-letter">A</span>
                                                <span className="btn-letter">b</span>
                                                <span className="btn-letter">o</span>
                                                <span className="btn-letter">u</span>
                                                <span className="btn-letter">t</span>
                                            </div>
                                            <div className="txt-2">
                                                <span className="btn-letter">A</span>
                                                <span className="btn-letter">b</span>
                                                <span className="btn-letter">o</span>
                                                <span className="btn-letter">u</span>
                                                <span className="btn-letter">t</span>
                                            </div>
                                        </div>
                                    </button>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="btn-wrapper">
                                <a href="#projects">
                                    <button className="btn">
                                        <div className="txt-wrapper w-16">
                                            <div className="txt-1">
                                                <span className="btn-letter">P</span>
                                                <span className="btn-letter">r</span>
                                                <span className="btn-letter">o</span>
                                                <span className="btn-letter">j</span>
                                                <span className="btn-letter">e</span>
                                                <span className="btn-letter">c</span>
                                                <span className="btn-letter">t</span>
                                                <span className="btn-letter">s</span>
                                            </div>
                                            <div className="txt-2">
                                                <span className="btn-letter">P</span>
                                                <span className="btn-letter">r</span>
                                                <span className="btn-letter">o</span>
                                                <span className="btn-letter">j</span>
                                                <span className="btn-letter">e</span>
                                                <span className="btn-letter">c</span>
                                                <span className="btn-letter">t</span>
                                                <span className="btn-letter">s</span>
                                            </div>
                                        </div>
                                    </button>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="btn-wrapper">
                                <a href="#skills">
                                    <button className="btn">
                                        <div className="txt-wrapper w-11">
                                            <div className="txt-1">
                                                <span className="btn-letter">S</span>
                                                <span className="btn-letter">k</span>
                                                <span className="btn-letter">i</span>
                                                <span className="btn-letter">l</span>
                                                <span className="btn-letter">l</span>
                                                <span className="btn-letter">s</span>
                                            </div>
                                            <div className="txt-2">
                                                <span className="btn-letter">S</span>
                                                <span className="btn-letter">k</span>
                                                <span className="btn-letter">i</span>
                                                <span className="btn-letter">l</span>
                                                <span className="btn-letter">l</span>
                                                <span className="btn-letter">s</span>
                                            </div>
                                        </div>
                                    </button>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="btn-wrapper">
                                <a href="#achievements">
                                    <button className="btn">
                                        <div className="txt-wrapper w-27">
                                            <div className="txt-1">
                                                <span className="btn-letter">A</span>
                                                <span className="btn-letter">c</span>
                                                <span className="btn-letter">h</span>
                                                <span className="btn-letter">i</span>
                                                <span className="btn-letter">e</span>
                                                <span className="btn-letter">v</span>
                                                <span className="btn-letter">e</span>
                                                <span className="btn-letter">m</span>
                                                <span className="btn-letter">e</span>
                                                <span className="btn-letter">n</span>
                                                <span className="btn-letter">t</span>
                                                <span className="btn-letter">s</span>
                                            </div>
                                            <div className="txt-2">
                                                <span className="btn-letter">A</span>
                                                <span className="btn-letter">c</span>
                                                <span className="btn-letter">h</span>
                                                <span className="btn-letter">i</span>
                                                <span className="btn-letter">e</span>
                                                <span className="btn-letter">v</span>
                                                <span className="btn-letter">e</span>
                                                <span className="btn-letter">m</span>
                                                <span className="btn-letter">e</span>
                                                <span className="btn-letter">n</span>
                                                <span className="btn-letter">t</span>
                                                <span className="btn-letter">s</span>
                                            </div>
                                        </div>
                                    </button>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="btn-wrapper">
                                <a href="#contact">
                                    <button className="btn">
                                        <div className="txt-wrapper w-16">
                                            <div className="txt-1">
                                                <span className="btn-letter">C</span>
                                                <span className="btn-letter">o</span>
                                                <span className="btn-letter">n</span>
                                                <span className="btn-letter">t</span>
                                                <span className="btn-letter">a</span>
                                                <span className="btn-letter">c</span>
                                                <span className="btn-letter">t</span>
                                            </div>
                                            <div className="txt-2">
                                                <span className="btn-letter">C</span>
                                                <span className="btn-letter">o</span>
                                                <span className="btn-letter">n</span>
                                                <span className="btn-letter">t</span>
                                                <span className="btn-letter">a</span>
                                                <span className="btn-letter">c</span>
                                                <span className="btn-letter">t</span>
                                            </div>
                                        </div>
                                    </button>
                                </a>
                            </div>
                        </li>
                    </ul>
                </nav>
                <button
                    className={`mobile-menu-btn ${isOpen ? "open" : ""}`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                    <span></span>
                    <span></span>
                </button>
            </div>
            {/* MOBILE OVERLAY */}
            <div
                className={`mobile-overlay ${isOpen ? "active" : ""}`}
                onClick={() => setIsOpen(false)}
            />

            {/* MOBILE SIDEBAR */}
            <aside className={`mobile-sidebar ${isOpen ? "active" : ""}`}>
                <div className="sidebar-header">
                    <span>MENU</span>
                </div>
                <nav className="mobile-nav">
                    <a href="#about" onClick={() => setIsOpen(false)}>About</a>
                    <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
                    <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
                    <a href="#achievements" onClick={() => setIsOpen(false)}>Achievements</a>
                    <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
                </nav>

                <div className="sidebar-header">
                    <span>SOCIAL</span>
                </div>
                <nav className="mobile-nav">
                    <a href="https://github.com/rohan" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>Github</a>
                    <a href="https://linkedin.com/in/rohan" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>LinkedIn</a>
                    <a href="https://instagram.com/rohan" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>Instagram</a>
                    <a href="https://x.com/rohan" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>X</a>
                </nav>
            </aside>
        </header>
    )
}

export default Navbar