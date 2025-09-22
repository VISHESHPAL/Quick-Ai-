import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { Menu, X } from "lucide-react";
import Sidebar from "../components/Sidebar";
import { SignIn, useUser } from "@clerk/clerk-react";

const Layout = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const [sidebar, SetSidebar] = useState(false);
  
  return user ? (
    <div className="flex flex-col justify-start items-start h-screen overflow-hidden">
      <nav className="w-full px-4 min-h-14 flex items-center justify-between border-b border-gray-200 bg-white relative z-20">
        <img 
          src={assets.logo} 
          alt="logo" 
          onClick={() => navigate("/")} 
          className="cursor-pointer w-32 sm:w-44"
        />
        {sidebar ? (
          <X
            onClick={() => SetSidebar(false)}
            className="h-4 w-4 text-gray-600 sm:hidden cursor-pointer"
          />
        ) : (
          <Menu
            onClick={() => SetSidebar(true)}
            className="h-4 w-4 text-gray-600 sm:hidden cursor-pointer"
          />
        )}
      </nav>

      <div className="flex-1 flex w-full h-[calc(100vh-64px)] relative">
        {/* Overlay for mobile when sidebar is open */}
        {sidebar && (
          <div 
            className="fixed inset-0  bg-opacity-50 z-10 sm:hidden"
            onClick={() => SetSidebar(false)}
          />
        )}
        
        <Sidebar sidebar={sidebar} SetSidebar={SetSidebar} />
        
        <div className="flex-1 bg-[#F4F7FB] overflow-hidden">
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <div className="flex justify-center items-center h-screen">
      <SignIn />
    </div>
  );
};

export default Layout;