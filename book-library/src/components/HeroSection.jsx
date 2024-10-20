import React from 'react'
import screenshot from '../assets/book library screenshot.png';

function HeroSection() {
    return (
        <div className="w-full flex flex-col items-center h-auto bg-gray-200 sm:flex-row sm:justify-around sm:px-24 sm:pb-16 sm:pt-16">
            <div className="flex flex-col items-center sm:flex sm:flex-col md:items-start">
                <h1 className="font-semibold text-xl text-center mt-10 leading-7 sm:text-3xl sm:text-start sm:mt-0 sm:w-96" >Find some of your favourite books</h1>
                <p className="font-normal text-xl text-center mt-2 sm:text-xl">Delight in classics</p>
                <button className="px-3 py-1 rounded-3xl font-medium text-l text-center text-white mt-3 bg-green-700 hover:bg-green-800 transition-all duration-300">View books</button>
            </div>
            <img src={screenshot}  alt="Screenshot of the book library website" className="w-full h-auto mt-7 max-w-xs mb-14 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl border-2 border-red-50 sm:mb-0 sm:h-auto object-contain" />
        </div>
    );
}

export default HeroSection