'use client';

import { FaGithub } from "react-icons/fa";
import { BiChevronRight } from "react-icons/bi";
import { useLanguage } from "../context/LanguageContext";

export default function GitHubButtom() {
  const { t } = useLanguage();

  return (
    <a
      href="https://github.com/Viniciusgithu"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-black/30 border-gray-700/40 flex group items-center justify-center cursor-pointer transition-colors duration-200 ease-linear hover:bg-zinc-800/40 "
      aria-label="GitHub Profile"
    >
      <div className="flex items-center gap-2">
        <FaGithub className="text-xl text-gray-300 group-hover:text-white transition-colors duration-200" />
        {/* <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-200">
          {t('viewGithub')}
        </span> */}
      </div>
      <BiChevronRight className="mr-5 text-2xl text-gray-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-3 transition-all duration-200" />
    </a>
  );
}
