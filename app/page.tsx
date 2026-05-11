'use client'

import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import {
  BiBuilding,
  BiChevronRight
} from "react-icons/bi";
import Image from 'next/image'
import { useLanguage } from "./context/LanguageContext";

export default function Home() {
  const { t, language, setLanguage } = useLanguage();

  return (
    <main className="min-h-screen flex items-center justify-center relative">
      {/* Language Switcher Fixed at Top Right */}
      <div className="absolute top-5 right-5 flex gap-3 z-50 bg-black/50 p-2 rounded-full backdrop-blur-md border border-gray-700/50">
        <button onClick={() => setLanguage('en')} className={`text-2xl transition-all duration-300 ${language === 'en' ? 'scale-110 opacity-100 grayscale-0' : 'opacity-50 grayscale hover:grayscale-0 hover:opacity-100'}`} title="English">🇺🇸</button>
        <button onClick={() => setLanguage('pt')} className={`text-2xl transition-all duration-300 ${language === 'pt' ? 'scale-110 opacity-100 grayscale-0' : 'opacity-50 grayscale hover:grayscale-0 hover:opacity-100'}`} title="Português">🇧🇷</button>
        <button onClick={() => setLanguage('es')} className={`text-2xl transition-all duration-300 ${language === 'es' ? 'scale-110 opacity-100 grayscale-0' : 'opacity-50 grayscale hover:grayscale-0 hover:opacity-100'}`} title="Español">🇪🇸</button>
      </div>

      <section className="w-full max-w-xl m-3 md:m-8 z-50 space-y-8 border border-gray-700/50 rounded-xl p-5 sm:p-10 backdrop-blur-xl bg-black/80">

        <div className="flex sm:flex-row sm:justify-between sm:items-center flex-col-reverse items-start gap-3 sm:gap-10">
          <div className="flex items-center gap-3">
            <BiBuilding className="w-5 h-5" />
            <h3 className="text-gray-400">{t('worldwide')}</h3>
          </div>

          <Button variant="ghost" className="hover:bg-black/50 duration-300 hover:text-white rounded-full">
            <section className="relative flex text-sm gap-1 items-center justify-center h-3 w-3 rounded-full">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500"></span>
              <span className="inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </section>
            <p>{t('available')}</p>
          </Button>
        </div>

        <div>
          <section className="flex items-center justify-between gap-3">
            <h1 className="text-4xl">{t('hello')}</h1>
            <Image src="/vlp.png" alt="Profile Picture" width={128} height={128} className="w-32 h-32 rounded-full border-4 border-green-500 object-cover" />


          </section>
          <p className="text-pretty tracking-tight mt-3 text-neutral-300">{t('welcome')}
            <span className="bg-clip-text text-emerald-400 bg-gradient-to-r from-emerald-400 via-sky-300 to-blue-500 font-bold opacity-90 hover:opacity-100 transition-opacity">{t('contactMe')}</span> {t('inquiries')}

          </p>
        </div>

        <nav className="space-y-4">
          {/* <h3 className="text-xl font-bold text-emerald-400">Menu</h3> */}
        
          <section className="flex flex-col gap-3">

            <Link href="/about" className="w-1/2 border bg-black/30 border-gray-700/40 flex group items-center justify-between p-3 cursor-pointer transition-colors duration-200 ease-linear hover:bg-zinc-800/40 rounded-lg">
              <span>{t('aboutLink')}</span>
              <BiChevronRight className="mr-5 text-2xl translate-x-0 group-hover:translate-x-3 text-gray-300 opacity-0 group-hover:translate-x-3 text-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-200" />
            </Link>

            <Link href="/work" className="w-1/2 border bg-black/30 border-gray-700/40 flex group items-center justify-between p-3 cursor-pointer transition-colors duration-200 ease-linear hover:bg-zinc-800/40 rounded-lg">
              <span>{t('projectsLink')}</span>
              <BiChevronRight className="mr-5 text-2xl translate-x-0 group-hover:translate-x-3 text-gray-300 opacity-0 group-hover:translate-x-3 text-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-200" />
            </Link>

          </section>
        </nav>

      </section>
    </main>
  );
}