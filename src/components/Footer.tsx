import React from "react";
import { Linkedin, Github, Instagram } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gray-950 text-gray-400 py-10  border-t border-gray-800">
      {/* Copyright */}
      <div className="text-center text-xs text-white-500 mt-6">
        © {new Date().getFullYear()} Mohammed Yaqoob Jalal. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
