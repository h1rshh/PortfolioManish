import React from 'react';

const Page = () => {
    return (
        <header className="flex items-center justify-between p-4 bg-gray-100 font-sans">
            {/* Left side: Logo */}
            <div className="text-xl font-bold text-gray-800">#Manish</div>

            {/* Right side: Links and Button */}
            <div className="flex items-center space-x-6">
                {/* Links - Hidden on small screens */}
                <a href="#" className="hidden md:block text-gray-600 hover:text-gray-800">About</a>
                <a href="#" className="hidden md:block text-gray-600 hover:text-gray-800">Team</a>
                <a href="#" className="hidden md:block text-gray-600 hover:text-gray-800">Contact</a>
                
                {/* Button - Visible on all screen sizes */}
                <button className="px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all transform hover:scale-105">
                    Schedule a Call
                </button>
            </div>
        </header>
    );
}

export default Page;
