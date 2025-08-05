import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";

const teamMembers = [
  {
    name: "Dr. Rafael Oliveira",
    role: "Diretora Clínica",
    description:
      "!lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Dr. Rafael Oliveira",
    role: "Cirurgião",
    description:
      "!lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Dr. Rafael Oliveira",
    role: "Cardiologista",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Dr. Rafael Oliveira",
    role: "Dermatologista",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export function TeamSection() {
  return (
    <section id="equipe" className="py-20 bg-white">
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
