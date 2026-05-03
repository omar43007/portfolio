import React from "react";
import Logo from "../assets/visual-studio.svg";
import { MdOutlineSettingsInputAntenna, MdSettingsPower } from "react-icons/md";

function Footer() {
  return (
    <div className="w-full h-8 bg-[#201a2c] text-gray-400 text-[11px] flex items-center justify-between px-3">
      <div className="flex items-center gap-2">
        <MdOutlineSettingsInputAntenna className="w-3 h-3 text-white" />
        <span>main</span>
      </div>

      <div className="flex items-center gap-2 ">
        <img src={Logo} alt="logo" className="w-3 h-3" />
        <span>Built by Omar AL-Ali</span>
        <MdSettingsPower className="w-3 h-3 text-white" />
        <span>Powered by framer</span>
      </div>
    </div>
  );
}

export default Footer;
