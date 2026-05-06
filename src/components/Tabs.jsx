import React, { useState } from "react";
import { FaCss3Alt, FaHtml5, FaJs } from "react-icons/fa";
import { LuFileJson2, LuX } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useTabs } from "./TabsContext";

function Tabs() {
  const { tabs, activateTab } = useTabs();
  return (
    <div className="flex overflow-x-auto bg-[#1e1a2f] border-[#2f2a3e]">
      {tabs.map((tab) => (
        <Link
          to={tab.path}
          key={tab.id}
          onClick={() => activateTab(tab.id)}
          className={`
            flex items-center gap-2 px-3 py-1.5 text-sm font-medium
            border-r border-[#2f2a3e] cursor-pointer select-none
            transition-all duration-150
            ${
              tab.isActive
                ? "bg-[#2b233b] text-white border-t-2 border-t-purple-500"
                : "bg-[#1e1a2f] text-gray-400 hover:bg-[#2a233c] hover:text-gray-200"
            }
          `}
        >
          {tab.icon}
          <span className="whitespace-nowrap">{tab.name}</span>
          <button className="ml-1 p-0.5 rounded-sm opacity-0 group-hover:opacity-100 hover:bg-[#3c3452] transition">
            <LuX className="text-xs" />
          </button>
        </Link>
      ))}
    </div>
  );
}

export default Tabs;
