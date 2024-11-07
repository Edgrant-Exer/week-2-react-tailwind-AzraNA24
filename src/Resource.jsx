import React from "react";

function Resource() {
    return(
        <div className="bg-[#527182] text-white p-10 rounded-lg flex flex-wrap gap-5 justify-around mb-10">
        <div className="flex items-center gap-4 p-5 bg-[#758d9b] rounded-lg shadow-lg w-[30%]">
            <img src="src/assets/2.png" alt="JavaScript + Git" className="w-20 h-20 rounded-lg" />
            <div>
                <h3 className="text-lg font-semibold">JavaScript + Git</h3>
                <p className="text-[#ccdee8] text-sm mt-2">Mempelajari dasar-dasar JavaScript dengan materi tambahan git.</p>
            </div>
        </div>
        <div className="flex items-center gap-4 p-5 bg-[#758d9b] rounded-lg shadow-lg w-[30%]">
            <img src="src/assets/3.png" alt="Frontend Basic" className="w-20 h-20 rounded-lg" />
            <div>
                <h3 className="text-lg font-semibold">Frontend Basic</h3>
                <p className="text-[#ccdee8] text-sm mt-2">Mempelajari HTML dan CSS dengan fokus dalam pembuatan layout website.</p>
            </div>
        </div>
        <div className="flex items-center gap-4 p-5 bg-[#758d9b] rounded-lg shadow-lg w-[30%]">
            <img src="src/assets/4.png" alt="React + Tailwind" className="w-20 h-20 rounded-lg" />
            <div>
                <h3 className="text-lg font-semibold">React + Tailwind</h3>
                <p className="text-[#ccdee8] text-sm mt-2">Mempelajari tools yang digunakan dalam pembuatan website modern.</p>
            </div>
        </div>
            <a href="#" className="bg-[#0d2734] text-white font-bold rounded-full py-3 px-8 mt-8 inline-block hover:scale-110 transition-transform">
                View Resources
            </a>
        </div>
    );
    
}

export default Resource;