import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Assurez-vous d'installer react-icons

const ScrollBtn = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {

            (window.scrollY >300) ? setIsVisible(true) : setIsVisible(false);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-5 right-5 bg-green-700 text-white p-3 rounded-full 
                    shadow-lg transition-opacity duration-300 hover:bg-slate-400 hover:text-white"
                >
                    <FaArrowUp />
                </button>
            )}
        </div>
    );
};

export default ScrollBtn;