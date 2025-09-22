import React from "react";
import { useUser, useClerk } from "@clerk/clerk-react";
import {
  Eraser,
  FileText,
  Hash,
  House,
  Image,
  LogOut,
  Scissors,
  SquarePen,
  Users,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ sidebar, SetSidebar }) => {
  const navItems = [
    { to: "/ai", label: "Dashboard", Icon: House },
    { to: "/ai/write-article", label: "Write Article", Icon: SquarePen },
    { to: "/ai/blog-titles", label: "Blog Titles", Icon: Hash },
    { to: "/ai/generate-images", label: "Generate Image", Icon: Image },
    { to: "/ai/remove-background", label: "Remove Background", Icon: Eraser },
    { to: "/ai/remove-Object", label: "Remove Object", Icon: Scissors },
    { to: "/ai/review-resume", label: "Review Resume", Icon: FileText },
    { to: "/ai/community", label: "Community", Icon: Users },
  ];

  const { user } = useUser();
  const { signOut, openUserProfile } = useClerk();

  return (
    <div
      className={`
        w-60 bg-white border-r border-gray-200 
        flex flex-col justify-between items-center 
        h-full overflow-hidden
        sm:relative sm:translate-x-0
        fixed top-0 left-0 z-20
        ${sidebar ? "translate-x-0" : "-translate-x-full sm:translate-x-0"}
        transition-transform duration-300 ease-in-out
      `}
    >
      {/* Top Section */}
      <div className="w-full flex flex-col overflow-hidden">
        {/* User Profile Section */}
        <div className="py-7 px-6 border-b border-gray-200">
          <img
            src={user.imageUrl}
            alt="user avatar"
            className="w-12 h-12 rounded-full mx-auto"
          />
          <h1 className="mt-2 text-center text-sm font-medium truncate">
            {user.fullName}
          </h1>
        </div>

        {/* Navigation Section */}
        <div className="flex-1 px-6 py-5 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          <div className="space-y-1 text-sm text-gray-600 font-medium">
            {navItems.map(({ to, label, Icon }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/ai"}
                onClick={() => SetSidebar(false)}
                className={({ isActive }) =>
                  `px-3 py-2.5 flex items-center gap-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-gradient-to-r from-[#3C81F6] to-[#9434EA] text-white"
                      : "hover:bg-gray-50"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon
                      className={`w-4 h-4 ${isActive ? "text-white" : "text-gray-500"}`}
                    />
                    <span className="truncate">{label}</span>
                  </>
                )}
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section - Fixed at bottom */}
      <div className="w-full border-t border-gray-200 p-4 bg-white">
        <div className="flex items-center justify-between gap-2">
          <div
            onClick={openUserProfile}
            className="flex gap-2 items-center cursor-pointer flex-1 min-w-0"
          >
            <img 
              src={user.imageUrl} 
              alt="" 
              className="w-8 h-8 rounded-full flex-shrink-0" 
            />
            <div className="min-w-0 flex-1">
              <h1 className="text-sm font-medium truncate">{user.fullName}</h1>
              <p className="text-xs text-gray-500 truncate">
                {user?.publicMetadata?.plan === "premium" ? "Premium" : "Free"} Plan
              </p>
            </div>
          </div>
          <LogOut
            onClick={signOut}
            className="w-4 h-4 text-gray-400 hover:text-gray-700 transition cursor-pointer flex-shrink-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;