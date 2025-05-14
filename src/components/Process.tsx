import React from 'react';
import { ArrowRight, ClipboardList, Code, Package } from 'lucide-react';

const Process: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="process">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 
            className="text-3xl font-bold text-[#2E2E2E] text-center mb-16"
            data-aos="fade-up"
          >
            Como Funciona o Processo
          </h2>
          
          <div 
            className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16"
            data-aos="fade-up"
          >
            <div className="flex items-center gap-4 hover:scale-105 transition-transform">
              <div className="w-14 h-14 rounded-full bg-[#F5F7FA] flex items-center justify-center text-[#00F0FF]">
                <ClipboardList className="h-6 w-6" />
              </div>
              <span className="text-lg font-medium text-[#2E2E2E]">
                1. A gente conversa para entender o que você precisa
              </span>
            </div>
            
            <ArrowRight className="h-6 w-6 text-[#00F0FF] hidden md:block" />
            
            <div className="flex items-center gap-4 hover:scale-105 transition-transform">
              <div className="w-14 h-14 rounded-full bg-[#F5F7FA] flex items-center justify-center text-[#00F0FF]">
                <Code className="h-6 w-6" />
              </div>
              <span className="text-lg font-medium text-[#2E2E2E]">
                2. Criação personalizada da sua landing page
              </span>
            </div>
            
            <ArrowRight className="h-6 w-6 text-[#00F0FF] hidden md:block" />
            
            <div className="flex items-center gap-4 hover:scale-105 transition-transform">
              <div className="w-14 h-14 rounded-full bg-[#F5F7FA] flex items-center justify-center text-[#00F0FF]">
                <Package className="h-6 w-6" />
              </div>
              <span className="text-lg font-medium text-[#2E2E2E]">
                3. Receba tudo pronto para usar
              </span>
            </div>
          </div>
          
          <p 
            className="text-center text-gray-600 mb-16"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Após a entrega, faremos ajustes pontuais se necessário — direto, sem enrolação.
            <span className="block font-medium text-[#2E2E2E] mt-2">
              Os arquivos são seus. Hospede onde quiser, sem taxas ou amarras.
            </span>
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div 
              className="bg-[#F5F7FA] rounded-lg p-6 border border-gray-200"
              data-aos="fade-right"
            >
              <h3 className="text-xl font-bold text-[#2E2E2E] mb-4">Sem uma Landing Page Profissional</h3>
              <ul className="text-gray-600">
                <li className="flex items-center gap-2 mb-2">
                  <span className="text-red-500">✕</span>
                  Sem destaque para sua marca
                </li>
                <li className="flex items-center gap-2 mb-2">
                  <span className="text-red-500">✕</span>
                  Design genérico e sem personalidade
                </li>
                <li className="flex items-center gap-2 mb-2">
                  <span className="text-red-500">✕</span>
                  Baixa conversão
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-500">✕</span>
                  Potenciais clientes saem sem engajamento
                </li>
              </ul>
            </div>
            
            <div 
              className="bg-[#F5F7FA] rounded-lg p-6 border-2 border-[#00F0FF] shadow-lg"
              data-aos="fade-left"
            >
              <h3 className="text-xl font-bold text-[#2E2E2E] mb-4">Com uma Landing Page Profissional e Personalizada</h3>
              <ul className="text-gray-600">
                <li className="flex items-center gap-2 mb-2">
                  <span className="text-[#39FF14]">✓</span>
                  Destaque sua marca e conquiste autoridade
                </li>
                <li className="flex items-center gap-2 mb-2">
                  <span className="text-[#39FF14]">✓</span>
                  Design exclusivo que reflete sua identidade
                </li>
                <li className="flex items-center gap-2 mb-2">
                  <span className="text-[#39FF14]">✓</span>
                  Gera confiança imediata nos visitantes
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#39FF14]">✓</span>
                  Maior taxa de conversão, com resultados reais
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
