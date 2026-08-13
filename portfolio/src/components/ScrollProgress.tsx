import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const ScrollProgress = () => {
    const progressRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const updateProgress = () => {
            const scrollTop = window.scrollY;

            const scrollHeight =
                document.documentElement.scrollHeight - window.innerHeight;

            const progress =
                scrollHeight > 0 ? scrollTop / scrollHeight : 0;

            gsap.to(progressRef.current, {
                height: `${progress * 100}%`,
                duration: 0.15,
                ease: "power1.out",
                overwrite: true,
            });
        };

        window.addEventListener("scroll", updateProgress);
        window.addEventListener("resize", updateProgress);

        // Initial position
        updateProgress();

        return () => {
            window.removeEventListener("scroll", updateProgress);
            window.removeEventListener("resize", updateProgress);
        };
    });

    return (
        <div
            className="
                hidden md:block
                fixed
                right-6
                top-1/2
                -translate-y-1/2
                z-[9999]
                w-[5px]
                h-[100px]
                rounded-full
                bg-white/10
                overflow-hidden
            "
        >
            <div
                ref={progressRef}
                className="
                    absolute
                    top-0
                    left-0
                    w-full
                    h-0
                    rounded-full
                    bg-gradient-to-b
                    from-blue-400
                    via-indigo-500
                    to-purple-500
                    shadow-[0_0_8px_rgba(99,102,241,0.8)]
                "
            />
        </div>
    );
};

export default ScrollProgress;