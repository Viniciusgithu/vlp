import { FaWhatsapp } from "react-icons/fa";

export default function Whatsapp() {  
    return (

      <main className="">
        <a
        href="https://wa.me/5581999979544"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-600 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-green-500/30 transition-all duration-300 group
        "
      >
        <FaWhatsapp className="text-2xl" />
        <span className="text-sm font-medium"></span>
      </a>
      </main>
    ) 
}