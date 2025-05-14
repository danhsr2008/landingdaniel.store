import React from 'react';
import { Instagram, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-10 bg-[#2E2E2E] text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Identidade da Marca */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#00F0FF]">
              <img 
                src="https://i.imgur.com/AmeIR2n.jpeg" 
                alt="Daniel Ribeiro" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm">@landingdanielpro</span>
              <div className="text-xs text-gray-300">Especialista em Landing Pages de Alta Conversão</div>
            </div>
          </div>

          {/* Links de Contato */}
          <div className="flex gap-6">
            <a href="https://www.instagram.com/landingdanielpro" className="hover:text-[#00F0FF] transition-colors" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="mailto:danhsr2025@gmail.com" className="hover:text-[#00F0FF] transition-colors" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
            <a href="tel:+5531991027795" className="hover:text-[#00F0FF] transition-colors" aria-label="Telefone">
              <Phone className="h-5 w-5" />
            </a>
          </div>

          {/* Direitos Autorais */}
          <div className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Daniel Ribeiro. Todos os direitos reservados.
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-6">
          <a
            href="#contact"
            className="text-[#00F0FF] text-sm font-semibold hover:underline"
          >
            Fale conosco agora
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
