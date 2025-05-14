import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        className="flex justify-between items-center w-full text-left"
        onClick={onClick}
      >
        <h3 className="font-medium text-lg text-[#2E2E2E]">{question}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-[#00F0FF]" />
        ) : (
          <ChevronDown className="h-5 w-5 text-[#00F0FF]" />
        )}
      </button>
      
      {isOpen && (
        <div className="mt-2 text-gray-600 pl-0">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqItems = [
    {
      question: 'Quanto tempo leva para eu receber minha landing?',
      answer: 'Em até 48h após o envio do formulário.'
    },
    {
      question: 'Eu posso editar depois?',
      answer: 'Sim, você recebe os arquivos e tem liberdade total.'
    },
    {
      question: 'E se eu quiser algo muito específico?',
      answer: 'A gente ajusta o que for necessário dentro do combinado.'
    },
    {
      question: 'Você também hospeda pra mim?',
      answer: 'Recebe tudo pronto. Precisa de hospedagem? Também resolvo isso.'
    },
    {
      question: 'Como eu começo?',
      answer: 'Fez o pagamento? Me chama no Instagram ou aguarde que entro em contato via WhatsApp assim que for aprovado.'
    }
  ];
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section className="py-20 bg-[#F5F7FA]" id="faq">
      <div className="container mx-auto px-4">
        <h2 
          className="text-3xl font-bold text-[#2E2E2E] text-center mb-12"
          data-aos="fade-up"
        >
          Perguntas Frequentes
        </h2>
        
        <div className="max-w-3xl mx-auto" data-aos="fade-up">
          {faqItems.map((item, index) => (
            <FAQItem 
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
