'use client'

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  BiBuilding,
  BiChevronRight,
  BiLogoGithub,
  BiLogoLinkedin,
} from "react-icons/bi";
import { HiArrowDown } from "react-icons/hi";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <section className="w-full max-w-xl m-3 md:m-8 z-50 space-y-8 border border-gray-700/50 rounded-xl p-5 sm:p-10 backdrop-blur-xl bg-black/80">

        <div className="flex sm:flex-row sm:justify-between sm:items-center flex-col-reverse items-start gap-3 sm:gap-10">
          <div className="flex items-center gap-3">
            <BiBuilding className="w-5 h-5"/>
            <h3 className="text-gray-400">Worldwide</h3>
          </div>

          <Button variant="ghost" className="hover:bg-black/50 duration-300 hover:text-white rounded-full">
            <section className="relative flex text-sm gap-1 items-center justify-center h-3 w-3 rounded-full">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500"></span>
              <span className="inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </section>
            <p>Available for work</p>
          </Button>
        </div>

        <div>
          <h1 className="text-4xl">Hi, I'm Vinicius 😁</h1>
          <p className="text-pretty tracking-tight mt-3 text-neutral-300">Welcome to my website. {" "}
            <Link href="/contact" className="bg-clip-text text-emerald-400 bg-gradient-to-r from-emerald-400 via-sky-300 to-blue-500 font-bold opacity-90 hover:opacity-100 transition-opacity">Contact me {" "}</Link> for any inquiries or to discuss potential opportunities.

          </p>
        </div>

        <nav className="space-y-4">
          <h3 className="text-xl font-bold text-emerald-400">Menu</h3>
          <section className="flex flex-col gap-3">

            <Link href="/about" className="w-1/2 border bg-black/30 border-gray-700/40 flex group items-center justify-between p-3 cursor-pointer transition-colors duration-200 ease-linear hover:bg-zinc-800/40 rounded-lg">
            <span>About</span>
            <BiChevronRight className="mr-5 text-2xl translate-x-0 group-hover:translate-x-3 text-gray-300 opacity-0 group-hover:translate-x-3 text-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-200" />
            </Link>

            <Link href="/work" className="w-1/2 border bg-black/30 border-gray-700/40 flex group items-center justify-between p-3 cursor-pointer transition-colors duration-200 ease-linear hover:bg-zinc-800/40 rounded-lg">
            <span>Projects</span>
            <BiChevronRight className="mr-5 text-2xl translate-x-0 group-hover:translate-x-3 text-gray-300 opacity-0 group-hover:translate-x-3 text-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-200"/>
            </Link>

            <Link href="/contact" className="w-1/2 border bg-black/30 border-gray-700/40 flex group items-center justify-between p-3 cursor-pointer transition-colors duration-200 ease-linear hover:bg-zinc-800/40 rounded-lg">
            <span>Contact</span>
            <BiChevronRight className="mr-5 text-2xl translate-x-0 group-hover:translate-x-3 text-gray-300 opacity-0 group-hover:translate-x-3 text-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-200"/>
            </Link>
          </section>
        </nav>

      </section>
    </main>
  );
}