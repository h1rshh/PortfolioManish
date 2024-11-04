'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Page = () => {
    const line1Ref = useRef(null);
    const line2Ref = useRef(null);
    const paragraphsRef = useRef([]);
    const buttonRef = useRef(null);
    const imageRef = useRef(null); // Ref for the image

    useEffect(() => {
        const tl = gsap.timeline();

        // Animate the h1 lines
        tl.fromTo(
            [line1Ref.current, line2Ref.current],
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: 0.5,
                stagger: 0.3,
                ease: "power3.out",
            }
        );

        // Animate the paragraphs and button
        tl.fromTo(
            [...paragraphsRef.current, buttonRef.current],
            { opacity: 0 },
            {
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
            },
            "-=0.5" // Start slightly earlier to sync with previous animation
        );

        // Animate the image to fade in after the content
        tl.fromTo(
            imageRef.current,
            { opacity: 0 }, // Start with opacity 0 and slide in from left
            {
                opacity: 1,
                x: 0,
                duration: 1.7,
                ease: "power4.out",
            }
        );
    }, []);

    return (
        <div className="flex flex-col md:flex-row items-center justify-between h-auto md:h-[80vh] relative font-sans">
            {/* Background Image with Blur */}
            <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url('https://img.freepik.com/free-photo/white-smooth-marble-textured-background_53876-108283.jpg')`,
                    filter: 'blur(0px)',
                    zIndex: -1,
                    opacity: 1,
                }}
            />

            {/* Left Side: Text Content */}
            <div className="w-full md:w-1/2 p-6 md:p-8 bg-transparent">
                <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 md:mb-6 text-black">
                    <span ref={line1Ref} className="inline-block underline">
                        Business Coaching Can
                    </span>
                    <br />
                    <span ref={line2Ref} className="inline-block underline text-white-500">
                        Change Everything.
                    </span>
                </h1>
                <p
                    ref={(el) => (paragraphsRef.current[0] = el)}
                    className="text-lg md:text-xl mb-1 md:mb-2 text-black"
                >
                    Ready to reach goals? Book a 30-minute call with our Expert.
                </p>
                <p
                    ref={(el) => (paragraphsRef.current[1] = el)}
                    className="text-lg md:text-xl mb-4 md:mb-6 text-black"
                >
                    Connect with the ideal coach and start creating your effective strategy.
                </p>

                <a href="https://docs.google.com/forms/d/e/1FAIpQLSchidQCxDP_d2F0AG3Xvo07aqXQGIHxDkXbcGpeUG4p_DUA_w/viewform?usp=sf_link">
                    <button
                        ref={buttonRef}
                        className="px-4 py-2 md:px-6 md:py-3 bg-[#bd9755] text-white font-semibold rounded-lg hover:bg-[#b3883e] transition-all transform hover:scale-105"
                    >
                        Schedule a Call
                    </button>
                </a>
            </div>

            {/* Right Side: Image Placeholder */}
            <div className="w-full md:w-1/2 h-full flex justify-center items-center md:mt-0 mt-4">
                <img 
                    ref={imageRef} // Reference for the image
                    src="/images/manish2-removebg-preview.png" 
                    alt="Business Coaching Image" 
                    className="h-full object-cover rounded-lg" 
                />
            </div>
        </div>
    );
};

export default Page;
