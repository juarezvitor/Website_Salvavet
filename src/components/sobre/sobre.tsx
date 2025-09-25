import Image from "next/image";

export default function Sobre() {
  return (
    <section id="sobre" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
            <div className="relative">
              <div className="absolute -top-6 -left-6 bg-[#f4e6e3] rounded-full w-24 h-24 z-0"></div>
              <div className="absolute -bottom-6 -right-6 bg-teal-100 rounded-full w-32 h-32 z-0"></div>
              <div className="relative z-10">
                <div className="bg-white p-3 rounded-2xl shadow-xl">
                  <Image
                    src="/Imagem_Sobre.png"
                    alt="Sobre Nós"
                    width={500}
                    height={300}
                    className="rounded-xl w-full h-auto"
                  />
                </div>

                <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-4 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="flex items-center">
                    <div className="bg-[#11b5a2] rounded-full p-2 mr-3">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <p className="font-bold text-gray-800">Desde 2010</p>
                      <p className="text-sm text-gray-500">Cuidando com amor</p>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-lg p-4">
                  <div className="flex items-center">
                    <div className="bg-green-500 rounded-full w-3 h-3 animate-pulse mr-2"></div>
                    <span className="font-bold text-green-600">
                      Aberto Agora
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mt-1">24 horas por dia</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <span className="inline-block bg-teal-50 text-[#11b5a2] font-bold px-4 py-1 rounded-full text-sm mb-3">
              Sobre Nós
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Cuidando do seu pet com excelência a 7 anos
            </h2>
            <p className="text-gray-600 mb-6">
              A Salvavet nasceu da paixão por animais e da necessidade de
              oferecer atendimento veterinário de qualidade a qualquer hora do
              dia ou da noite. Nossa missão é proporcionar cuidados veterinários
              excepcionais, com compaixão e profissionalismo.
            </p>
            <p className="text-gray-600 mb-8">
              Contamos com uma equipe altamente qualificada e instalações
              modernas para garantir o melhor atendimento para seu animal de
              estimação, seja em consultas de rotina ou emergências.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="bg-[#f4e6e3] rounded-full p-2 mr-3">
                  <svg
                    className="w-6 h-6 text-[#11b5a2]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">
                    Equipe Especializada
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Veterinários com formação avançada em diversas áreas.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-[#f4e6e3] rounded-full p-2 mr-3">
                  <svg
                    className="w-6 h-6 text-[#11b5a2]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">
                    Atendimento Humanizado
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Cuidado e carinho com seu pet e acolhimento aos tutores.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-[#f4e6e3] rounded-full p-2 mr-3">
                  <svg
                    className="w-6 h-6 text-[#11b5a2]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">
                    Disponibilidade 24h
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Atendimento ininterrupto todos os dias do ano.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-[#f4e6e3] rounded-full p-2 mr-3">
                  <svg
                    className="w-6 h-6 text-[#11b5a2]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">
                    Tecnologia Avançada
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Equipamentos modernos para diagnósticos precisos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
