import React from 'react';
import { MdBusinessCenter } from "react-icons/md";
import { FaUserTie } from "react-icons/fa6";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaUserClock } from "react-icons/fa";
import { LuScrollText } from "react-icons/lu";
import { GiStairsGoal } from "react-icons/gi";

const Page = () => {
    return (
        <>
            {/* Main Wrapper with Solid Gray Background */}
            <div className="bg-gray-100 min-h-screen py-8"> {/* Changed to solid gray background */}
                {/* Centered Heading */}
                <div className="flex flex-col items-center mt-8">
                    <h1 className="text-4xl font-bold text-center mb-8">Our Coaching Solution</h1>
                </div>

                {/* Grid Section for Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
                    {/* Card 1 */}
                    <div className="max-w-sm bg-white rounded-lg shadow-lg p-6 mx-auto hover:scale-105 transition-transform duration-300">
                        <div className="flex justify-center mb-4">
                            <div className="p-4 bg-gray-100 rounded-full">
                                <MdBusinessCenter className='h-12 w-12 text-gray-600' />
                            </div>
                        </div>
                        <h1 className="text-xl font-semibold text-center mb-2">Business Coaching</h1>
                        <p className="text-gray-600 text-center">
                            Business coaching has the ability to improve the performance of your business. We offer top-class business coaching from experienced experts who have succeeded in real life.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="max-w-sm bg-white rounded-lg shadow-lg p-6 mx-auto hover:scale-105 transition-transform duration-300">
                        <div className="flex justify-center mb-4">
                            <div className="p-4 bg-gray-100 rounded-full">
                                <FaUserTie className='h-12 w-12 text-gray-600' />
                            </div>
                        </div>
                        <h1 className="text-xl font-semibold text-center mb-2">Executive Coaching</h1>
                        <p className="text-gray-600 text-center">
                            Business coaching has the ability to improve the performance of your business. We offer top-class business coaching from experienced experts who have succeeded in real life.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="max-w-sm bg-white rounded-lg shadow-lg p-6 mx-auto hover:scale-105 transition-transform duration-300">
                        <div className="flex justify-center mb-4">
                            <div className="p-4 bg-gray-100 rounded-full">
                                <HiMiniUserGroup className='h-12 w-12 text-gray-600' />
                            </div>
                        </div>
                        <h1 className="text-xl font-semibold text-center mb-2">Leadership Coaching</h1>
                        <p className="text-gray-600 text-center">
                            Business coaching has the ability to improve the performance of your business. We offer top-class business coaching from experienced experts who have succeeded in real life.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="max-w-sm bg-white rounded-lg shadow-lg p-6 mx-auto hover:scale-105 transition-transform duration-300">
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
                    <div className="max-w-sm bg-white rounded-lg shadow-lg p-6 mx-auto hover:scale-105 transition-transform duration-300">
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
                    <div className="max-w-sm bg-white rounded-lg shadow-lg p-6 mx-auto hover:scale-105 transition-transform duration-300">
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
