"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Loader2,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Endereço",
    details: [
      "Rua Theodoro Holtrup 774, Blumenau, Santa Catarina, Brazil 89035300",
    ],
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Phone,
    title: "Telefones",
    details: ["(47) 99663-2210 (Atendimento)", "(47) 3285-2018 (Emergência)"],
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Mail,
    title: "E-mails",
    details: ["Salvavet123@gmail.com"],
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
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<
    | "idle"
    | "Enviando..."
    | "Mensagem enviada com sucesso!"
    | "Erro ao enviar mensagem."
  >("idle");

  // objeto com mensagens de erro por campo
  const [errors, setErrors] = useState<{
    name?: string;
    phone?: string;
    email?: string;
    subject?: string;
    message?: string;
  }>({});

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    // limpa erro do campo enquanto digita
    setErrors((prev) => ({ ...prev, [id]: undefined }));
  }

  function validate() {
    const newErrors: typeof errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name || !formData.name.trim()) {
      newErrors.name = "Nome é obrigatório.";
    }

    if (!formData.email || !formData.email.trim()) {
      newErrors.email = "E-mail é obrigatório.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "E-mail inválido.";
    }

    if (!formData.subject || !formData.subject.trim()) {
      newErrors.subject = "Assunto é obrigatório.";
    }

    if (!formData.message || !formData.message.trim()) {
      newErrors.message = "Mensagem é obrigatória.";
    }

    return newErrors;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // valida antes de enviar
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);

      // foca no primeiro campo inválido
      const firstInvalid = Object.keys(validationErrors)[0];
      const el = document.getElementById(firstInvalid!);
      if (el) (el as HTMLElement).focus();

      return; // NÃO envia enquanto houver erro
    }

    // limpa erros (se houver) e inicia envio
    setErrors({});
    setStatus("Enviando...");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Mensagem enviada com sucesso!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
        // limpa mensagem de sucesso após alguns segundos
        setTimeout(() => setStatus("idle"), 4500);
      } else {
        setStatus("Erro ao enviar mensagem.");
      }
    } catch (error) {
      setStatus("Erro ao enviar mensagem.");
      console.log("Error sending email:", error);
    }
  }

  function sendWhatsAppMessage() {
    const phoneNumber = "5547996632210"; // seu número com código do país e DDD, sem símbolos
    const message = `
        Olá, meu nome é ${formData.name}.
        Telefone: ${formData.phone}
        E-mail: ${formData.email}
        Assunto: ${formData.subject}
        Mensagem: ${formData.message}`;

    // Monta a URL encode para WhatsApp
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;

    // Abre em nova aba
    window.open(url, "_blank");
  }

  return (
    <section id="contato" className="py-20 bg-neutral-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-white text-[#11b5a2] font-bold px-4 py-2 rounded-full text-sm mb-4">
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
                  className="bg-white shadow-lg hover:scale-105 duration-300 border-0"
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

                <form className="space-y-6" onSubmit={handleSubmit} noValidate>
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
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Seu nome"
                        aria-invalid={!!errors.name}
                        className={`w-full focus:border-[#11b5a2] focus:ring-[#11b5a2] ${
                          errors.name
                            ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                            : "border-gray-200"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-red-600 text-sm mt-1">
                          {errors.name}
                        </p>
                      )}
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
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(11) 99999-9999"
                        className={`w-full focus:border-[#11b5a2] focus:ring-[#11b5a2] ${
                          errors.phone
                            ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                            : "border-gray-200"
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-red-600 text-sm mt-1">
                          {errors.phone}
                        </p>
                      )}
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
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      aria-invalid={!!errors.email}
                      className={`w-full focus:border-[#11b5a2] focus:ring-[#11b5a2] ${
                        errors.email
                          ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                          : "border-gray-200"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
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
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Como podemos ajudar?"
                      aria-invalid={!!errors.subject}
                      className={`w-full focus:border-[#11b5a2] focus:ring-[#11b5a2] ${
                        errors.subject
                          ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                          : "border-gray-200"
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.subject}
                      </p>
                    )}
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
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Conte-nos sobre seu pet e como podemos ajudar..."
                      aria-invalid={!!errors.message}
                      className={`w-full focus:border-[#11b5a2] focus:ring-[#11b5a2] resize-none ${
                        errors.message
                          ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                          : "border-gray-200"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      type="submit"
                      disabled={status === "Enviando..."}
                      className="bg-[#0d9488] text-white font-medium py-3 px-6 rounded-lg transition duration-300 shadow-lg hover:shadow-xl flex items-center justify-center flex-1 hover:scale-105 disabled:opacity-60"
                    >
                      {status === "Enviando..." ? (
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      ) : (
                        <Send className="w-4 h-4 mr-2" />
                      )}
                      {status === "Enviando..."
                        ? "Enviando..."
                        : "Enviar Mensagem"}
                    </Button>

                    <Button
                      type="button"
                      className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 shadow-lg hover:shadow-xl flex items-center justify-center hover:scale-105"
                      onClick={sendWhatsAppMessage}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Whatsapp
                    </Button>
                  </div>

                  {/* Mensagens de status final */}
                  {status === "Mensagem enviada com sucesso!" && (
                    <div
                      className="mt-4 flex items-center text-green-600 font-medium"
                      role="status"
                      aria-live="polite"
                    >
                      <CheckCircle2 className="w-5 h-5 mr-2" />
                      Mensagem enviada com sucesso!
                    </div>
                  )}
                  {status === "Erro ao enviar mensagem." && (
                    <div
                      className="mt-4 flex items-center text-red-600 font-medium"
                      role="alert"
                      aria-live="assertive"
                    >
                      <XCircle className="w-5 h-5 mr-2" />
                      Ocorreu um erro ao enviar. Tente novamente.
                    </div>
                  )}

                  {/* Mensagem geral de validação (opcional) */}
                  {Object.keys(errors).length > 0 && (
                    <div className="mt-3 text-red-600 text-sm">
                      Preencha corretamente os campos em destaque.
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Coluna Direita - Mapa e Informações Adicionais */}
          <div className="space-y-8">
            {/* Mapa do Google */}
            <Card className="bg-white shadow-xl border-0 overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-teal-600 text-white p-6">
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42107.65743036982!2d-49.09765095184376!3d-26.914450510333676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94df1f9f12f72b1d%3A0x8acdc53993b0ae82!2sCentro%20Cl%C3%ADnico%20Veterin%C3%A1rio%20SalvaVet%2024h!5e1!3m2!1spt-BR!2sbr!4v1754420059135!5m2!1spt-BR!2sbr"
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
                        Theodoro Holtrup 774
                      </p>
                      <p className="text-gray-600 text-sm">
                        Vila Nova, Blumenau - SC
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-[#11b5a2] text-[#11b5a2] hover:bg-[#11b5a2] hover:text-white bg-transparent"
                      onClick={() =>
                        window.open(
                          "https://www.google.com/maps/dir/?api=1&destination=Rua+Theodoro+Holtrup+774,+Vila+Nova,+Blumenau,+SC",
                          "_blank"
                        )
                      }
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
                      <p className="font-bold text-lg">(47) 3285-2018</p>
                      <p className="text-red-100 text-sm">
                        Linha direta de emergência
                      </p>
                    </div>
                    <div className="bg-white/20 rounded-lg p-3">
                      <p className="font-bold text-lg">(47) 99663-2210</p>
                      <p className="text-red-100 text-sm">
                        Atendimento geral e suporte
                      </p>
                    </div>
                    <Button className="bg-white hover:bg-gray-100 text-red-600 font-bold py-3 px-6 rounded-lg transition duration-300 w-full hover:scale-105">
                      <Phone className="w-5 h-5 mr-2" />
                      <a href="tel:+55473285-2018">Ligar Agora</a>
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
