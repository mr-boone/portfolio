import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { GoPackage } from "react-icons/go";

export default function Links() {
  return (
    <div class="flex gap-6">
      <a class="shadow-sm shadow-peach p-2 hover:shadow-none hover:scale-[0.95] transition-all duration-100 cursor-pointer rounded-sm">
        resume
      </a>
      <a class="shadow-sm shadow-sapphire text-lg p-2 hover:shadow-none hover:scale-[0.95] transition-all duration-100 cursor-pointer rounded-sm">
        <FaGithub />
      </a>
      <a class="shadow-sm shadow-yellow text-lg p-2 hover:shadow-none hover:scale-[0.95] transition-all duration-100 cursor-pointer rounded-sm">
        <FaLinkedin />
      </a>
    </div>
  );
}
