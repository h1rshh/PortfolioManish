import React from 'react';

const Page = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between h-auto md:h-[80vh] relative font-sans">
            {/* Background Image with Blur */}
            <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url('https://img.freepik.com/free-photo/white-smooth-marble-textured-background_53876-108283.jpg')`,
                    filter: 'blur(0px)',
                    zIndex: -1, // Place it behind other content
                    opacity: 1, // Ensure the image is fully visible
                }}
            />

            {/* Left Side: Text Content */}
            <div className="w-full md:w-1/2 p-6 md:p-8 bg-transparent">
                <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 md:mb-6 text-black">
                    Business Coaching Can <br />
                    <span className="text-white-500 underline">Change Everything</span>
                </h1>
                <p className="text-lg md:text-xl mb-1 md:mb-2 text-black">
                    Ready to reach goals? Book a 30-minute call with our Top Coaches.
                </p>
                <p className="text-lg md:text-xl mb-4 md:mb-6 text-black">
                    Connect with the ideal coach and start creating your effective strategy.
                </p>

                <button className="px-4 py-2 md:px-6 md:py-3 bg-[#bd9755] text-white font-semibold rounded-lg hover:bg-[#b3883e] transition-all transform hover:scale-105">
                    Schedule a Call
                </button>
            </div>

            {/* Right Side: Image Placeholder */}
            <div className="w-full md:w-1/2 h-full flex justify-center items-center md:mt-0 mt-4">
                <img 
                    src="/images/manish2-removebg-preview.png" 
                    alt="Business Coaching Image" 
                    className="h-full object-cover rounded-lg" // Set the image height to full
                />
            </div>
        </div>
    );
};

export default Page;
