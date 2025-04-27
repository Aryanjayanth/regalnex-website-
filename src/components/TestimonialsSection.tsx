
import React, { useEffect, useRef } from 'react';
import { Brain } from 'lucide-react';

interface TestimonialProps {
  name: string;
  username: string;
  avatar: string;
  content: string;
  delay: string;
}

const TwitterCard = ({ name, username, avatar, content, delay }: TestimonialProps) => {
  return (
    <div className="bg-gray-800/40 rounded-xl border border-gray-800 p-6 hover:border-regal-green transition-all hover:-translate-y-2 duration-300 animate-fade-in hover:rotate-1 group shadow-lg shadow-black/20" style={{ animationDelay: delay }}>
      <div className="absolute top-0 left-0 w-full h-1 bg-regal-green rounded-t-xl opacity-80"></div>
      <div className="flex items-center mb-5">
        <img src={avatar} alt={name} className="w-14 h-14 rounded-full mr-4 transition-transform group-hover:scale-110 duration-300 border-2 border-regal-green/30" />
        <div>
          <h4 className="font-bold text-white">{name}</h4>
          <p className="text-gray-400 text-sm">@{username}</p>
        </div>
        <div className="ml-auto">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:animate-pulse duration-700">
            <path d="M22 4H2V20H22V4Z" fill="#1DA1F2" fillOpacity="0.2" />
            <path d="M19.953 7.984c-.012.178-.012.356-.012.534C19.941 13.675 16.169 20 8.29 20v-.003c-2.341 0-4.499-.68-6.29-1.851.33.039.658.058.988.059a8.282 8.282 0 0 0 5.145-1.765 4.144 4.144 0 0 1-3.86-2.859c.247.047.498.07.75.072.356 0 .704-.047 1.036-.138A4.14 4.14 0 0 1 2.8 9.478v-.052c.558.308 1.197.493 1.856.515a4.142 4.142 0 0 1-1.294-5.527 11.751 11.751 0 0 0 8.528 4.303 4.14 4.14 0 0 1 7.054-3.774c.891-.175 1.746-.5 2.522-.945a4.157 4.157 0 0 1-1.816 2.275A8.255 8.255 0 0 0 22 5.659a8.4 8.4 0 0 1-2.047 2.125z" fill="#1DA1F2" />
          </svg>
        </div>
      </div>
      <p className="text-sm leading-relaxed text-gray-200">{content}</p>
      <div className="mt-4 flex justify-end gap-2">
        <span className="text-xs text-gray-400 flex items-center gap-1">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#F91880" fillOpacity="0.7" />
          </svg>
          42
        </span>
        <span className="text-xs text-gray-400 flex items-center gap-1">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z" fill="#1DA1F2" fillOpacity="0.7" />
          </svg>
          18
        </span>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  // Store testimonials data locally within the component
  const testimonials = [
    {
      name: 'Danielle K.',
      username: 'danielle_k',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      content: 'AI automation isn\'t the future—it\'s the present. RegalNex is proving that every day! 🔥 #MachineLearning',
    },
    {
      name: 'James W.',
      username: 'james_w_dev',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      content: 'AI automation is changing the game! Just set up a workflow with @RegalNex and it\'s saving me HOURS every day. 🔥 ☕',
    },
    {
      name: 'Rachel B.',
      username: 'rachel_biz',
      avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
      content: 'RegalNex just automated 80% of my lead generation. What am I even supposed to do with all this free time? 😅',
    },
    {
      name: 'Daniel S.',
      username: 'daniel_automates',
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
      content: 'Seeing RegalNex\'s AI handle customer queries in real-time is mind-blowing. #AI #Chatbots',
    },
    {
      name: 'Michael T.',
      username: 'tech_michael',
      avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
      content: 'Our e-commerce conversion rate jumped 35% after implementing @RegalNex\'s AI product recommendations! Worth every penny. 💯',
    },
    {
      name: 'Emma L.',
      username: 'emma_digital',
      avatar: 'https://randomuser.me/api/portraits/women/29.jpg',
      content: 'Finally an AI solution that actually delivers ROI. @RegalNex has transformed our customer support experience completely! 🚀',
    },
    {
      name: 'Sarah M.',
      username: 'sarah_marketing',
      avatar: 'https://randomuser.me/api/portraits/women/57.jpg',
      content: 'Implemented RegalNex last month and our customer satisfaction scores are already up by 28%. The data insights alone are gold! 📊',
    },
    {
      name: 'Kevin R.',
      username: 'kevin_retail',
      avatar: 'https://randomuser.me/api/portraits/men/52.jpg',
      content: 'As a small business owner, I was skeptical about AI. @RegalNex changed my mind completely. Now it\'s like having an extra team member! 💼',
    },
    {
      name: 'Jennifer H.',
      username: 'jen_ecommerce',
      avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
      content: 'The AI chatbot from @RegalNex handles 90% of our customer inquiries now. My support team can finally focus on complex issues! #GameChanger',
    },
  ];

  const testimonialsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = document.querySelectorAll('.testimonial-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-slide-up');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current);
    }

    return () => {
      if (testimonialsRef.current) {
        observer.unobserve(testimonialsRef.current);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-regal-black border-t border-green-900/20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-black/30 border border-gray-800 rounded-full mb-6 hover:border-regal-green transition-all duration-300">
            <Brain className="mr-2 animate-pulse text-white" size={20} strokeWidth={1.5} />
            <span>What people say</span>
          </div>
          
          <div className="relative mb-8">
            <div className="h-1 w-40 bg-regal-green mx-auto rounded-full shadow-[0_0_10px_rgba(48,189,54,0.7)]"></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent animate-glow shadow-green-500/50">
            Our Clients from X<br />(Twitter)
          </h2>
          <style jsx>{`
            @keyframes glow {
              0%, 100% { text-shadow: 0 0 20px rgba(48, 189, 54, 0.5); }
              50% { text-shadow: 0 0 30px rgba(48, 189, 54, 0.8); }
            }
            .animate-glow {
              animation: glow 2s ease-in-out infinite;
            }
          `}</style>
        </div>

        <div className="overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-regal-black to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-regal-black to-transparent z-10"></div>
          
          <div className="flex flex-col gap-6 md:flex-row">
            <div ref={testimonialsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card transform transition-all duration-300 hover:scale-105">
                  <TwitterCard
                    {...testimonial}
                    delay={`${0.1 + index * 0.1}s`}
                  />
                </div>
              ))}
            </div>
          </div>
          
          <style jsx>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
            .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(calc(-350px * 6 - 6rem)); }
            }
            @media (min-width: 768px) {
              .testimonial-card:hover {
                box-shadow: 0 0 25px rgba(48, 189, 54, 0.2);
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
