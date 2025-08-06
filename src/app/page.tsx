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
} from "lucide-react";
import Emergencia from "@/components/emergencia";
import { Footer } from "@/components/footer/footer";
import { TeamSection } from "@/components/timeClinica/team_clinical";
import SectionHero from "@/components/sectionHero/sectionHero";

export default function Home() {
  return (
    <main className="min-h-screen bg-teal-50">
      <header className="sticky top-0 z-50">
        <Header />
      </header>

      {/* Hero */}
      <section id="hero" className="relative overflow-hidden py-20 md:py-32">
        <h2 className="sr-only">Início</h2>
        <SectionHero />
      </section>

      {/* Emergência */}
      <section id="emergencia">
        <h2 className="sr-only">Emergência</h2>
        <Emergencia />
      </section>

      {/* Serviços */}
      <section
        id="servicos"
        className="py-20 bg-neutral-200"
        data-aos="fade-right"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-teal-50 text-[#11b5a2] font-bold px-4 py-1 rounded-full text-sm mb-3">
              Nossos Serviços
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Cuidados completos para seu pet
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Oferecemos uma ampla gama de serviços veterinários para garantir a
              saúde e o bem-estar do seu animal de estimação a qualquer hora do
              dia.
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

      {/* Sobre */}
      <section id="sobre" data-aos="fade-left">
        <h2 className="sr-only">Sobre a clínica</h2>
        <Sobre />
      </section>

      {/* Equipe */}
      <section id="equipe" data-aos="fade-right">
        <h2 className="sr-only">Nossa equipe</h2>
        <TeamSection />
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" data-aos="fade-left">
        <h2 className="sr-only">Depoimentos de clientes</h2>
        <TestimonialsSection />
      </section>

      {/* Contato */}
      <section id="contato" data-aos="fade-right">
        <h2 className="sr-only">Entre em contato</h2>
        <ContactSection />
      </section>

      {/* Rodapé */}
      <footer id="footer">
        <Footer />
      </footer>
    </main>
  );
}
