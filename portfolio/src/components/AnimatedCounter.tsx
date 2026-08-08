import { counterItems } from '../constants/index.ts';

const AnimatedCounter = () => {
    return (
        <div id="counter" className="padding-x-sm my-22">
            <div className="grid-4-cols ">
                {counterItems.map((item) => (
                    <div className="bg-[#6366f1]/10 rounded-lg p-10 flex flex-col justify-center">
                        <div key={item.label} className="counter-number text-white-50 text-3xl font-bold mb-1 hover:text-[#6366f1] transition-colors duration-300">
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