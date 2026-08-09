import { counterItems } from '../constants/index.ts';
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
    const counterRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(counterRef.current, 
            { y: 100, opacity: 0 }, 
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: counterRef.current,
                    start: "top bottom-=1",
                    toggleActions: "play none none none",
                },
            }
        );
    }, []);
    return (
        <div id="counter" ref={counterRef} className="padding-x-sm my-22">
            <div className="grid-4-cols ">
                {counterItems.map((item) => (
                    <div className="counter-item group rounded-lg p-10 flex flex-col justify-center bg-[#6366f1]/5 shadow-[15px_15px_30px_rgb(25,25,25,0.1),_-15px_-15px_30px_rgb(60,60,60,0.1)]">
                        <div key={item.label} className="counter-number text-white-50 text-3xl font-bold mb-1 group-hover:text-[#6366f1] transition-colors duration-300">
                            {item.value} {item.suffix}
                        </div>
                        <div className="text-blue-50 text-sm">
                            {item.label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AnimatedCounter