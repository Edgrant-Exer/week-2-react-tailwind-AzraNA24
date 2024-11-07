import React from 'react';
import Welcome from './Welcome';
import Resource from './Resource';
import Tracks from './Tracks';
import { useState } from 'react';


export default function Week2() {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const [counter3, setCounter3] = useState(0);

return (
    <div className="bg-[#e7f6ff] font-sans">
    <div className="container mx-auto max-w-[1140px] p-5">
    <Welcome />
    <Resource />

    <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Our Tracks</h1>
        <p className="text-[#12222b] font-light mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    </div>
    <div className="flex justify-center mt-8 space-x-10">
        <Tracks number= " 1" counter={() => setCounter1(counter1 + 1)}/>
        <Tracks number= " 2" counter={() => setCounter2(counter2 + 1)}/>
        <Tracks number= " 3" counter={() => setCounter3(counter3 + 1)}/>
    </div>
    <div className="text-center mt-5 mb-4">
        <p>Join Course 1: {counter1}</p>
        <p>Join Course 2: {counter2}</p>
        <p>Join Course 3: {counter3}</p>
    </div>
    </div>
    </div>
);
}
