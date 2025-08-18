import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

const teamMembers = [
  {
    name: "Dra. Yasmin",
    role: "Clinica Geral",
    description:
      "Especialista em Clínica Geral, a Dra. Yasmin dedica-se a cuidar da saúde integral de seus pacientes com atenção, carinho e profundo conhecimento médico. Seu compromisso é oferecer um atendimento humanizado, focado na prevenção e no tratamento eficaz de diversas condições clínicas.",
  },
  {
    name: "Dra. Amanda",
    role: "Anestesista e Clinica Geral",
    description:
      "Com especialização em Anestesiologia e Clínica Geral, a Dra. Amanda une técnicas avançadas para garantir segurança e conforto aos seus pacientes durante procedimentos médicos. Além disso, ela atua na prevenção e acompanhamento clínico, sempre priorizando o bem-estar e a saúde integral.",
  },
  {
    name: "Dra Larissa",
    role: "Clinica Geral",
    description:
      "A Dra. Larissa é especialista em Clínica Geral e tem ampla experiência no atendimento primário de saúde. Seu objetivo é oferecer diagnósticos precisos e tratamentos personalizados, promovendo a qualidade de vida e o cuidado contínuo para seus pacientes.",
  },
  {
    name: "Dra Claudia",
    role: "Cirurgiã e Dermatologista",
    description:
      "Cirurgiã e Dermatologista, a Dra. Claudia combina habilidades cirúrgicas com o cuidado especializado da pele. Ela oferece tratamentos modernos e eficazes para diversas condições dermatológicas, sempre buscando aliar saúde e estética com segurança e excelência.",
  },
];

export function TeamSection() {
  return (
    <section id="equipe" className="py-20 bg-neutral-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-teal-50 text-[#11b5a2] font-bold px-4 py-1 rounded-full text-sm mb-3">
            Nossa Equipe
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Profissionais dedicados ao bem-estar animal
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conheça os veterinários e especialistas que cuidam do seu pet com
            amor, competência e dedicação.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg transition duration-300 hover:shadow-xl hover:scale-105 group"
            >
              <div className="h-64 bg-[#f4e6e3] relative overflow-hidden">
                <div className="absolute inset-0 to-transparent opacity-0 group-hover:opacity-70 transition-opacity flex items-end justify-center pb-6"></div>
              </div>
              <CardContent className="p-6">
                <CardTitle className="font-bold text-gray-800 text-xl mb-1">
                  {member.name}
                </CardTitle>
                <p className="text-[#11b5a2] font-medium mb-3">{member.role}</p>
                <CardDescription className="text-gray-600 text-sm">
                  {member.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
