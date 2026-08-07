import { useState } from "react";
import { words } from "../constants/index.ts";
import Button from "../components/Button.tsx";

const Hero = () => {
    const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)");

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;

        setTransform(
            `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
        );
    };

    const handleMouseLeave = () => {
        setTransform(
            "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)"
        );
    };

    return (
        <section id="hero" className="relative overflow-hidden">
            <div className="absolute top-0 left-0 z-10">
                <img src="/images/bg.png" alt="background" />
            </div>

            <div className="hero-layout flex flex-col md:flex-row items-center justify-center gap-8 md:gap-6">
                <header className="flex flex-col justify-center md:w-[55%] px-5 md:px-10">
                    <div className="flex flex-col gap-7">
                        <div className="hero-text">
                            <h1>Shaping
                                <span className="slide">
                                    <span className="wrapper">
                                        {words.map((word) => (
                                            <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2">
                                                <img src={word.imgPath} alt={word.text} className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50" />
                                                <span>{word.text}</span>
                                            </span>
                                        ))}
                                    </span>
                                </span>
                            </h1>
                            <h1>into Real Projects</h1>
                            <h1>that Deliver Results</h1>
                        </div>
                        <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                            Hi, I'm Rohan, a Full Stack Developer with a passion for crafting innovative digital experiences.
                        </p>
                        <Button className="md:w-80 md:h-16 w-60 h-12" id="button" text="See My Work" />
                    </div>
                </header>

                <figure className="flex items-center justify-center w-full md:w-[40%] px-5">
                    <div className="animated-card relative w-full h-[380px] md:w-[350px] md:h-[470px] rounded-xl hover:shadow-[0_0_30px_rgba(99,102,241,0.35)]"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        style={{
                            transform,
                            transition: "transform 0.15s ease-out",
                        }}
                    >
                        <img src="/images/rohan.jpeg" alt="3d" className="w-full h-full object-cover rounded-xl" />
                    </div>
                </figure>
            </div>
        </section>
    )
}

export default Hero