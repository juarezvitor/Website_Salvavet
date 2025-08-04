import { Header } from "@/components/header/header";
import { ServiceCard } from "@/components/servico/servico";
import { TestimonialsSection } from "@/components/depoimentos/depoimento";
import Sobre from "@/components/sobre/sobre";
import { ContactSection } from "@/components/contatos/contatos";
import {
  ShieldQuestionMark,
  Activity,
  HeartPulse,
  BookCheck,
  Stethoscope,
  Syringe,
  Clock,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-100">
      <header className="sticky top-0 z-50">
        <Header />
      </header>
      <section id="hero">
        <section
          id="inicio"
          className="relative overflow-hidden py-20 md:py-32"
        >
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-20">
            <svg
              viewBox="0 0 200 700"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full text-teal-primary"
              fill="currentColor"
            >
              <path
                d="M42.7,-73.2C55.9,-65.7,67.7,-55.1,76.6,-41.5C85.5,-27.9,91.5,-11.2,89.8,4.4C88.2,20,78.9,34.5,68.3,47.2C57.8,59.9,45.9,70.8,32,76.3C18.1,81.8,2.2,81.9,-14.9,79.7C-32,77.5,-50.3,73,-62.1,61.5C-73.9,50,-79.2,31.5,-80.8,13.3C-82.4,-4.9,-80.3,-22.9,-72.6,-37.8C-64.9,-52.7,-51.7,-64.6,-37.4,-71.3C-23.1,-78,-11.6,-79.6,1.6,-82.2C14.7,-84.8,29.5,-80.6,42.7,-73.2Z"
                transform="translate(100 60)"
              />
            </svg>
          </div>

          <div className="container mx-auto px-10 relative mb-24">
            <div className="flex flex-col md:flex-row items-center">
              {/* Texto */}
              <div className="md:w-1/2 mb-12 md:mb-0">
                <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-sm p-8 rounded-2xl shadow-xl max-w-lg border-gray-200 border">
                  <span className="inline-block bg-teal-50 text-teal-primary font-semibold px-3 py-1 rounded-full text-sm mb-2">
                    Atendimento 24 horas
                  </span>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                    Cuidado veterinário de{" "}
                    <span className="text-teal-500">excelência</span> para seu
                    pet
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Equipe especializada pronta para atender seu animal de
                    estimação a qualquer hora do dia ou da noite, com amor e
                    profissionalismo.
                  </p>

                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <a
                      href="#contato"
                      className="gradient-bg text-white font-medium py-3 px-6 rounded-lg transition duration-300 text-center shadow-lg hover:shadow-xl"
                    >
                      Agendar Consulta
                    </a>
                    <a
                      href="#servicos"
                      className="bg-white text-teal-primary font-medium py-3 px-6 rounded-lg border border-teal-200 transition duration-300 text-center hover:bg-teal-50"
                    >
                      Nossos Serviços
                    </a>
                  </div>

                  <div className="mt-10 flex items-center">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((_, i) => (
                        <div
                          key={i}
                          className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center border-2 border-white"
                        >
                          <svg
                            className="w-6 h-6 text-teal-primary"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            />
                          </svg>
                        </div>
                      ))}
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-gray-600">
                        Mais de{" "}
                        <span className="font-bold text-teal-primary">
                          20.000
                        </span>{" "}
                        pets atendidos
                      </p>
                      <div className="flex text-yellow-400 mt-1">
                        {[1, 2, 3, 4, 5].map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hero Section com imagem */}
              <div className="md:w-1/2 flex justify-center">
                <div className="relative">
                  <div className="absolute -top-6 -left-6 bg-teal-100 rounded-full w-24 h-24 z-0" />
                  <div className="absolute -bottom-6 -right-6 bg-teal-100 rounded-full w-32 h-32 z-0" />
                  <div className="relative z-10 bg-white p-3 rounded-2xl shadow-x1">
                    <Image
                      src="/Imagem_Hero.jpg"
                      alt="Imagem Hero"
                      width={800}
                      height={400}
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                    <div className="absolute bottom-8 right-8 bg-white rounded-lg shadow-lg p-4 flex items-center space-x-3">
                      <div className="bg-teal-500 rounded-full p-2">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-bold text-gray-800">
                          Atendimento 24h
                        </p>
                        <p className="text-sm text-gray-500">Todos os dias</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*<!-- Banner Emergencia -->*/}
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
                  <div className="flex items-center bg-white rounded-lg px-5 py-3 shadow-lg">
                    <Phone className="w-5 h-5 text-[#d7a097] mr-2" />
                    <span className="font-bold text-[#d7a097]">
                      (11) 4321-5678
                    </span>
                  </div>
                  <Button className="bg-white hover:bg-gray-100 text-[#d7a097] font-bold py-3 px-6 rounded-lg transition duration-300 shadow-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 mr-2" />
                    Ligar Agora
                  </Button>
                </div>
              </div>
            </div>
          </section>
          {/*<!-- Serviços Section -->*/}
          <section id="servicos" className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <span className="inline-block bg-teal-50 text-teal-primary font-semibold px-3 py-1 rounded-full text-sm mb-3">
                  Nossos Serviços
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Cuidados completos para seu pet
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Oferecemos uma ampla gama de serviços veterinários para
                  garantir a saúde e o bem-estar do seu animal de estimação a
                  qualquer hora do dia.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ServiceCard
                  title="Consultas de Rotina"
                  description="Exames preventivos, vacinação e check-ups completos para manter
                  seu pet saudável e prevenir doenças."
                  icon={
                    <ShieldQuestionMark className="w-8 h-8 text service-icon" />
                  }
                />
                <ServiceCard
                  title="Atendimento de Emergência"
                  description="Equipe preparada para atender emergências 24 horas por dia, 7 dias
                  por semana, com rapidez e eficiência."
                  icon={<Activity className="w-8 h-8 text service-icon" />}
                />
                <ServiceCard
                  title="Cirurgias"
                  description="Procedimentos cirúrgicos realizados com equipamentos modernos e
                  equipe especializada em ambiente estéril."
                  icon={<HeartPulse className="w-8 h-8 text service-icon" />}
                />
                <ServiceCard
                  title="Exames Gerais"
                  description="Realizamos exames laboratoriais gerais com apoio de laboratórios especializados, 
                  oferecendo resultados rápidos e diagnósticos seguros."
                  icon={
                    <BookCheck className="w-8 h-8 text-teal-primary service-icon" />
                  }
                />
                <ServiceCard
                  title="Internação"
                  description="Internação com monitoramento 24 horas, garantindo o conforto e a
                  segurança do seu pet durante o tratamento."
                  icon={<Stethoscope className="w-8 h-8 text service-icon" />}
                />
                <ServiceCard
                  title="Vacinação"
                  description="Vacinação completa para proteger seu pet contra doenças comuns e
                  perigosas, com acompanhamento de calendário vacinal."
                  icon={<Syringe className="w-8 h-8 text service-icon" />}
                />
              </div>
            </div>
          </section>
          {/*<!-- Sobre Section -->*/}
          <section>
            <Sobre />
          </section>
          <section>
            <TestimonialsSection />
          </section>
          <section>
            <ContactSection />
          </section>
        </section>
      </section>
    </main>
  );
}
