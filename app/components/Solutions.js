'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MdBusinessCenter } from "react-icons/md";
import { FaUserTie } from "react-icons/fa6";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaUserClock } from "react-icons/fa";
import { LuScrollText } from "react-icons/lu";
import { GiStairsGoal } from "react-icons/gi";
import { IoBookSharp } from "react-icons/io5";

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
    const headingRef = useRef(null);
    const gridRef = useRef(null);

    useEffect(() => {
        // Animate heading when it enters the viewport
        gsap.fromTo(
            headingRef.current,
            { opacity: 0, y: -50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
            }
        );

        // Animate entire grid when it enters the viewport
        gsap.fromTo(
            gridRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
            }
        );
    }, []);

    return (
        <>
            {/* Main Wrapper with Solid Gray Background */}
            <div className="bg-gray-100 min-h-screen py-8 font-sans">
                {/* Centered Heading */}
                <div className="flex flex-col items-center mt-8">
                    <h1 ref={headingRef} className="text-4xl font-bold text-center mb-8 underline">Discover Our Expertise</h1>
                </div>

                {/* Grid Section for Cards */}
                <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
                    {/* Card 1 */}
                    <div className="w-full bg-white rounded-lg shadow-lg p-6 mx-auto flex flex-col justify-between hover:scale-105 transition-transform duration-300">
                        <div className="flex justify-center mb-4">
                            <div className="p-4 bg-gray-100 rounded-full">
                                <MdBusinessCenter className='h-12 w-12 text-gray-600' />
                            </div>
                        </div>
                        <h1 className="text-xl font-semibold text-center mb-2">Work</h1>
                        <p className="text-gray-600 text-center">
                            Kreate Energy India Pvt Ltd <br />
                            Vibrant Solar <br />
                            AMP Engineers <br />
                            Renosys Automation
                        </p>
                    </div>

                    {/* Remaining Cards */}
                    <div className="w-full bg-white rounded-lg shadow-lg p-6 mx-auto flex flex-col justify-between hover:scale-105 transition-transform duration-300">
                        <div className="flex justify-center mb-4">
                            <div className="p-4 bg-gray-100 rounded-full">
                                <FaUserTie className='h-12 w-12 text-gray-600' />
                            </div>
                        </div>
                        <h1 className="text-xl font-semibold text-center mb-2">Business</h1>
                        <p className="text-gray-600 text-center">
                            KKR Energy Solutions <br />
                            KKR Enterprises <br />
                            KKR Films <br /> 
                            House of Aslam <br /> 
                            Nutramids India <br /> 
                            Naswiz Retails Pvt Ltd 
                        </p>
                    </div>

                    {/* Continue with other cards following the same pattern */}
                    {/* Card 3 */}
                    <div className="w-full bg-white rounded-lg shadow-lg p-6 mx-auto flex flex-col justify-between hover:scale-105 transition-transform duration-300">
                        <div className="flex justify-center mb-4">
                            <div className="p-4 bg-gray-100 rounded-full">
                                <IoBookSharp className='h-12 w-12 text-gray-600' />
                            </div>
                        </div>
                        <h1 className="text-xl font-semibold text-center mb-2">Education</h1>
                        <p className="text-gray-600 text-center">
                            East & Coast American University <br /> 
                            ECB Rajasthan Technical University<br /> 
                            Marudhar Engineering College 
                        </p>
                    </div>

                      {/* Card 4 */}
                      <div className="w-full bg-white rounded-lg shadow-lg p-6 mx-auto flex flex-col justify-between hover:scale-105 transition-transform duration-300">
                        <div className="flex justify-center mb-4">
                            <div className="p-4 bg-gray-100 rounded-full">
                                <FaUserClock className='h-12 w-12 text-gray-600' />
                            </div>
                        </div>
                        <h1 className="text-xl font-semibold text-center mb-2">Accountability Coaching</h1>
                        <p className="text-gray-600 text-center">
                            Business coaching has the ability to improve the performance of your business. We offer top-class business coaching from experienced experts who have succeeded in real life.
                        </p>
                    </div>

                    {/* Card 5 */}
                    <div className="w-full bg-white rounded-lg shadow-lg p-6 mx-auto flex flex-col justify-between hover:scale-105 transition-transform duration-300">
                        <div className="flex justify-center mb-4">
                            <div className="p-4 bg-gray-100 rounded-full">
                                <LuScrollText className='h-12 w-12 text-gray-600' />
                            </div>
                        </div>
                        <h1 className="text-xl font-semibold text-center mb-2">Strategic Coaching</h1>
                        <p className="text-gray-600 text-center">
                            Business coaching has the ability to improve the performance of your business. We offer top-class business coaching from experienced experts who have succeeded in real life.
                        </p>
                    </div>

                     {/* Card 6 */}
                    <div className="w-full bg-white rounded-lg shadow-lg p-6 mx-auto flex flex-col justify-between hover:scale-105 transition-transform duration-300">
                        <div className="flex justify-center mb-4">
                            <div className="p-4 bg-gray-100 rounded-full">
                                <GiStairsGoal className='h-12 w-12 text-gray-600' />
                            </div>
                        </div>
                        <h1 className="text-xl font-semibold text-center mb-2">Career Coaching</h1>
                        <p className="text-gray-600 text-center">
                            Business coaching has the ability to improve the performance of your business. We offer top-class business coaching from experienced experts who have succeeded in real life.
                        </p>
                    </div>


                </div>
            </div>
        </>
    );
};

export default Page;
