import React, { useState } from 'react';
import { 
  Smartphone, 
  Paintbrush, 
  TrendingUp, 
  Palette, 
  Package, 
  HeadphonesIcon, 
  Lock, 
  CloudIcon 
} from 'lucide-react';

const featureItems = [
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: '100% responsiva',
    description: 'Sua página perfeita em qualquer celular, tablet ou computador.',
    moreInfo: 'A página é projetada para se adaptar de maneira dinâmica a diferentes tamanhos de tela, garantindo uma experiência otimizada em qualquer dispositivo.'
  },
  {
    icon: <Paintbrush className="h-6 w-6" />,
    title: 'Design que impressiona',
    description: 'Visual moderno, alinhado à sua identidade — sem template genérico.',
    moreInfo: 'Projetamos sua página com um design único e profissional, destacando a identidade visual da sua marca.'
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: 'Feita para conversão',
    description: 'Estrutura testada para gerar mais cliques, leads e vendas.',
    moreInfo: 'Cada elemento da página é otimizado para facilitar a navegação e aumentar a taxa de conversão.'
  },
  // Adicione os outros itens aqui de maneira similar
];

const Features: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpansion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#F5F7FA]" id="features">
      <div className="container mx-auto px-4">
        <h2 
          className="text-3xl font-bold text-[#2E2E2E] text-center mb-16"
          data-aos="fade-up"
        >
          Você recebe uma página profissional com:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {featureItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 transition-all hover:shadow-md hover:border-[#00F0FF]/20"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div className="w-12 h-12 rounded-full bg-[#00F0FF]/10 flex items-center justify-center text-[#00F0FF] mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-[#2E2E2E] mb-2">{item.title}</h3>

              {/* Exibição do Título Principal e Botão de Expansão */}
              <div className="flex justify-between items-center">
                <p className="text-gray-600 text-sm">{item.description}</p>
                <button 
                  className="text-[#00F0FF] hover:underline focus:outline-none flex items-center"
                  onClick={() => toggleExpansion(index)}
                >
                  <span 
                    className={`transition-transform transform ${expandedIndex === index ? 'rotate-180' : 'rotate-0'} text-xl`}
                  >
                    ↓
                  </span>
                </button>
              </div>

              {/* Animação ao expandir */}
              <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedIndex === index ? 'max-h-screen' : 'max-h-0'}`}>
                <p className="text-gray-600 text-sm mt-2">{item.moreInfo}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
