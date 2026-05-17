'use client'


import { useLanguage } from "../context/LanguageContext";
import BackToHome from "../components/BackToHome";


export default function About() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen flex items-center justify-center">

      <section className="max-w-xl m-3 md:m-8 z-50 w-full space-y-8 border rounded-x1 border-green-700/50 p-5 sm:p-10 backdrop-blur-xl bg-black/80">
      <BackToHome/>

        {/* About me */}
        <div className="space-y-6 mt-8">
          <h1 className="text-2xl font-bold text-emerald-400">{t('aboutMe')}</h1>
          <div className="space-y-4 text-neutral-200 text-pretty tracking-tight border rounded-xl border-gray-700/50 p-5 sm:p-10 backdrop-blur-xl bg-black/80 hover:scale-110 duration-300">
            <p>{t('aboutText')}</p>
          </div>
        </div>

        {/* Education */}
        <div className="space-y-4 ">
          <h2 className="text-2xl font-bold text-emerald-400">{t('education')}</h2>
          <div className="space-y-2 border rounded-xl border-gray-700/50 p-5 sm:p-10 backdrop-blur-xl bg-black/80 hover:scale-110 duration-300">
            <p className="font-medium">{t('educationText')}</p>
            <p className="text-sm text-neutral-400">{t('educationDate')}</p>
          </div>
        </div>

        {/* Experiences */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-emerald-400">{t('experiences')}</h2>
          <section className="space-y-4">

            {/* Freelancer Developer */}
            <div className="space-y-2 border rounded-xl border-gray-700/50 p-5 sm:p-10 backdrop-blur-xl bg-black/80 hover:scale-110 duration-300">
              <p className="font-medium">{t('freelancer')}</p>
              <ul className="space-y-1">
                <li className="text-sm text-neutral-400">{t('freelancerDesc1')}</li>
                <li className="text-sm text-neutral-400">{t('freelancerDesc2')}</li>
                <li className="text-sm text-neutral-400">{t('freelancerDesc3')}</li>
              </ul>
              <p className="text-sm text-emerald-200">{t('freelancerDate')}</p>
            </div>

            {/* IT Assistant Systems Support and Integration */}
            <div className="space-y-2 border rounded-xl border-gray-700/50 p-5 sm:p-10 backdrop-blur-xl bg-black/80 hover:scale-110 duration-300">
              <p className="font-medium">{t('itAssistant')}</p>
              <ul className="space-y-1">
                <li className="text-sm text-neutral-400">{t('itAssistantDesc1')}</li>
                <li className="text-sm text-neutral-400">{t('itAssistantDesc2')}</li>
                <li className="text-sm text-neutral-400">{t('itAssistantDesc3')}</li>
              </ul>
              <p className="text-sm text-emerald-200">{t('itAssistantDate')}</p>
            </div>

            {/* Full Stack Developer */}
            <div className="space-y-2 border rounded-xl border-gray-700/50 p-5 sm:p-10 backdrop-blur-xl bg-black/80 hover:scale-110 duration-300">
              <p className="font-medium">{t('fullStack')}</p>
              <ul className="space-y-1">
                <li className="text-sm text-neutral-400">{t('fullStackDesc1')}</li>
                <li className="text-sm text-neutral-400">{t('freelancerDesc2')}</li>
                <li className="text-sm text-neutral-400">{t('freelancerDesc3')}</li>
              </ul>
              <p className="text-sm text-emerald-200">{t('fullStackDate')}</p>
            </div>

            {/* Technological Residency - Digital Port */}
            <div className="space-y-2 border rounded-xl border-gray-700/50 p-5 sm:p-10 backdrop-blur-xl bg-black/80 hover:scale-110 duration-300">
              <p className="font-medium">{t('techResidency')}</p>
              <ul className="space-y-1">
                <li className="text-sm text-neutral-400">{t('techResidencyDesc1')}</li>
                <li className="text-sm text-neutral-400">{t('techResidencyDesc2')}</li>
                <li className="text-sm text-neutral-400">{t('techResidencyDesc3')}</li>
              </ul>
              <p className="text-sm text-emerald-200">{t('techResidencyDate')}</p>
            </div>
          </section>
        </div>

      </section>
    </main>
  );
}