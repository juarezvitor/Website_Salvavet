import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  ArrowRight,
  MapPin,
  Phone,
  Clock,
  Heart,
} from "lucide-react";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-white to-teal-50">
      {/* Faixa de Separação */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 py-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-white opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-black opacity-10"></div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="flex items-center space-x-3">
              <Heart className="h-8 w-8 text-white animate-pulse" />
              <h3 className="text-2xl font-bold text-white">
                Cuidando do seu pet com amor e dedicação
              </h3>
            </div>
          </div>
        </div>

        {/* Elementos decorativos */}
        <div className="absolute top-1/2 left-10 transform -translate-y-1/2">
          <div className="w-16 h-16 rounded-full bg-white opacity-10"></div>
        </div>
        <div className="absolute top-1/4 right-10">
          <div className="w-8 h-8 rounded-full bg-white opacity-10"></div>
        </div>
        <div className="absolute bottom-1/4 right-1/4">
          <div className="w-12 h-12 rounded-full bg-white opacity-10"></div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center mb-6">
              <div className="rounded-lg p-2">
                <Image
                  src="/logo_nova.svg"
                  alt="Logo"
                  width={24}
                  height={24}
                  className="w-24 h-auto"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Salva<span className="text-[#c8958a]">Vet</span>
                  <span className="text-xs font-bold bg-[#c8958a] text-white px-1 rounded ml-1">
                    24h
                  </span>
                </h3>
                <p className="text-xs text-gray-600">Clínica Veterinária</p>
              </div>
            </div>

            <p className="text-gray-600 mb-6">
              Cuidando com amor e profissionalismo do seu pet há mais de 10
              anos. Atendimento 24 horas para emergências e consultas
              especializadas.
            </p>

            <div className="flex space-x-3">
              <Link
                target="_blank"
                href="https://www.facebook.com/salvavetblumenau"
                className="bg-gray-900 hover:bg-[#0d9488] text-white p-2 rounded-full transition-colors duration-300"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                target="_blank"
                href="https://www.instagram.com/salvavet24h/"
                className="bg-gray-900 hover:bg-[#0d9488] text-white p-2 rounded-full transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                target="_blank"
                href="https://www.linkedin.com/company/centro-cl%C3%ADnico-veterin%C3%A1rio-salvavet/"
                className="bg-gray-900 hover:bg-[#0d9488] text-white p-2 rounded-full transition-colors duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6 relative">
              Links Rápidos
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#11b5a2] -mb-2"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Início", href: "#inicio" },
                { name: "Serviços", href: "#servicos" },
                { name: "Sobre Nós", href: "#sobre" },
                { name: "Nossa Equipe", href: "#equipe" },
                { name: "Depoimentos", href: "#depoimentos" },
                { name: "Contato", href: "#contato" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-[#11b5a2] hover:translate-x-1 transition-all duration-300 flex items-center"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 text-gray-900" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6 relative">
              Nossos Serviços
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#11b5a2] -mb-2"></span>
            </h3>
            <ul className="space-y-3">
              {[
                "Consultas de Rotina",
                "Atendimento de Emergência",
                "Cirurgias",
                "Exames Laboratoriais",
                "Internação",
                "Orientação Nutricional",
                "Vacinação",
              ].map((service, index) => (
                <li key={index}>
                  <Link
                    href="#servicos"
                    className="text-gray-600 hover:text-[#11b5a2] hover:translate-x-1 transition-all duration-300 flex items-center"
                  >
                    <ArrowRight className="h-3 w-3 mr-2 text-gray-900" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6 relative">
              Informações de Contato
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#11b5a2] -mb-2"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-900 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-600">
                  Theodoro Holtrup, 774 - Vila Nova, Blumenau - SC, 89035-300
                </span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-gray-900 mr-3 mt-1 flex-shrink-0" />
                <div className="text-gray-600">
                  <p>(47) 99663-2210(Atendimento)</p>
                  <p>(47) 3285-2018 (Emergência)</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-gray-900 mr-3 mt-1 flex-shrink-0" />
                <div className="text-gray-600">
                  <p>Salvavet123@gmail.com</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-gray-900 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900">Aberto 24 horas</p>
                  <p className="text-gray-600">Todos os dias da semana</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-teal-100">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 mb-4 md:mb-0">
              &copy; {currentYear} SalvaVet 24h. Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <Link
                href="#"
                className="hover:text-[#11b5a2] transition-colors duration-300"
              >
                Política de Privacidade
              </Link>
              <Link
                href="#"
                className="hover:text-[#11b5a2] transition-colors duration-300"
              >
                Termos de Uso
              </Link>
              <Link
                href="#"
                className="hover:text-[#11b5a2] transition-colors duration-300"
              >
                Política de Cookies
              </Link>
              <Link
                href="#"
                className="hover:text-[#11b5a2] transition-colors duration-300"
              >
                Mapa do Site
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
