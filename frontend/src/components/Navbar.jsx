import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const navigate = useNavigate();

  const { user } = useUser();
  const { openSignIn } = useClerk();

  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-transparent">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <img
          src={assets.logo}
          alt="Logo"
          className="w-32 cursor-pointer transition-transform duration-200 hover:scale-102 sm:w-44"
          onClick={() => navigate("/")}
        />

        {user ? (
          <UserButton />
        ) : (
          <button onClick={openSignIn} className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white shadow-md transition-all duration-200 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
            Get Started
            <ArrowRight className="h-4 w-4" />
          </button>
        )}

      </div>
    </div>
  );
};

export default Navbar;
