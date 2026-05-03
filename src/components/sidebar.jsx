import React, { useState } from "react";
import { LuFiles, LuFileJson2 } from "react-icons/lu";
import { HiOutlineCodeBracket } from "react-icons/hi2";
import { MdOutlineEmail } from "react-icons/md";
import { IoMdSettings, IoIosArrowDown } from "react-icons/io";
import {
  FaUserCircle,
  FaSearch,
  FaGithub,
  FaHtml5,
  FaJs,
  FaCss3Alt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTabs } from "./TabsContext";

function Sidebar() {
  const { tabs, activateTab  } = useTabs();

  return (
    <div className="flex  min-h-0 w-65">
      <div className="w-12 bg-[#1a1025] flex flex-col items-center py-4 text-gray-400 text-2xl h-full">
        <div className="flex flex-col items-center gap-6 flex-1">
          <div className="text-white flex items-center gap-1 cursor-pointer hover:text-purple-300 transition">
            <div className="text-purple-400 font-bold">|</div>
            <LuFiles />
          </div>
          <FaSearch className="cursor-pointer hover:text-white transition" />
          <HiOutlineCodeBracket className="cursor-pointer hover:text-white transition" />
          <MdOutlineEmail className="cursor-pointer hover:text-white transition" />
          <FaGithub className="cursor-pointer hover:text-white transition" />
        </div>
        <div className="flex flex-col items-center gap-4 mt-auto">
          <FaUserCircle className="cursor-pointer hover:text-white transition" />
          <IoMdSettings className="cursor-pointer hover:text-white transition" />
        </div>
      </div>

      <div className="w-64 bg-[#201a2c] text-gray-300 flex flex-col h-full overflow-hidden">
        <div className="pt-5 px-3 text-sm font-semibold tracking-wide text-gray-400 flex-shrink-0">
          EXPLORER
        </div>

        <div className="mt-3 px-2 flex-1 overflow-y-auto">
          <div className="flex items-center gap-1 text-sm font-medium cursor-pointer hover:text-white transition">
            <IoIosArrowDown className="text-base" />
            <span>Portfolio</span>
          </div>

          <div className="ml-5 mt-1 space-y-1">
            {tabs.map((file) => (
              <Link
                onClick={() => activateTab(file.id)}
                key={file.id}
                to={`${file.path}`}
                className={`flex items-center gap-2 px-2 py-0.5 rounded-md text-sm cursor-pointer hover:bg-[#2f2642] transition
                     ${file.isActive ? "bg-[#2f2642] transition" : ""}
                  `}
              >
                {file.icon}
                <span>{file.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
