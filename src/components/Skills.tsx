import {
  Code2,
  Palette,
  Boxes,
  Server,
  Globe,
  Layout,
  GitBranch,
  Database,
  Terminal,
  Cloud,
  HeadphonesIcon,
  Cpu,
  Coffee,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    });

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const skillGroups = [
    {
      title: 'Linguagens',
      skills: [
        { name: 'HTML', icon: Code2, color: 'cyan', level: 90 },
        { name: 'CSS', icon: Palette, color: 'green', level: 85 },
        { name: 'JavaScript', icon: Code2, color: 'pink', level: 88 },
        { name: 'TypeScript', icon: Code2, color: 'cyan', level: 80 },
        { name: 'Python', icon: Code2, color: 'green', level: 75 },
        { name: 'Java', icon: Coffee, color: 'pink', level: 70 },
      ],
    },
    {
      title: 'Frameworks & Bibliotecas',
      skills: [
        { name: 'React', icon: Boxes, color: 'cyan', level: 90 },
        { name: 'Node.js', icon: Server, color: 'green', level: 80 },
        { name: 'Flask', icon: Server, color: 'pink', level: 65 },
        { name: 'APIs REST', icon: Globe, color: 'pink', level: 85 },
        { name: 'Vite', icon: Layout, color: 'green', level: 80 },
      ],
    },
    {
      title: 'Infra & Ferramentas',
      skills: [
        { name: 'Git / GitHub', icon: GitBranch, color: 'green', level: 85 },
        { name: 'Banco de Dados', icon: Database, color: 'cyan', level: 75 },
        { name: 'Linux CMD', icon: Terminal, color: 'pink', level: 70 },
        { name: 'AWS', icon: Cloud, color: 'cyan', level: 60 },
        { name: 'WordPress', icon: Globe, color: 'cyan', level: 80 },
        { name: 'Suporte Técnico', icon: HeadphonesIcon, color: 'green', level: 90 },
        { name: 'Arquitetura Front-end', icon: Cpu, color: 'pink', level: 75 },
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'cyan':
        return 'hover:shadow-cyan-500/20 border-cyan-500/30';
      case 'green':
        return 'hover:shadow-green-500/20 border-green-500/30';
      case 'pink':
        return 'hover:shadow-pink-500/20 border-pink-500/30';
      default:
        return 'hover:shadow-white/10 border-white/10';
    }
  };

  return (
    <section ref={sectionRef} className="relative py-20 px-6 overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">

      {/* 🌌 BACKGROUND TECH ANIMADO */}
      <div className="absolute inset-0 overflow-hidden">

        {/* GRID */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#0ff2,1px,transparent_1px),linear-gradient(to_bottom,#0ff2,1px,transparent_1px)] bg-[size:40px_40px] animate-pulse" />

        {/* GLOW ORBS */}
        <div className="absolute w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl top-10 left-10 animate-pulse" />
        <div className="absolute w-72 h-72 bg-pink-500/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse" />
        <div className="absolute w-72 h-72 bg-green-500/20 rounded-full blur-3xl top-1/2 left-1/3 animate-pulse" />

      </div>

      {/* 🌌 PARTICLES BACKGROUND */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute w-2 h-2 bg-cyan-400 rounded-full animate-pulse top-10 left-20" />
        <div className="absolute w-1 h-1 bg-pink-400 rounded-full animate-pulse top-40 left-1/3" />
        <div className="absolute w-2 h-2 bg-green-400 rounded-full animate-pulse top-1/2 left-1/4" />
        <div className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse bottom-20 right-1/4" />
        <div className="absolute w-2 h-2 bg-pink-400 rounded-full animate-pulse bottom-10 right-20" />
      </div>

      <div className="relative max-w-6xl mx-auto space-y-12">

        {skillGroups.map((group, i) => (
          <div key={i} className="space-y-6">
            <h2 className="text-2xl font-bold text-white/90">
              {group.title}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {group.skills.map((skill, index) => (
                <div
                  key={index}
                  className={`group relative p-6 rounded-xl border bg-black/40 backdrop-blur-md
                  transition-all duration-300 ease-out
                  hover:scale-[1.08]
                  hover:-translate-y-2
                  hover:rotate-1
                  hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]
                  active:scale-95
                  ${getColorClasses(skill.color)}
                  ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                >

                  {/* brilho interno */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/10 via-transparent to-pink-500/10 rounded-xl" />

                  <div className="relative flex flex-col items-center text-center space-y-3">

                    <skill.icon className="w-7 h-7 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6 text-white" />

                    <span className="text-sm font-medium text-white/80 group-hover:text-white transition">
                      {skill.name}
                    </span>

                    {/* 🔥 PORCENTAGEM */}
                    <span className="text-xs text-white/60 group-hover:text-white/90 transition">
                      {skill.level}%
                    </span>

                    {/* ⚡ XP BAR */}
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mt-1">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-400 via-green-400 to-pink-400 transition-all duration-700"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                        }}
                      />
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default SkillsSection;