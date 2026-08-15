import GlowCard from "../components/GlowCard.tsx";
import { expCards } from "../constants/index.tsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Achievements = () => {
    useGSAP(() => {
        gsap.utils.toArray(".timeline-card").forEach((card: any) => {
        gsap.from(card, {
            xPercent: -100,
            opacity: 0,
            transformOrigin: "left left",
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: card,
                start: "top 80%"
            },
        })
        })

        gsap.to(".timeline", {
            transformOrigin: "bottom bottom",
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: ".timeline",
                start: "top center",
                end: "70% center",
                onUpdate: (self) => {
                    gsap.to(".timeline", {
                        scaleY: 1 - self.progress,
                    });
                },
        },
    })

    gsap.utils.toArray(".expText").forEach((text: any) => {
        gsap.from(text, {
            xPercent: 0,
            opacity: 0,
            duration: 1,
            ease: "power2.inOut",
            scrollTrigger: {
                trigger: text,
                start: "top 60%"
            },
        })
        })
    }, []);

    return (
        <section id="achievements" className="flex-center md:mt-40 mt-20 section-padding xl:px-0">
            <div className="w-full h-full pt-10 xl:pt-20 px-5 xl:px-40">
                <p className="text-blue-100 flex justify-center items-center font-semibold md:text-5xl text-3xl text-center tracking-[0.05em] uppercase relative w-fit mx-auto pb-3 after:content-[''] after:absolute after:left-1/2 after:-bottom-1 after:-translate-x-1/2 after:w-16 after:h-[2px] after:bg-gradient-to-r after:from-transparent after:via-indigo-400 after:to-transparent after:shadow-[0_0_12px_rgba(99,102,241,0.8)] ">
                        ACHIEVEMENTS
                    </p>
                <div className="mt-12 relative">
                    <div className="relative z-50 xl:space-y-32 space-y-10">
                        {expCards.map((card, index) => (
                            <div key={card.college} className="exp-card-wrapper">
                                <div className="xl:w-2/6 z-35">
                                    <GlowCard card={{ ...card, date: Number(card.date) }} index={index} />
                                </div>
                                <div className="xl:w-4/6">
                                    <div className="flex items-start">
                                        <div className="timeline-wrapper">
                                            <div className="timeline" />
                                            <div className="gradient-line w-1 h-full" />
                                        </div>
                                        <div className="flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                                            <div className="timeline-logo">
                                                <img src={card.imgPath} alt={card.college} className="w-full h-full object-cover rounded-full"/>
                                            </div>
                                            <div>
                                                <h3 className="expText text-xl font-bold text-white-50 md:pt-3">{card.about}</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Achievements