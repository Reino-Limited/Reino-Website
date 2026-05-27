import { Link2, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-reino-navy border-t border-reino-gold/10 pt-16 pb-8 z-20 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
               <img src="/REINO.png" alt="REINO Academy" className="h-10 w-auto" />
            </div>
            <p className="text-reino-muted max-w-sm leading-relaxed text-sm">
              Lead. Build. Transcend. <br />
              Providing data, technology, and strategy for global excellence.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-extrabold uppercase tracking-widest mb-6 text-sm font-sans">Connect</h4>
            <ul className="space-y-4 text-reino-muted text-sm font-sans font-normal">
              <li>
                <a 
                  href="https://linktr.ee/thereinohq" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-reino-gold transition-all duration-300 group"
                >
                  <Link2 className="mr-2 group-hover:rotate-45 transition-transform" size={16} /> 
                  Linktree
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com/company/reinolimited" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-[#0077B5] transition-all duration-300"
                >
                  <Linkedin className="mr-2" size={16} fill="currentColor" /> 
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="mailto:reinohq@gmail.com" 
                  className="flex items-center hover:text-reino-gold transition-all duration-300"
                >
                  <Mail className="mr-2" size={16} /> 
                  Email Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 text-[10px] text-reino-muted uppercase tracking-[0.2em] text-center font-sans font-normal">
          <p>&copy; {currentYear} REINO LIMITED. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
