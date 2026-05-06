import React, { createContext, useContext, useState } from "react";
import { FaCss3Alt, FaHtml5, FaJs } from "react-icons/fa";
import { LuFileJson2 } from "react-icons/lu";

const TabsContext = createContext();

export const useTabs = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("useTabs must be used within TabsProvider");
  }
  return context;
};

export const TabsProvider = ({ children }) => {
  const [tabs, setTabs] = useState([
    {
      id: 1,
      name: "index.html",
      icon: <FaHtml5 className="text-orange-500" />,
      isActive: true,
      path: "/",
    },
    {
      id: 2,
      name: "skils.json",
      icon: <LuFileJson2 className="text-yellow-400" />,
      
      isActive: false,
      path: "/skils",
    },
    {
      id: 3,
      name: "project.js",
      icon: <FaJs className="text-yellow-400" />,
      isActive: false,
      path: "/project",
    },
    {
      id: 4,
      name: "contact.css",
      icon: <FaCss3Alt className="text-blue-400" />,
      isActive: false,
      path: "/contact",
    },
  ]);

  const activateTab = (id) => {
    setTabs((prevTabs) =>
      prevTabs.map((tab) => ({ ...tab, isActive: tab.id === id })),
    );
  };


  return (
    <TabsContext.Provider
      value={{ tabs, activateTab, }}
    >
      {children}
    </TabsContext.Provider>
  );
};
