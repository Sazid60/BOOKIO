import { useState, useEffect } from 'react';

const PromoSection = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const calculateTimeLeft = () => {
        const targetDate = new Date('2024-12-31T23:59:59').getTime();
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });
        } else {
            setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        }
    };

    useEffect(() => {
        const timer = setInterval(() => calculateTimeLeft(), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="bg-[url('/Promo-BG.jpg')] py-12 bg-fixed">
            <div className="container mx-auto text-center px-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 leading-snug">
                    Get Special Promo <br /> All Books Are <span className='text-indigo-500'>50%</span> Off Now!
                </h2>

                <div className="flex justify-center space-x-6 mb-8">
                    {Object.entries(timeLeft).map(([unit, value], idx) => (
                        <div key={idx} className="text-center">
                            <div className="w-20 h-20 border border-black  text-black flex items-center justify-center rounded-full text-3xl font-semibold">
                                {value}
                            </div>
                            <div className="text-sm text-gray-600 capitalize mt- shadow-2xl">{unit}</div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center space-x-6">
                    <a
                        href="#"
                        className="relative inline-block text-lg font-medium text-gray-900 py-3 px-8 border border-gray-900  hover:shadow-2xl hover:text-indigo-500 transition duration-300"
                    >
                        Explore Now
                    </a>
                    <a
                        href="#"
                        className="flex items-center space-x-2 text-lg font-medium text-gray-900 hover:underline transition duration-300"
                    >
                        <span>Read More</span>
                        <i className="jki jki-arrow-right-line" aria-hidden="true"></i>
                    </a>
                </div>

            </div>
        </div>
    );
};

export default PromoSection;
