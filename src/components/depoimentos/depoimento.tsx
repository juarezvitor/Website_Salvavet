import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Star, User } from "lucide-react";

const depoimentos = [
  {
    name: "Fernanda Almeida",
    petName: "Thor",
    rating: 5,
    comment:
      "Meu cachorro teve uma emergência no meio da noite e a equipe da VetCare24h foi incrível! Atendimento rápido e cuidadoso. Salvaram a vida do meu Thor e me mantiveram informada durante todo o processo.",
  },
  {
    name: "Roberto Mendes",
    petName: "Nina",
    rating: 5,
    comment:
      "Levo minha gata para consultas regulares na VetCare24h e sempre fico impressionada com o carinho e profissionalismo da equipe. A Dra. Ana é excepcional e sempre explica tudo detalhadamente. Recomendo muito!",
  },
  {
    name: "Juliana Santos",
    petName: "Max",
    rating: 5,
    comment:
      "Meu cachorro precisou de uma cirurgia delicada e toda a equipe da VetCare24h foi excepcional. O Dr. Carlos é um cirurgião incrível e o acompanhamento pós-operatório foi perfeito. Hoje meu pet está 100% recuperado!",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-teal-100 text-[#11b5a2] font-semibold px-3 py-1 rounded-full text-sm mb-3">
            Depoimentos
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Veja os depoimentos de tutores que confiaram seus pets aos nossos
            cuidados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {depoimentos.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg relative"
            >
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                <svg
                  className="w-12 h-12 text-[#f4e6e3]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <CardHeader>
                <div className="mb-6">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <CardDescription className="text-gray-600 italic mb-8">
                  {testimonial.comment}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-[#f4e6e3] flex items-center justify-center mr-4">
                    <User className="w-6 h-6 text-[#11b5a2]" />
                  </div>
                  <div>
                    <CardTitle className="font-bold text-gray-800 text-base">
                      {testimonial.name}
                    </CardTitle>
                    <p className="text-gray-500 text-sm">
                      Tutor do {testimonial.petName}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
