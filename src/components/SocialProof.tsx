import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const videoData = [
  {
    id: 1,
    thumbnail: 'https://i.imgur.com/tmxIUxL.jpeg',
    client: 'Juliana',
    comment: 'Tudo certo e entregue rapidinho!'
  },
  {
    id: 2,
    thumbnail: 'https://i.imgur.com/CSnPZdk.jpeg',
    client: 'Lucas',
    comment: 'Ficou top demais mano, era exatamente o que eu queria.'
  },
  {
    id: 3,
    thumbnail: 'https://i.imgur.com/sXqI64z.jpeg',
    client: 'Alexandre',
    comment: 'Página pronta e do jeito que combinamos.'
  }
];

const testimonials = [
  {
    name: 'Ana Luiza',
    text: 'Ficou muito melhor do que eu esperava.'
  },
  {
    name: 'Ricardo Oliveira',
    text: 'Meu perfil ficou mais profissional na hora.'
  },
  {
    name: 'Bianca Santos',
    text: 'Recebi tudo em menos de 24h.'
  }
];

const SocialProof: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const { current } = carouselRef;
      const scrollAmount = 320;
      current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-white" id="social-proof">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#2E2E2E] text-center mb-16" data-aos="fade-up">
          Provas reais. Gente real. Resultados entregues.
        </h2>

        {/* Carousel */}
        <div className="relative mb-20" data-aos="fade-up">
          <div 
            className="absolute top-1/2 left-4 -translate-y-1/2 z-10 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center cursor-pointer shadow-md hover:bg-white transition-all"
            onClick={() => scroll('left')}
          >
            <ChevronLeft className="h-6 w-6 text-[#2E2E2E]" />
          </div>

          <div 
            ref={carouselRef}
            className="flex overflow-x-auto gap-4 pb-4 hide-scrollbar snap-x snap-mandatory"
          >
            {videoData.map((video) => (
              <div key={video.id} className="flex-shrink-0 w-64 snap-start">
                <div className="bg-[#F5F7FA] rounded-lg overflow-hidden relative shadow-md">
                  <div className="aspect-[9/16] relative">
                    <img 
                      src={video.thumbnail} 
                      alt={`Prova de ${video.client}`}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-2 left-2 bg-[#00F0FF] text-white text-xs font-bold px-2 py-1 rounded">
                      Entregue
                    </span>
                  </div>
                  <div className="p-3">
                    <h4 className="font-medium text-[#2E2E2E]">{video.client}</h4>
                    <p className="text-sm text-gray-600">{video.comment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div 
            className="absolute top-1/2 right-4 -translate-y-1/2 z-10 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center cursor-pointer shadow-md hover:bg-white transition-all"
            onClick={() => scroll('right')}
          >
            <ChevronRight className="h-6 w-6 text-[#2E2E2E]" />
          </div>
        </div>

        {/* Testimonials */}
        <h3 className="text-2xl font-bold text-[#2E2E2E] text-center mb-10" data-aos="fade-up">
          O que estão dizendo
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-[#F5F7FA] p-6 rounded-lg border border-gray-100 shadow-md"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#00F0FF] fill-[#00F0FF]" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <p className="font-medium text-[#2E2E2E]">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
