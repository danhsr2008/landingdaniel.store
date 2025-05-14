import React from 'react';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative pt-12 pb-20 bg-fixed bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: "url('https://i.imgur.com/8JK5pi7.jpeg')",
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm z-0" />
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 
            className="text-3xl font-bold text-[#2E2E2E] mb-8"
            data-aos="fade-up"
          >
            Transformando sua presença digital com soluções feitas sob medida
          </h2>
          
          <div 
            className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mx-auto mb-8 border border-[#00F0FF]"
            data-aos="fade-up"
          >
            <img 
              src="https://i.imgur.com/AmeIR2n.jpeg" 
              alt="Daniel" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <p 
            className="text-lg text-gray-700 leading-relaxed mb-12"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Olá, sou Daniel, e há anos crio soluções digitais personalizadas para comércios locais, como sites, aplicativos Android, e até cardápios digitais. Agora, estou expandindo meu trabalho para as redes sociais, ajudando empresas a se destacarem online. Vamos transformar sua presença digital?
          </p>

          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-gradient-to-r from-[#2563eb] to-[#22c55e] hover:from-[#2563eb]/90 hover:to-[#22c55e]/90 text-white font-semibold px-10 py-4 rounded-xl text-lg transition-all shadow-xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Entre em contato agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
