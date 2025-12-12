import { useState, useEffect, useRef } from "react";
import {
  Shield,
  Heart,
  Users,
  MessageCircle,
  HeadphonesIcon,
  CheckCircle,
  HardHat,
  Activity,
} from "lucide-react";
import Navbar from "./components/Navbar";
import fotoWerbet from "./assets/foto.png";
import jingleAudio from "./assets/Música OFC _ Werbet da CIPA.mp3";
import videoCipa from "./assets/video-cipa.mp4";

function App() {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});
  const [isLyricsModalOpen, setIsLyricsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      initial: "W",
      name: "William Menezes",
      role: "Setor de T.I",
      text: "Werbet sempre foi uma pessoa confiável e presente. Sua dedicação à segurança de todos é inspiradora.",
      bgColor: "from-green-50",
      borderColor: "border-green-100",
      circleColor: "bg-green-600",
    },
    {
      id: 2,
      initial: "M",
      name: "Marcos Magno",
      role: "Desenvolvimento de Software",
      text: "Com Werbet na CIPA, sei que terei alguém que realmente se importa e que vai lutar pelos nossos direitos.",
      bgColor: "from-yellow-50",
      borderColor: "border-yellow-100",
      circleColor: "bg-yellow-500",
    },
    {
      id: 3,
      initial: "C",
      name: "Cleidiane Santos",
      role: "Comercial",
      text: "É raro encontrar alguém tão comprometido. Werbet tem meu voto e minha confiança!",
      bgColor: "from-green-50",
      borderColor: "border-green-100",
      circleColor: "bg-green-600",
    },
    {
      id: 4,
      initial: "K",
      name: "Kaique Amaral",
      role: "Setor de T.I",
      text: "Werbet é a pessoa certa para representar a CIPA. Sempre presente, comprometido e disposto a ajudar em qualquer situação!",
      bgColor: "from-green-50",
      borderColor: "border-green-100",
      circleColor: "bg-green-600",
    },
    {
      id: 5,
      initial: "L",
      name: "Leandro Nunes",
      role: "Coordenador de Operações",
      text: "Werbet demonstra comprometimento genuíno com a segurança. Sua liderança, empatia e capacidade de ouvir são qualidades essenciais para representar a CIPA com excelência.",
      bgColor: "from-yellow-50",
      borderColor: "border-yellow-100",
      circleColor: "bg-yellow-500",
    },
    {
      id: 6,
      initial: "I",
      name: "Ivan Almeida",
      role: "Analista de Operações - Pleno",
      text: "Werbet é um colega que realmente se importa com o bem-estar de todos. Sua disposição em resolver problemas e garantir a segurança de cada um o torna um candidato ideal para a CIPA.",
      bgColor: "from-green-50",
      borderColor: "border-green-100",
      circleColor: "bg-green-600",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 2) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 2 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    Object.keys(sectionsRef.current).forEach((key) => {
      const element = sectionsRef.current[key];
      if (element) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible((prev) => ({ ...prev, [key]: true }));
            }
          },
          { threshold: 0.1 }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-700 via-green-600 to-green-800 text-white pt-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-yellow-300 rounded-full opacity-10 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-6 animate-fade-in">
              <div className="inline-block bg-yellow-400 text-green-900 px-4 py-2 rounded-full font-bold text-sm">
                CIPA 2026
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                Werbet Ribeiro
              </h1>
              <p className="text-xl md:text-2xl text-green-50 font-medium">
                Por você, pelo time, pela segurança de todos.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={() => scrollToSection("propostas")}
                  className="bg-yellow-400 text-green-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transform hover:scale-105 transition shadow-lg"
                >
                  Conheça a Proposta
                </button>
                <button
                  onClick={() => scrollToSection("sobre")}
                  className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition border-2 border-white"
                >
                  Sobre o Candidato
                </button>
              </div>
            </div>

            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-400 rounded-3xl transform rotate-6 opacity-20 blur-xl"></div>
                <div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-3xl border-4 border-yellow-400 shadow-2xl">
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden">
                    <img
                      src={fotoWerbet}
                      alt="Foto de Werbet"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      <section
        id="sobre"
        ref={(el) => (sectionsRef.current["sobre"] = el)}
        className={`py-20 bg-gray-50 transition-all duration-1000 ${
          isVisible["sobre"]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Sobre o Candidato
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-green-600 to-yellow-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Sou um profissional comprometido com a segurança e o bem-estar
                de todos os colaboradores. Com anos de experiência e dedicação,
                entendo que a CIPA é muito mais do que prevenir acidentes — é
                criar um ambiente onde cada pessoa se sinta segura, ouvida e
                respeitada.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Minha candidatura é baseada em valores sólidos:{" "}
                <strong className="text-green-700">compromisso</strong>,{" "}
                <strong className="text-green-700">cuidado</strong>,{" "}
                <strong className="text-green-700">presença</strong> e{" "}
                <strong className="text-green-700">responsabilidade</strong>.
                Acredito que a verdadeira segurança começa com a escuta ativa e
                a disposição de agir.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-green-600 transform hover:scale-105 transition">
                <div className="flex items-start gap-4">
                  <Shield className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">
                      O primeiro contato entre você e a segurança
                    </h3>
                    <p className="text-gray-600">
                      Sempre presente e acessível para garantir seu bem-estar.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-yellow-500 transform hover:scale-105 transition">
                <div className="flex items-start gap-4">
                  <Heart className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">
                      Um amigo nas horas difíceis
                    </h3>
                    <p className="text-gray-600">
                      Alguém que escuta, apoia e age com empatia.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-green-600 transform hover:scale-105 transition">
                <div className="flex items-start gap-4">
                  <Activity className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">
                      Uma pessoa sem medo de buscar e resolver
                    </h3>
                    <p className="text-gray-600">
                      Proativo na identificação e solução de problemas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="propostas"
        ref={(el) => (sectionsRef.current["propostas"] = el)}
        className={`py-20 bg-white transition-all duration-1000 ${
          isVisible["propostas"]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Propostas para a CIPA
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-green-600 to-yellow-400 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compromissos concretos para construir um ambiente de trabalho mais
              seguro, saudável e acolhedor para todos.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition border-t-4 border-green-600">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <HardHat className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Segurança Cotidiana
              </h3>
              <p className="text-gray-700">
                Implementar medidas práticas de prevenção e inspeções regulares
                para garantir a segurança diária de todos.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition border-t-4 border-yellow-500">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <HeadphonesIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Escuta Ativa
              </h3>
              <p className="text-gray-700">
                Criar canais abertos de comunicação onde todos possam reportar
                preocupações e sugestões com confiança.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition border-t-4 border-green-600">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Mediação de Conflitos
              </h3>
              <p className="text-gray-700">
                Atuar como ponte entre colaboradores e gestão, promovendo
                diálogo e soluções construtivas.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition border-t-4 border-yellow-500">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Apoio aos Colaboradores
              </h3>
              <p className="text-gray-700">
                Oferecer suporte em questões de saúde física e mental,
                garantindo cuidado integral.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition border-t-4 border-green-600">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Melhor Comunicação Interna
              </h3>
              <p className="text-gray-700">
                Facilitar o fluxo de informações sobre segurança, treinamentos e
                atualizações importantes.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition border-t-4 border-yellow-500">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ações Preventivas
              </h3>
              <p className="text-gray-700">
                Desenvolver programas de capacitação e conscientização para
                prevenir acidentes antes que aconteçam.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="campanha"
        ref={(el) => (sectionsRef.current["midia"] = el)}
        className={`py-20 bg-gray-50 transition-all duration-1000 ${
          isVisible["midia"]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Campanha
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-green-600 to-yellow-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">▶</span>
                </div>
                Vídeo da Campanha
              </h3>
              <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden border-2 border-green-300 shadow-lg">
                <video
                  controls
                  className="w-full h-full"
                  poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'%3E%3Crect fill='%23065f46' width='16' height='9'/%3E%3C/svg%3E"
                >
                  <source src={videoCipa} type="video/mp4" />
                  Seu navegador não suporta o elemento de vídeo.
                </video>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">♪</span>
                </div>
                Jingle da Campanha
              </h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 p-6 rounded-xl border-2 border-yellow-300">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-2xl">♪</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-bold text-gray-900 mb-2">
                          Jingle Oficial
                        </p>
                        <p className="text-sm text-gray-600">Werbet da CIPA</p>
                      </div>
                    </div>
                    <audio controls className="w-full" src={jingleAudio}>
                      Seu navegador não suporta o elemento de áudio.
                    </audio>
                  </div>
                </div>
                <button
                  onClick={() => setIsLyricsModalOpen(true)}
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <span>📝</span>
                  Ver Letra da Música
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="apoios"
        ref={(el) => (sectionsRef.current["depoimentos"] = el)}
        className={`py-20 bg-white transition-all duration-1000 ${
          isVisible["depoimentos"]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Apoio dos Colegas
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-green-600 to-yellow-400 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600">
              Veja o que os colaboradores dizem sobre Werbet
            </p>
          </div>

          {/* Carrossel de Depoimentos */}
          <div className="max-w-5xl mx-auto">
            {/* Slides - 2 Cards por Slide */}
            <div className="relative mb-12">
              <div className="grid md:grid-cols-2 gap-8 transition-all duration-500">
                {[0, 1].map((offset) => {
                  const index = (currentSlide + offset) % testimonials.length;
                  const testimonial = testimonials[index];
                  return (
                    <div
                      key={testimonial.id}
                      className={`bg-gradient-to-br ${testimonial.bgColor} to-white p-8 rounded-2xl shadow-lg border-2 ${testimonial.borderColor} transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-1`}
                    >
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-xl">
                            ★
                          </span>
                        ))}
                      </div>
                      <p className="text-gray-700 mb-6 italic text-base leading-relaxed">
                        "{testimonial.text}"
                      </p>
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-12 h-12 ${testimonial.circleColor} rounded-full flex items-center justify-center text-white font-bold`}
                        >
                          {testimonial.initial}
                        </div>
                        <div>
                          <p className="font-bold text-gray-900">
                            {testimonial.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Botões de Navegação Melhorados */}
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={prevSlide}
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold p-4 rounded-full transition transform hover:scale-125 shadow-lg active:scale-95 flex items-center justify-center w-14 h-14"
                title="Depoimentos anteriores"
              >
                <span className="text-2xl">‹</span>
              </button>

              {/* Indicadores de Slide */}
              <div className="flex gap-3">
                {[0, 1].map((index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-gradient-to-r from-green-600 to-yellow-500 w-10 h-3 rounded-full shadow-lg"
                        : "bg-gray-300 hover:bg-gray-400 w-3 h-3 rounded-full"
                    }`}
                    title={`Ir para slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold p-4 rounded-full transition transform hover:scale-125 shadow-lg active:scale-95 flex items-center justify-center w-14 h-14"
                title="Próximos depoimentos"
              >
                <span className="text-2xl">›</span>
              </button>
            </div>

            {/* Contador de Slides */}
            <div className="text-center text-gray-600 text-sm font-medium">
              Depoimentos {currentSlide + 1}-{Math.min(currentSlide + 2, testimonials.length)} de {testimonials.length}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-green-700 to-green-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <Shield className="w-20 h-20 mx-auto mb-6 text-yellow-400" />
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Vote Consciente. Vote Segurança.
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Juntos, podemos construir um ambiente de trabalho mais seguro,
            saudável e respeitoso para todos.
          </p>
          <div className="inline-block bg-yellow-400 text-green-900 px-8 py-4 rounded-full font-extrabold text-2xl shadow-2xl">
            WERBET RIBEIRO - CIPA 2026
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-10 h-10 text-green-500" />
                <div>
                  <h3 className="text-xl font-bold text-white">CIPA 2026</h3>
                  <p className="text-sm">Werbet Ribeiro</p>
                </div>
              </div>
              <p className="text-gray-400">
                Construindo segurança com responsabilidade e respeito.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Navegação</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => scrollToSection("sobre")}
                    className="text-gray-400 hover:text-green-400 transition"
                  >
                    Sobre o Candidato
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("propostas")}
                    className="text-gray-400 hover:text-green-400 transition"
                  >
                    Propostas
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contato")}
                    className="text-gray-400 hover:text-green-400 transition"
                  >
                    Apoio
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-4">Contato</h4>
              <p className="text-gray-400 mb-2">
                Entre em contato para saber mais sobre as propostas e como
                apoiar a campanha.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © 2026 Werbet Ribeiro - CIPA. Todos os direitos reservados.
            </p>
            <p className="text-green-500 font-semibold mt-2">
              Construindo segurança com responsabilidade e respeito.
            </p>
          </div>
        </div>
      </footer>

      {/* Modal de Letra da Música */}
      {isLyricsModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={() => setIsLyricsModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-gradient-to-r from-yellow-400 to-yellow-500 p-6 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-green-900 flex items-center gap-3">
                  <span className="text-3xl">♪</span>
                  Letra do Jingle
                </h3>
                <button
                  onClick={() => setIsLyricsModalOpen(false)}
                  className="text-green-900 hover:text-green-700 text-3xl font-bold transition"
                >
                  ×
                </button>
              </div>
            </div>

            <div className="p-8">
              <div className="space-y-6 text-gray-800">
                <div>
                  <h4 className="font-bold text-green-700 text-lg mb-2">
                    [Intro]
                  </h4>
                  <p className="leading-relaxed">
                    Chegou quem cuida, quem resolve, quem aparece,
                    <br />
                    No dia a dia ou quando tudo acontece…
                    <br />
                    É ele que a galera bota fé…
                    <br />
                    Werbet chegou, pode contar que dá pé!
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-green-700 text-lg mb-2">
                    [Verso]
                  </h4>
                  <p className="leading-relaxed">
                    Werbet tá na área, sempre atento com a gente.
                    <br />
                    Primeiro contato entre você e a segurança,
                    <br />
                    Cuidado de verdade, respeito e confiança!
                    <br />
                    <br />
                    Um amigo ali nas horas difíceis,
                    <br />
                    Chega, escuta, corre atrás.
                    <br />
                    Sem medo de buscar, sem medo de resolver,
                    <br />É compromisso, é vontade de fazer acontecer!
                  </p>
                </div>

                <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-6 rounded-xl border-l-4 border-yellow-500">
                  <h4 className="font-bold text-yellow-700 text-lg mb-2">
                    [REFRÃO]
                  </h4>
                  <p className="leading-relaxed font-semibold text-green-900">
                    Wer-be-t!
                    <br />
                    Chamou, ele aparece!
                    <br />
                    Wer-be-t!
                    <br />
                    Segurança é o check!
                    <br />
                    Wer-be-t!
                    <br />
                    Chama que ele pode resolver!
                    <br />
                    Confiança e presença — vote e não vai se arrepender…
                    <br />
                    Werbet!
                  </p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <button
                  onClick={() => setIsLyricsModalOpen(false)}
                  className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition transform hover:scale-105"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
