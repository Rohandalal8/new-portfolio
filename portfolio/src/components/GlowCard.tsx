import { useRef, type ReactNode, type MouseEvent } from "react";

interface Card {
    college: string;
    title: string;
    date: number;
    description: string;
    [key: string]: unknown;
}

interface GlowCardProps {
    card: Card;
    children?: ReactNode;
    index: number;
}


const GlowCard = ({ card, children, index }: GlowCardProps) => {
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    const handleMOuseMove = (index: number) => (e: MouseEvent<HTMLDivElement>) => {
        const card = cardRefs.current[index];
        if(!card) return;

        // Get the mouse position relative to card
        const rect = card.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // calculate the angle from the center of the card 
        let angle = Math.atan2(mouseY - centerY, mouseX - centerX) * (180 / Math.PI);

        angle = (angle + 360) % 360; // Normalize angle to be between 0 and 360
        const borderAngle = angle + 80;
        card.style.setProperty('--angle', `${borderAngle}deg`);
    }

    return (
        <div ref={(el) => { cardRefs.current[index] = el; }} onMouseMove={handleMOuseMove(index)} className="card-bordr timeline-card rounded-xl p-5">
            <div className="glow" />
                
                <div className="mb-5">
                    <p className="text-white text-lg mb-2">{card.college}</p>
                    <h2 className="text-[#6366f1] text-xl font-bold">{card.title}</h2>
                    <p className="text-white mb-3">{card.date}</p>
                    <p className="text-white-50 text-sm">{card.description}</p>
                </div>
                {children}
        </div>
    )
}

export default GlowCard