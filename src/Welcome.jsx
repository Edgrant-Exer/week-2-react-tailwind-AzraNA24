import React from 'react';

function Welcome() {
    return (
        <div className="flex justify-between items-center bg-white p-6 rounded-lg shadow-md mb-10">
        <div className="p-8">
            <h1 className="text-4xl font-bold leading-tight">Welcome to Internship Exercise</h1>
            <h1 className="text-4xl font-extrabold text-[#0d2734] mt-0">Front End</h1>
            <p className="text-[#527182] mt-4">
                Website ini dibuat oleh Azra sebagai sarana pembelajaran Front End. Terdapat sumber belajar dan juga
                website ini sendiri dapat jadi sumber belajar. Kode website disediakan pada button berikut.
            </p>
            <a href="#" className="bg-[#0d2734] text-white font-bold rounded-full py-2 px-5 mt-8 inline-block hover:scale-110 transition-transform">
                Repository
            </a>
        </div>
        <div className="p-8">
            <img src="src/assets/1.png" alt="Welcome" className="w-[800px] h-[300px] rounded-lg hover:scale-110 transition-transform" />
        </div>
    </div>
);
}

export default Welcome;