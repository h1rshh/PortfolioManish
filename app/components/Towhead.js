'use client';
import React, { useState, useRef } from 'react';

const Page = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);

    const toggleDropdown = () => {
        setIsDropdownOpen(prevState => !prevState);
    };

    return (
        <header className="relative flex items-center justify-between p-4 bg-gradient-to-r from-black to-gray-800 font-sans">
            {/* Dropdown Button (for mobile) */}
            <button 
                ref={buttonRef}
                id="dropdownMenuIconButton" 
                onClick={toggleDropdown} 
                className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 md:hidden" 
                type="button"
            >
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 4 15">
                    <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
                </svg>
            </button>

            {/* Left side: Links - hidden on mobile */}
            <div className="hidden md:flex items-center space-x-12 ml-3 font-bold">
                <a href="#solution" className="text-gray-200 hover:text-white">Coaching</a>
                <a href="#hero" className="text-gray-200 hover:text-white">About</a>
                <a href="#testimonial" className="text-gray-200 hover:text-white">Clients</a>
                <a href="#footer" className="text-gray-200 hover:text-white">Contact</a>
            </div>

            {/* Dropdown Menu */}
            <div 
                ref={dropdownRef}
                style={{
                    position: 'absolute',
                    left: buttonRef.current ? buttonRef.current.getBoundingClientRect().left : 0,
                    top: buttonRef.current ? buttonRef.current.getBoundingClientRect().bottom : 0,
                }}
                className={`z-10 w-36 max-w-xs bg-white divide-y divide-gray-100 rounded-lg shadow transition-transform duration-300 ease-in-out transform ${isDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
            >
                <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownMenuIconHorizontalButton">
                    <li>
                        <a href="#hero" className="block px-4 py-2 hover:bg-gray-100">About</a>
                    </li>
                    <li>
                        <a href="#solution" className="block px-4 py-2 hover:bg-gray-100">Coaching</a>
                    </li>
                    <li>
                        <a href="#testimonial" className="block px-4 py-2 hover:bg-gray-100">Clients</a>
                    </li>
                    <li>
                        <a href="#footer" className="block px-4 py-2 hover:bg-gray-100">Contact</a>
                    </li>
                </ul>
            </div>

            {/* Right side: Button (for mobile) */}
            <div className="md:hidden ml-auto">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSchidQCxDP_d2F0AG3Xvo07aqXQGIHxDkXbcGpeUG4p_DUA_w/viewform?usp=sf_link">
                    <button className="px-4 py-2 bg-white text-black font-semibold rounded-lg hover:bg-white transition-all transform hover:scale-105 mr-4">
                        Schedule a Call
                    </button>
                </a>
            </div>

            {/* Right side: Button (for desktop) */}
            <div className="hidden md:block">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSchidQCxDP_d2F0AG3Xvo07aqXQGIHxDkXbcGpeUG4p_DUA_w/viewform?usp=sf_link">
                    <button className="px-4 py-2 bg-white text-black font-semibold rounded-lg hover:bg-white transition-all transform hover:scale-105 mr-4">
                        Schedule a Call
                    </button>
                </a>
            </div>
        </header>
    );
}

export default Page;
