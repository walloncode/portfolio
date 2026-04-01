import {
  ExternalLink,
  Users,
  Database,
  LayoutGrid as Layout,
  Code2,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    let scrollAmount = 0;

    const interval = setInterval(() => {
      if (!container) return;

      scrollAmount += 1;

      if (scrollAmount >= container.scrollWidth - container.clientWidth) {
        scrollAmount = 0;
      }

      container.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  // 🔥 PROJETOS PRINCIPAIS (SEUS REAIS)
  const mainProjects = [
    {
      title: 'Kiuseven',
      description: 'Projeto desenvolvido como freelancer',
      icon: Users,
      color: 'cyan',
      link: 'https://www.kiuseven.com.br',
    },
    {
      title: 'WKcode',
      description: 'Projeto focado em desenvolvimento e soluções digitais',
      icon: Database,
      color: 'green',
      link: 'https://www.wkcode.com.br',
    },
    {
      title: 'Interfaces UI',
      description: 'Inspiradas em Facebook e Starbucks',
      icon: Layout,
      color: 'pink',
      link: '#',
    },
    {
      title: 'Fullstack do Zero',
      description: 'Projeto educacional de desenvolvimento web',
      icon: Code2,
      color: 'purple',
      link: 'https://www.fullstackdozero.com',
    },
  ];

  const projects = [
    {
      title: 'Portfolio',
      description: 'Meu portfólio pessoal com React + TypeScript',
      icon: Code2,
      color: 'cyan',
      link: 'https://github.com/walloncode/portfolio',
    },
    {
      title: 'Facebook Login Prototype',
      description: 'Protótipo de login estilo Facebook',
      icon: Layout,
      color: 'green',
      link: 'https://github.com/kmilasantos/IFRO-3A-ProgWeb-FacebookLoginPrototype-2025',
    },
    {
      title: 'Site de Tarefas',
      description: 'Sistema simples de tarefas em FLASK',
      icon: Database,
      color: 'purple',
      link: 'https://github.com/walloncode/Site-de-tarefas',
    },
    {
      title: 'Cadastro de Alunos',
      description: 'Sistema em Python',
      icon: Users,
      color: 'cyan',
      link: 'https://github.com/walloncode/cadastro-alunos',
    },
    {
      title: 'Projeto Flask',
      description: 'Framework Flask em testes',
      icon: Code2,
      color: 'green',
      link: 'https://github.com/walloncode/projeto-flask',
    },
    {
      title: 'Tela Starbucks',
      description: 'Interface inspirada na Starbucks',
      icon: Layout,
      color: 'pink',
      link: 'https://github.com/walloncode/Tela-do-starbucks',
    },
    {
      title: 'IFROGram Projeto Escolar',
      description: 'Experimentos CSS e layout',
      icon: Code2,
      color: 'purple',
      link: 'https://github.com/walloncode/ifrogram-testee.git',
    },
  ];

  const getColor = (color: string) => {
    const colors: any = {
      cyan: 'border-cyan-400 hover:shadow-cyan-500/50',
      green: 'border-green-400 hover:shadow-green-500/50',
      pink: 'border-pink-400 hover:shadow-pink-500/50',
      purple: 'border-purple-400 hover:shadow-purple-500/50',
    };
    return colors[color];
  };

  const getIcon = (color: string) => {
    const colors: any = {
      cyan: 'text-cyan-400',
      green: 'text-green-400',
      pink: 'text-pink-400',
      purple: 'text-purple-400',
    };
    return colors[color];
  };

  return (
    <section ref={sectionRef} id="projects" className="py-20 px-4 relative">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className={`text-center mb-16 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-5xl font-bold text-white">Projetos em alta</h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-cyan-400 via-green-400 to-pink-400 mt-4"></div>
        </div>

        {/* 🔥 PROJETOS PRINCIPAIS (FIXO) */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">

          {mainProjects.map((project, index) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              className={`p-6 border-2 rounded-xl glass-card transition ${getColor(project.color)}`}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className={`mb-3 ${getIcon(project.color)}`}>
                <project.icon className="w-7 h-7" />
              </div>

              <h3 className="text-white font-bold mb-2">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm">
                {project.description}
              </p>
            </a>
          ))}

        </div>

      </div>

      {/* 🔥 CARROSSEL FULL WIDTH */}
      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] mt-10">

        <h3 className="text-2xl text-white font-bold mb-32 text-center">
          Outros Projetos
        </h3>

        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-hidden scroll-smooth px-10 py-10"
        >
          {projects.map((project) => (
            <a
              key={`carousel-${project.title}`}
              href={project.link}
              target="_blank"
              className="min-w-[300px] flex-shrink-0 p-10 border border-gray-700 rounded-xl glass-card hover:border-cyan-400 transition"
            >
              <div className={`mb-3 ${getIcon(project.color)}`}>
                <project.icon className="w-6 h-6" />
              </div>

              <h4 className="text-white font-bold mb-2">
                {project.title}
              </h4>

              <p className="text-gray-400 text-sm">
                {project.description}
              </p>
            </a>
          ))}
        </div>

      </div>

    </section>
  );
};

export default Projects;