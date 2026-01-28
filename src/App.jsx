import React, { useState } from 'react';
import teaBg from './assets/tea.jpg';
import { Instagram, Twitter, Facebook, Mail, Leaf } from 'lucide-react';

const App = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden text-[#3E2723] selection:bg-[#D4AF37]/30">
      <div
        className="absolute inset-0 scale-110 bg-center bg-cover brightness-90"
        style={{
          backgroundImage:
            `url(${teaBg})`,
        }}
      />

      <div className="absolute inset-0 bg-linear-to-b from-[#fbf1df]/95 via-[#fbf1df]/85 to-[#fbf1df]" />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-between px-6 py-10">

        <header className="w-full max-w-7xl flex justify-center">
          <div className="flex flex-col items-center group animate-[fadeIn_1.2s_ease-out]">
            <div className="w-20 h-20 border border-[#D4AF37] rounded-full flex items-center justify-center mb-4 transition-all duration-700 group-hover:rotate-360 group-hover:scale-110">
              <Leaf size={32} className="text-[#D4AF37]" />
            </div>
            <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-[#D4AF37] mb-1">
              Chai Culture
            </h2>
            <div className="h-px w-12 bg-[#D4AF37]/40" />
          </div>
        </header>

        <main className="flex-1 flex flex-col items-center justify-center text-center max-w-3xl mt-12 mb-16 animate-[fadeUp_1.4s_ease-out]">

          <div className="mb-10 px-6 py-2 border border-[#D4AF37]/20 rounded-full bg-white/40 backdrop-blur-md shadow-sm">
            <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
              Brewing Something Special • Launching Soon
            </p>
          </div>

          <h1 className="font-serif text-5xl md:text-8xl mb-8 leading-[1.05]">
            Brew the <br />
            <span className="italic text-[#D4AF37] font-light">
              Royal
            </span>{' '}
            Tradition
          </h1>

          <p className="text-lg md:text-xl text-[#3E2723]/70 mb-14 font-light leading-relaxed max-w-xl">
            Discover the majestic essence of Indian heritage. Our premium
            instant chai premix is inspired by time-honored royal recipes,
            crafted for the modern connoisseur.
          </p>

          <div className="w-full max-w-md">
            {!isSubmitted ? (
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row overflow-hidden rounded-sm backdrop-blur-md bg-white/60 shadow-2xl transition-all duration-700 hover:shadow-[#3E2723]/20"
              >
                <input
                  type="email"
                  required
                  placeholder="Request an invitation..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-6 py-4 bg-transparent border border-[#F5E6D3] focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all"
                />
                <button
                  type="submit"
                  className="bg-[#3E2723] text-[#FDFBF7] px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all duration-500 hover:bg-[#D4AF37] hover:tracking-[0.3em]"
                >
                  Join
                </button>
              </form>
            ) : (
              <div className="p-6 bg-white/60 backdrop-blur-md border border-[#D4AF37]/20 rounded-sm animate-[fadeIn_0.8s_ease-out]">
                <p className="text-[#D4AF37] font-medium italic">
                  The royal tea service awaits. Check your inbox soon.
                </p>
              </div>
            )}

            <p className="mt-4 text-[10px] text-[#3E2723]/40 uppercase tracking-[0.2em]">
              Be the first to experience the infusion of history.
            </p>
          </div>
        </main>

        <footer className="w-full max-w-7xl border-t border-[#D4AF37]/10 pt-10 flex flex-col items-center animate-[fadeIn_2s_ease-out]">
          <div className="flex items-center gap-10 mb-8 text-[#3E2723]/60">
            {[Instagram, Twitter, Facebook, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="transition-all duration-300 hover:text-[#D4AF37] hover:scale-125"
              >
                <Icon size={22} strokeWidth={1.5} />
              </a>
            ))}
          </div>

          <div className="text-[10px] uppercase tracking-[0.3em] text-[#3E2723]/40 text-center leading-loose">
            © 2026 Chai Culture Premix Co.<br />
            Sourced from Heritage Estates, India.
          </div>
        </footer>

        <div className="fixed top-0 left-0 w-32 h-32 border-t border-l border-[#D4AF37]/20 m-4 pointer-events-none hidden md:block" />
        <div className="fixed bottom-0 right-0 w-32 h-32 border-b border-r border-[#D4AF37]/20 m-4 pointer-events-none hidden md:block" />
      </div>

      
    </div>
  );
};

export default App;
