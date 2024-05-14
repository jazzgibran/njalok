'use client'
import React, { useEffect, useState } from 'react'

function ScrollToTopButton() {
    const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        // Show the button when the user scrolls down
        if (window.scrollY > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        // Add scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <button
            className={`hover:text-white hover:bg-black animate-bounce fixed -bottom-10 left-0 right-0 w-fit px-3 py-1 mx-auto text-black bg-white rounded-full mb-[71px] z-50 items-center gap-2 ${isVisible ? '' : 'hidden'}`}
            onClick={scrollToTop}
        >
            <p className='font-cinzel font-bold '>Back to Top</p>
        </button>
    )
}

export default ScrollToTopButton
