import React from 'react';

const Page = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row items-center justify-between h-auto md:h-screen bg-gray-100">
            {/* Left Side: Text Content */}
            <div className="w-full md:w-1/2 p-6 md:p-8">
                <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4 md:mb-6">
                    Business Coaching Can <br />
                    <span className="text-orange-500">Change Everything</span>
                </h1>
                <p className="text-lg md:text-xl mb-1 md:mb-2">
                    Ready to reach goals? Book a 30-minute call with our Top Coaches.
                </p>
                <p className="text-lg md:text-xl mb-4 md:mb-6">
                    Connect with the ideal coach and start creating your effective strategy.
                </p>

                <button className="px-4 py-2 md:px-6 md:py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all transform hover:scale-105">
                    Schedule a Call
                </button>
            </div>

            {/* Right Side: Image Placeholder */}
            <div className="w-full md:w-1/2 h-64 md:h-full bg-gray-100 flex justify-center items-center">
    <img 
        src="https://t3.ftcdn.net/jpg/09/01/87/22/360_F_901872268_jdO7ZAWv4Xm4auBdJyAPFi6hlSG5GxRz.jpg" 
        alt="Business Coaching Image" 
        className="h-48 md:h-3/4 object-cover rounded-lg" 
    />
</div>

        </div>
    );
};

export default Page;
