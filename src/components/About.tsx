import {
  Briefcase,
  Code,
  Database,
  BookOpen,
  Lightbulb,
  Headphones as HeadphonesIcon,
  Award,
  Building2,
  GraduationCap,
  MonitorCheck,
  Trophy,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const experiences = [
  {
    icon: Building2,
    title: 'Freelancer - Kiuseven',
    period: '2024',
    text: 'Desenvolvimento da página web da empresa Kiuseven.',
  },
  {
    icon: Code,
    title: 'WKCode (Web Design)',
    period: '2024',
    text: 'Atuação em projetos de web design e interfaces modernas.',
  },
  {
    icon: Trophy,
    title: '1º Lugar - Projeto CEI',
    period: '2025',
    text: 'Vencedor de projeto de solução inovadora para um problema real, com a proposta PULSEID.',
  },
  {
    icon: GraduationCap,
    title: 'Formado em Técnico em Informática - IFRO',
    period: '2023 - 2025',
    text: 'Formação técnica em informática pelo IFRO, com foco em desenvolvimento, suporte e sistemas.',
  },
  {
    icon: Database,
    title: 'Noções básicas de Redes de Computadores',
    period: '2023 - 2025',
    text: 'Conhecimentos fundamentais em redes, protocolos, configuração básica e suporte de infraestrutura.',
  },
  {
    icon: GraduationCap,
    title: 'Cursando ADS - IFRO',
    period: '2025 - atualmente',
    text: 'Análise e Desenvolvimento de Sistemas no IFRO.',
  },
  {
    icon: BookOpen,
    title: 'Monitor / Professor',
    period: '2025',
    text: 'Aulas de HTML e CSS básico em projeto escolar.',
  },
  {
    icon: MonitorCheck,
    title: 'Estágio - LapTop Informática',
    period: '2024',
    text: 'Manutenção e suporte do censo escolar em servidor.',
  },
];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen py-20 px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* TÍTULO */}
        <div className={`text-center mb-16 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 glow-text">
            Sobre Mim
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto rounded-full glow-bar"></div>
        </div>

        {/* TEXTO + FOTO */}
        <div
          className={`glass-card p-8 md:p-12 mb-12 ${
            isVisible ? 'slide-in-left' : 'opacity-0'
          }`}
        >
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">

            {/* TEXTO */}
            <div className="flex-1 space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Minha jornada na programação começou aos 15 anos no IFRO (Instituto Federal de Rondônia),
                e desde aquele primeiro "Hello World", me apaixonei por desenvolvimento web. O que me fascina
                é a capacidade de transformar ideias em soluções reais e visuais.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                Atualmente, com 18 anos, curso Análise e Desenvolvimento de Sistemas no IFRO,
                desenvolvendo projetos pessoais e acadêmicos enquanto aprimoro minhas habilidades.
                <span className="text-cyan-400 font-semibold">
                  {" "}Código é transformar ideias em realidade.
                </span>
              </p>
            </div>

            {/* FOTO */}
            <div className="flex-shrink-0">
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden border border-cyan-400/30 shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 hover:scale-105">
                <img
                  src="/foto.jpeg"
                  alt="Foto de Wellyson"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

          </div>
        </div>

        {/* EXPERIÊNCIAS EM CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`glass-card p-6 border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300 hover:scale-[1.02] ${
                isVisible ? 'scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 rounded-lg bg-cyan-500/10 border border-cyan-400/30">
                  <exp.icon className="w-6 h-6 text-cyan-400" />
                </div>

                <h3 className="text-white font-semibold text-lg">
                  {exp.title}
                </h3>
              </div>
              <p className="text-cyan-400 text-sm mb-1">{exp.period}</p>
              <p className="text-gray-300 leading-relaxed">
                {exp.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;