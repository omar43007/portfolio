import React from "react";
import Logo from"../assets/visual-studio.svg"

function Navbar() {
  return (
    <div className="flex-shrink-0">
      <div className="w-full h-8 bg-[#201a2c] flex justify-between items-center">
        <ul className="flex list-none gap-4 text-[12px] px-2 py-1 text-gray-400">
          <li><img src={Logo} alt="logo" className="w-5 h-5" /></li>
          <li>File</li>
          <li>Edit</li>
          <li>Selection</li>
          <li>View</li>
          <li>Go</li>
          <li>Run</li>
          <li>Terminal</li>
          <li>Help</li>
        </ul>
        <div className="mr-24">
          <p className="text-white font-bold">Omar AL-Ali Portfolio</p>
        </div>
        <div className="flex justify-between items-center gap-3 mr-2">
          <div className="w-5 h-5 rounded-2xl bg-yellow-400"></div>
          <div className="w-5 h-5 rounded-2xl bg-green-400"></div>
          <div className="w-5 h-5 rounded-2xl bg-red-400"></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
