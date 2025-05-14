import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      className="relative flex flex-col justify-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://i.imgur.com/8JK5pi7.jpeg')",
        backgroundAttachment: 'fixed', // Efeito parallax
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-white/50 backdrop-blur-sm z-0" />

      <div className="relative z-10 flex flex-col justify-between h-full">
        <div className="container mx-auto px-4 pt-4">
          <div className="flex flex-col md:flex-row items-center md:justify-between gap-4">
            {/* BLOCO DA FOTO + TEXTO */}
            <div className="flex flex-col items-center md:flex-row md:items-center gap-4">
              {/* Foto sem borda e 35% menor */}
              <div className="relative w-20 h-20 rounded-full overflow-hidden shadow-md -mt-20 md:mt-0">
                <img
                  src="https://i.imgur.com/AmeIR2n.jpeg"
                  alt="Daniel"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Texto alinhado ao centro da imagem */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="flex items-center text-gray-800 text-sm">
                  <span className="font-semibold">@landingdanielpro</span>
                </div>
                <span className="text-[12px] text-gray-600 font-medium mt-1">
                  Crio páginas que fazem sua marca parecer grande — mesmo que você esteja começando do zero.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Conteúdo central */}
        <div className="container mx-auto px-4 py-8 text-center">
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-10 drop-shadow-lg text-[#e11d48]"
            data-aos="fade-up"
          >
            <span className="pulse-fade inline-block">
              Chega de parecer amador online.
            </span>
            <span className="block mt-4 space-x-2">
              <span className="shiny-text">Landing pages que geram confiança</span>
              <span className="text-gray-800 drop-shadow-md">e clientes de verdade.</span>
            </span>
          </h1>

          <a
            href="#features"
            className="inline-flex items-center justify-center bg-[#00bcd4] hover:bg-[#0097a7] text-white font-semibold px-10 py-4 rounded-xl text-lg transition-all shadow-xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Descubra agora
            <ArrowDown className="ml-2 h-5 w-5 animate-pulse-down" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
