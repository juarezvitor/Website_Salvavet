"use client";

import { Clock } from "lucide-react";
import { Phone } from "lucide-react";

export default function Emergencia() {
  return (
    <section id="emergencia" className="bg-red-400 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <div className="bg-white/20 rounded-full p-3 mr-4">
              <Clock className="w-8 h-8 text-white animate-pulse" />
            </div>
            <div>
              <h3 className="text-white font-bold text-2xl">
                Emergência Veterinária
              </h3>
              <p className="text-[#f4e6e3]">
                Atendimento imediato para o seu pet
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <div className="flex items-center bg-white rounded-lg px-5 py-3 shadow-lg hover:scale-105 transition duration-300">
              <Phone className="w-5 h-5 text-[#b77b6e] mr-2" />
              <a className="font-bold text-[#b77b6e]">(47) 3285-2018</a>
            </div>

            <button className="bg-white hover:bg-gray-100 hover:scale-105 text-[#d7a097] font-bold py-3 px-6 rounded-lg transition duration-300 shadow-lg flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              <a className="font-bold text-[#b77b6e]" href="tel:+554732852018">
                Ligar Agora
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
