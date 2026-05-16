'use client'

import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { useLanguage } from "../context/LanguageContext";

export default function Skills() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen flex items-center justify-center">
      <section className="max-w-xl m-3 md:m-8 z-50 w-full space-y-8 border rounded-x1 border-gray-700/50 p-5 sm:p-10 backdrop-blur-xl bg-black/80">
        <Link href="/">
          <Button variant="ghost" className="hover:bg-black/50 duration-300 hover:text-white rounded-full mb-5 cursor-pointer">
            <BsArrowLeft className="mr-2" />
            <span>{t('backHome')}</span>
          </Button>
        </Link>

        <div className="space-y-6">
          <h1 className="text-2xl font-bold text-emerald-400">{t('skillsTitle')}</h1>

          <div className="space-y-4 border rounded-xl border-gray-700/50 p-5 sm:p-10 backdrop-blur-xl bg-black/80 hover:scale-110 duration-300">
            <h2 className="text-xl font-bold text-emerald-300">{t('growthAnalytics')}</h2>
            <p className="text-neutral-300 text-pretty tracking-tight">{t('growthAnalyticsText')}</p>
          </div>

          <div className="space-y-4 border rounded-xl border-gray-700/50 p-5 sm:p-10 backdrop-blur-xl bg-black/80 hover:scale-110 duration-300">
            <h2 className="text-xl font-bold text-emerald-300">{t('documentationProcesses')}</h2>
            <p className="text-neutral-300 text-pretty tracking-tight">{t('documentationProcessesText')}</p>
          </div>

          <div className="space-y-4 border rounded-xl border-gray-700/50 p-5 sm:p-10 backdrop-blur-xl bg-black/80 hover:scale-110 duration-300">
            <h2 className="text-xl font-bold text-emerald-300">{t('technologiesFrameworks')}</h2>
            <p className="text-neutral-300 text-pretty tracking-tight">{t('technologiesFrameworksText')}</p>
          </div>

          <div className="space-y-4 border rounded-xl border-gray-700/50 p-5 sm:p-10 backdrop-blur-xl bg-black/80 hover:scale-110 duration-300">
            <h2 className="text-xl font-bold text-emerald-300">{t('managementTools')}</h2>
            <p className="text-neutral-300 text-pretty tracking-tight">{t('managementToolsText')}</p>
          </div>

          <div className="space-y-4 border rounded-xl border-gray-700/50 p-5 sm:p-10 backdrop-blur-xl bg-black/80 hover:scale-110 duration-300">
            <h2 className="text-xl font-bold text-emerald-300">{t('businessSystems')}</h2>
            <p className="text-neutral-300 text-pretty tracking-tight">{t('businessSystemsText')}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
