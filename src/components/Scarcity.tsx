import React from 'react';
import { Clock } from 'lucide-react';

const Scarcity: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#00F0FF]/10 via-[#00F0FF]/20 to-[#00F0FF]/10">
      <div className="container mx-auto px-4 text-center">
        
        <div 
          className="flex items-center justify-center gap-3 mb-4"
          data-aos="fade-up"
        >
          <Clock className="h-6 w-6 text-[#00F0FF]" />
          <h2 className="text-2xl md:text-3xl font-bold text-[#2E2E2E]">
            Últimas vagas da semana
          </h2>
        </div>

        <p 
          className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-10"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Estou aceitando <span className="font-semibold text-[#2E2E2E]">apenas 3 novos projetos por semana</span> para garantir entrega rápida e personalizada. Se as vagas fecharem, só na próxima semana.
        </p>

        <a 
          href="#contact" 
          className="inline-flex items-center justify-center bg-gradient-to-r from-[#2563eb] to-[#22c55e] hover:from-[#2563eb]/90 hover:to-[#22c55e]/90 text-white font-semibold px-10 py-4 rounded-xl text-lg transition-all shadow-xl animate-pulse"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Reservar meu projeto agora
        </a>
      </div>
    </section>
  );
};

export default Scarcity;
