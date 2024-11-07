import React from 'react';

export default function Tracks(props) {
return (
    <div className="flex flex-wrap justify-around mt-5 space-y-5 md:space-y-0">
        <div key="1" className="bg-white shadow-lg rounded-lg p-5 w-[300px] text-center">
        <img
            src="https://images.unsplash.com/photo-1428606381429-22224991fb0c" alt="UI/UX Design" className="w-full h-[200px] rounded-lg mb-5"/>
        <p className="font-semibold text-gray-700">UI/UX Design</p>
        <h4 className="text-lg font-bold mt-1">UI/UX Design for Beginners</h4>
        <h4 className="text-lg font-bold text-gray-800">$98</h4>
        <div className="flex justify-around text-sm text-gray-500 italic mt-5">
            <p>22h 30m</p>
            <p>34 courses</p>
            <p>250 sales</p>
        </div >
        <div className="text-center mt-6">    
            <button onClick={props.counter} className=" bg-gray-800 text-white font-bold rounded-lg px-4 py-2 mt-5 transform transition-transform hover:scale-110">
                Join Course{props.number}
            </button>
        </div>
        </div>
    </div>
);
};
