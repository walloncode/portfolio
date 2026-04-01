import { ChevronDown, GithubIcon } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div className="cyber-grid"></div>

      <div className="relative z-10 text-center px-4 fade-in">

        {/* 📸 FOTO */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            
            {/* glow atrás */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-green-400 to-pink-500 blur-2xl opacity-40 animate-pulse"></div>

            {/* borda glossy */}
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full p-[3px] bg-gradient-to-r from-cyan-400 via-green-400 to-pink-500">
              
              {/* imagem */}
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                <img
                  src="/foto.jpeg"
                  alt="Wellyson"
                  className="w-full h-full object-cover object-top hover:scale-110 transition duration-500"
                />
              </div>

            </div>

          </div>
        </div>

        {/* 👇 TÍTULO */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 glow-text-strong">
            Wellyson <span className="text-green-400">(Wall)</span>
          </h1>

          <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 via-green-400 to-pink-500 mx-auto mb-8 rounded-full glow-bar"></div>
        </div>

        {/* TEXTO */}
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          Desenvolvedor focado em <span className="text-cyan-400 font-semibold">Frontend</span>,
          <span className="text-green-400 font-semibold"> APIs</span> e
          <span className="text-pink-400 font-semibold"> soluções digitais</span>
        </p>

        {/* BOTÕES */}
        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="cyber-button px-8 py-3 bg-cyan-500/20 border-2 border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/40 transition-all duration-300"
          >
            Ver Projetos
          </button>

          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="cyber-button px-8 py-3 bg-pink-500/20 border-2 border-pink-400 text-pink-400 rounded-lg font-semibold hover:bg-pink-500/40 transition-all duration-300"
          >
            Contato
          </button>

          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="cyber-button px-8 py-3 bg-green-500/20 border-2 border-green-400 text-green-400 rounded-lg font-semibold hover:bg-green-500/40 transition-all duration-300 flex items-center gap-2"
          >
            <GithubIcon /> GitHub
          </button>
        </div>
      </div>

      {/* ⬇️ SCROLL */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cyan-400 animate-bounce cursor-pointer hover:text-green-400 transition-colors"
      >
        <ChevronDown size={48} />
      </button>

    </section>
  );
};

export default Hero;