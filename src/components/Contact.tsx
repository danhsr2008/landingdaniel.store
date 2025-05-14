import React from 'react';
import { ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#00F0FF]/10 via-[#00F0FF]/20 to-[#00F0FF]/10" id="contact">

      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            className="text-3xl font-bold text-[#2E2E2E] mb-6"
            data-aos="fade-up"
          >
            Garanta agora sua landing page exclusiva
          </h2>

          <p
            className="text-gray-700 text-lg mb-6"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Receba uma landing page profissional e personalizada para o seu negócio. Eu cuido de tudo, você só diz o que vende.
          </p>

          <p
            className="text-[#FF3C00] font-semibold mb-10"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Últimas vagas disponíveis — não perca a chance de ter sua página pronta para gerar vendas!
          </p>

          <a
            href="https://pay.kiwify.com.br/OXKv5up"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-gradient-to-r from-[#2563eb] to-[#22c55e] hover:from-[#2563eb]/90 hover:to-[#22c55e]/90 text-white font-semibold px-10 py-4 rounded-xl text-lg transition-all shadow-xl animate-bounce-slow"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Quero uma landing como essa agora
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        .animate-bounce-slow {
          animation: bounce-slow 2.4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Contact;
