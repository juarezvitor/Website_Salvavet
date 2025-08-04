"use client";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Clock } from "lucide-react";
import Link from "next/link";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-1">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-[#11b5a2] mr-2">
              <div className="w-24 h-auto rounded-lg p-2 text-white font-bold text-center">
                <Image
                  src="/logo_nova.svg"
                  alt="Logo"
                  width={24}
                  height={24}
                  className="w-24 h-auto"
                />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold">
                Salva<span className="text-[#c8958a]">Vet</span>
                <span className="text-xs font-bold bg-[#c8958a] text-white px-1 rounded ml-1">
                  24h
                </span>
              </h1>
              <p className="text-xs text-gray-600 -mt-1">Clínica Veterinária</p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link
              href="#inicio"
              className="text-gray-700 hover:text-[#11b5a2] font-medium transition-colors"
            >
              Início
            </Link>
            <Link
              href="#servicos"
              className="text-gray-700 hover:text-[#11b5a2] font-medium transition-colors"
            >
              Serviços
            </Link>
            <Link
              href="#sobre"
              className="text-gray-700 hover:text-[#11b5a2] font-medium transition-colors"
            >
              Sobre
            </Link>
            <Link
              href="#equipe"
              className="text-gray-700 hover:text-[#11b5a2] font-medium transition-colors"
            >
              Equipe
            </Link>
            <Link
              href="#contato"
              className="text-gray-700 hover:text-[#11b5a2] font-medium transition-colors"
            >
              Contato
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button className="bg-red-900 hover:bg-[#c8958a] text-white font-medium py-2 px-4 rounded-lg transition duration-300 flex items-center">
              <Clock className="w-5 h-5 mr-1" />
              Emergência
            </Button>
            <button
              className="md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="#inicio"
                className="text-gray-700 hover:text-[#11b5a2] font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link
                href="#servicos"
                className="text-gray-700 hover:text-[#11b5a2] font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </Link>
              <Link
                href="#sobre"
                className="text-gray-700 hover:text-[#11b5a2] font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link
                href="#equipe"
                className="text-gray-700 hover:text-[#11b5a2] font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Equipe
              </Link>
              <Link
                href="#contato"
                className="text-gray-700 hover:text-[#11b5a2] font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
