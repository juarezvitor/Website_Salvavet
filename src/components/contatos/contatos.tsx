import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Endereço",
    details: ["Av. Paulista, 1000 - Bela Vista", "São Paulo - SP, 01310-100"],
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Phone,
    title: "Telefones",
    details: ["(11) 4321-5678 (Atendimento)", "(11) 98765-4321 (Emergência)"],
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Mail,
    title: "E-mails",
    details: ["contato@salvavet24h.com.br", "emergencia@salvavet24h.com.br"],
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Clock,
    title: "Funcionamento",
    details: ["24 horas por dia", "7 dias por semana"],
    color: "bg-orange-100 text-orange-600",
  },
];

export function ContactSection() {
  return (
    <section
      id="contato"
      className="py-20 bg-gradient-to-br from-gray-50 to-teal-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-teal-100 text-[#11b5a2] font-semibold px-4 py-2 rounded-full text-sm mb-4">
            Entre em Contato
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Estamos aqui para ajudar você e seu pet
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Nossa equipe está disponível 24 horas por dia para atender suas
            necessidades. Entre em contato conosco ou visite nossa clínica.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Coluna Esquerda - Informações de Contato e Formulário */}
          <div className="space-y-8">
            {/* Cards de Informações */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`rounded-full p-3 ${info.color}`}>
                        <info.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-800 mb-2">
                          {info.title}
                        </h4>
                        {info.details.map((detail, detailIndex) => (
                          <p
                            key={detailIndex}
                            className="text-gray-600 text-sm leading-relaxed"
                          >
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Formulário de Contato */}
            <Card className="bg-white shadow-xl border-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-[#11b5a2] rounded-full p-2 mr-3">
                    <Send className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Envie uma Mensagem
                  </h3>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Nome Completo
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Seu nome"
                        className="w-full border-gray-200 focus:border-[#11b5a2] focus:ring-[#11b5a2]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Telefone
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(11) 99999-9999"
                        className="w-full border-gray-200 focus:border-[#11b5a2] focus:ring-[#11b5a2]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      E-mail
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      className="w-full border-gray-200 focus:border-[#11b5a2] focus:ring-[#11b5a2]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Assunto
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="Como podemos ajudar?"
                      className="w-full border-gray-200 focus:border-[#11b5a2] focus:ring-[#11b5a2]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      rows={4}
                      placeholder="Conte-nos sobre seu pet e como podemos ajudar..."
                      className="w-full border-gray-200 focus:border-[#11b5a2] focus:ring-[#11b5a2] resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-[#0d9488] text-white font-medium py-3 px-6 rounded-lg transition duration-300 shadow-lg hover:shadow-xl flex items-center justify-center flex-1">
                      <Send className="w-4 h-4 mr-2" />
                      Enviar Mensagem
                    </Button>
                    <Button
                      type="button"
                      className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Coluna Direita - Mapa e Informações Adicionais */}
          <div className="space-y-8">
            {/* Mapa do Google */}
            <Card className="bg-white shadow-xl border-0 overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-[#11b5a2] text-white p-6">
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 mr-3" />
                    <div>
                      <h3 className="text-xl font-bold">Nossa Localização</h3>
                      <p className="text-teal-100">
                        Fácil acesso e estacionamento disponível
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative h-80">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975750916406!2d-46.65844368502207!3d-23.561414984691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100!5e0!3m2!1spt-BR!2sbr!4v1647875234567!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  ></iframe>
                </div>

                <div className="p-6 bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-800">
                        Av. Paulista, 1000
                      </p>
                      <p className="text-gray-600 text-sm">
                        Bela Vista, São Paulo - SP
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-[#11b5a2] text-[#11b5a2] hover:bg-[#11b5a2] hover:text-white bg-transparent"
                    >
                      Ver Rotas
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Card de Emergência */}
            <Card className="bg-gradient-to-r from-red-400 to-red-500 text-white shadow-xl border-0">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 animate-pulse" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Emergência 24h</h3>
                  <p className="text-red-100 mb-6">
                    Para situações de emergência, ligue imediatamente
                  </p>
                  <div className="space-y-3">
                    <div className="bg-white/20 rounded-lg p-3">
                      <p className="font-bold text-lg">(11) 98765-4321</p>
                      <p className="text-red-100 text-sm">
                        Linha direta de emergência
                      </p>
                    </div>
                    <Button className="bg-white hover:bg-gray-100 text-red-600 font-bold py-3 px-6 rounded-lg transition duration-300 w-full">
                      <Phone className="w-5 h-5 mr-2" />
                      Ligar Agora
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
