// 'use client'

// import { useLanguage } from "../context/LanguageContext";

// export default function LanguageSwitcher() {
//   const { language, setLanguage } = useLanguage();

//   return (
//     <div className="fixed top-5 right-5 flex gap-2 z-50 bg-black/50 p-2 rounded-full backdrop-blur-md border border-gray-700/50">
//       <button onClick={() => setLanguage('en')} className={`text-xl sm:text-2xl transition-all duration-300 ${language === 'en' ? 'scale-110 opacity-100 grayscale-0' : 'opacity-50 grayscale hover:grayscale-0 hover:opacity-100'}`} title="English">🇺🇸</button>
//       <button onClick={() => setLanguage('pt')} className={`text-xl sm:text-2xl transition-all duration-300 ${language === 'pt' ? 'scale-110 opacity-100 grayscale-0' : 'opacity-50 grayscale hover:grayscale-0 hover:opacity-100'}`} title="Português">🇧🇷</button>
//       <button onClick={() => setLanguage('es')} className={`text-xl sm:text-2xl transition-all duration-300 ${language === 'es' ? 'scale-110 opacity-100 grayscale-0' : 'opacity-50 grayscale hover:grayscale-0 hover:opacity-100'}`} title="Español">🇪🇸</button>
//     </div>
//   );
// }

'use client'

import { useLanguage } from "../context/LanguageContext";

// Extrair os dados para um array facilita a manutenção e escalabilidade
const LANGUAGES = [
  { code: 'en', flag: '🇺🇸', label: 'English' },
  { code: 'pt', flag: '🇧🇷', label: 'Português' },
  { code: 'es', flag: '🇪🇸', label: 'Español' },
] as const;

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="fixed top-3 right-3 sm:top-5 sm:right-5 flex gap-1 sm:gap-2 z-[999] bg-black/50 p-1.5 sm:p-2 rounded-full backdrop-blur-md border border-gray-700/50 shadow-lg">
      {LANGUAGES.map(({ code, flag, label }) => {
        const isActive = language === code;

        return (
          <button
            key={code}
            onClick={() => setLanguage(code)}
            title={label}
            aria-label={`Mudar idioma para ${label}`}
            className={`
              p-1.5 sm:p-2 rounded-full text-xl sm:text-2xl 
              transition-all duration-300 ease-in-out
              focus:outline-none focus:ring-2 focus:ring-blue-500/50
              flex items-center justify-center
              ${isActive 
                ? 'scale-110 opacity-100 grayscale-0 bg-white/10' 
                : 'opacity-50 grayscale hover:grayscale-0 hover:opacity-100 hover:bg-white/5 hover:scale-105'
              }
            `}
          >
            {/* O span garante que o emoji tenha um comportamento previsível em diferentes SOs */}
            <span aria-hidden="true" className="leading-none">{flag}</span>
          </button>
        );
      })}
    </div>
  );
}