import Image from "next/image";

export default function sectionHero() {
  return (
    <div className="container mx-auto px-10 relative mb-24">
      <div className="flex flex-col md:flex-row items-center">
        {/* Texto */}
        <div className="md:w-1/2 mb-12 md:mb-0" data-aos="fade-right">
          <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-2xl p-8 rounded-2xl shadow-xl max-w-lg border-neutral-200 border">
            <span className="inline-block bg-red-50 text-red-700 font-bold px-3 py-1 rounded-full text-sm mb-2">
              Atendimento 24 horas
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Cuidado veterinário de{" "}
              <span className="text-teal-500">excelência</span> para seu pet
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Equipe especializada pronta para atender seu animal de estimação a
              qualquer hora do dia ou da noite, com amor e profissionalismo.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                target="blank"
                href="https://api.whatsapp.com/send/?phone=5547996632210&text&type=phone_number&app_absent=0"
                className="bg-teal-600 text-white font-medium py-3 px-6 rounded-lg transition duration-300 text-center shadow-lg hover:shadow-x1 hover:scale-105"
              >
                Agendar Consulta
              </a>
              <a
                href="#servicos"
                className="bg-white text-teal-primary font-medium py-3 px-6 rounded-lg border border-teal-200 transition duration-300 text-center hover:bg-teal-600 hover:scale-105 hover:text-white"
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
                  <span className="font-bold text-teal-primary">20.000</span>{" "}
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
        <div className="md:w-1/2 flex justify-center" data-aos="fade-left">
          <div className="relative">
            <div className="absolute -top-6 -left-6 bg-teal-100 rounded-full w-24 h-24 z-0" />
            <div className="absolute -top-10 -right-46 translate-y-20 bg-neutral-400 rounded-full min-w-96 h-96 z-0" />
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
                  <p className="font-bold text-gray-800">Atendimento 24h</p>
                  <p className="text-sm text-gray-500">Todos os dias</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
