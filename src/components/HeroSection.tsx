import { ArrowDown, Download, Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import Image from '../Assets/profile4.jpg';

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const [showSubtitle, setShowSubtitle] = useState(false);
  const fullText = 'Full Stack Developer';
  const typingSpeed = 100;
  
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.substring(0, typedText.length + 1));
      }, typingSpeed);
      
      return () => clearTimeout(timeout);
    } else {
      const subtitleTimeout = setTimeout(() => {
        setShowSubtitle(true);
      }, 300);
      
      return () => clearTimeout(subtitleTimeout);
    }
  }, [typedText]);

  const socialLinks = [
    { name: 'Github', icon: <Github size={20} />, url: 'https://github.com/johndoe' },
    { name: 'Linkedin', icon: <Linkedin size={20} />, url: 'https://linkedin.com/in/johndoe' },
    { name: 'Twitter', icon: <Twitter size={20} />, url: 'https://twitter.com/johndoe' }
  ];

  return (
    <section id="home" className="min-h-screen bg-[#0B1121] flex items-center justify-center relative overflow-hidden py-16">
      {/* Gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-[#0EA5E9]/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-8">
            <div 
              className="space-y-4 transform transition-all duration-700 ease-out"
              style={{ opacity: showSubtitle ? 1 : 0, transform: showSubtitle ? 'translateY(0)' : 'translateY(20px)' }}
            >
              <div className="inline-block">
                <p className="text-lg font-medium text-[#0EA5E9] bg-[#0EA5E9]/10 px-4 py-1 rounded-full border border-[#0EA5E9]/20">
                  Hello, I'm
                </p>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Lalith Kishore
              </h1>
              
              <div className="h-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#0EA5E9]">
                  {typedText}
                  <span className="animate-pulse ml-1">|</span>
                </h2>
              </div>
              
              <div className={`transition-all duration-1000`}>
                <h3 className="text-xl md:text-2xl font-medium text-gray-400">
                  MERN Stack | React Native | AI Integration
                </h3>
              </div>
            </div>
            
            <p className="text-lg text-gray-300 max-w-xl leading-relaxed">
              I build exceptional and accessible digital experiences for the web, specializing in creating modern, responsive websites and applications that solve real-world problems.
            </p>
            
            <div className="flex flex-wrap gap-5 pt-4">
              <Button 
                size="lg"
                className="bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white group transition-all duration-300 hover:shadow-lg hover:shadow-[#0EA5E9]/25"
              >
                <Download size={18} className="mr-2 transition-transform group-hover:-translate-y-1" />
                Download Resume
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-[#0EA5E9] text-[#0EA5E9] group hover:bg-[#0EA5E9]/10 transition-all duration-300"
              >
                <Mail size={18} className="mr-2 transition-transform group-hover:rotate-12" />
                Contact Me
              </Button>
            </div>
            
            <div className="flex items-center gap-6 pt-4">
              {socialLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-[#1E293B] text-[#0EA5E9] hover:bg-[#0EA5E9]/10 hover:text-[#0EA5E9] transition-all duration-300 hover:scale-110"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div className="lg:w-2/5">
            <div className="relative group">
              {/* Gradient background */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#0EA5E9] to-[#0EA5E9]/50 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              
              {/* Profile image */}
              <div className="relative rounded-full p-2 bg-[#1E293B] ring-1 ring-gray-700/50 backdrop-blur-xl transition-all duration-500 group-hover:scale-[1.02]">
                <img 
                  src={Image} 
                  alt="Lalith Kishore - Full Stack Developer" 
                  className="rounded-full w-72 h-72 md:w-96 md:h-96 object-cover"
                />
                
                {/* Decorative ring */}
                <div className="absolute -inset-4 rounded-full border-2 border-dashed border-[#0EA5E9]/30 animate-spin-slow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;