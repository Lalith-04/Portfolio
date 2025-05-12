import { Award, Medal, Trophy, ExternalLink } from 'lucide-react';

type Certificate = {
  title: string;
  issuer: string;
  date: string;
  image: string;
  link?: string;
  type: 'certificate' | 'award' | 'achievement';
};

const CertificatesSection = () => {
  const certificates: Certificate[] = [
    {
      title: "Best Website designing (inter-college)",
      issuer: "Banglore North University",
      date: "may 2024",
      image: "/logos/aws.svg",
      link: "https://www.example.com/certificate",
      type: "award"
    },
    {
      title: "AWS Certification",
      issuer: "AWS",
      date: "jan 2025",
      image: "/logos/mongodb.svg",
      link: "https://www.example.com/certificate",
      type: "certificate"
    },
    {
      title: "Blind Coding ",
      issuer: "Banglore North University",
      date: "Oct 2023",
      image: "/logos/react.svg",
      link: "https://www.example.com/certificate",
      type: "certificate"
    },
    {
      title: "Best Web App Award",
      issuer: "TechHacks 2022",
      date: "Nov 2022",
      image: "/logos/award.svg",
      type: "award"
    },
    {
      title: "1st Place - DevJam Hackathon",
      issuer: "Tech Conference 2021",
      date: "Oct 2021",
      image: "/logos/trophy.svg",
      type: "award"
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "Mar 2021",
      image: "/logos/freecodecamp.svg",
      link: "https://www.example.com/certificate",
      type: "certificate"
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'certificate':
        return <Award className="w-6 h-6 text-[#0EA5E9]" />;
      case 'award':
        return <Trophy className="w-6 h-6 text-[#0EA5E9]" />;
      case 'achievement':
        return <Medal className="w-6 h-6 text-[#0EA5E9]" />;
      default:
        return <Award className="w-6 h-6 text-[#0EA5E9]" />;
    }
  };

  return (
    <section id="certificates" className="min-h-screen py-20 bg-background dark:bg-[#0B1121]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-[#0EA5E9] text-sm font-medium tracking-wider mb-1">RECOGNITION & ACHIEVEMENTS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground dark:text-white mb-4">Certificates & Awards</h2>
          <div className="h-1 w-16 bg-[#0EA5E9] mx-auto"></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div 
              key={index} 
              className="group bg-card dark:bg-[#0F172A] rounded-xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(14,165,233,0.2)]"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent dark:bg-[#1E293B] flex items-center justify-center">
                  {cert.image ? (
                    <img 
                      src={cert.image} 
                      alt={cert.issuer} 
                      className="w-8 h-8"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement?.appendChild(getIcon(cert.type) as unknown as Node);
                      }}
                    />
                  ) : (
                    getIcon(cert.type)
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-bold text-foreground dark:text-white group-hover:text-[#0EA5E9] transition-colors">
                      {cert.title}
                    </h3>
                  </div>
                  
                  <div className="mt-2 space-y-2">
                    <p className="text-sm text-muted-foreground dark:text-gray-400">
                      {cert.issuer}
                    </p>
                    <p className="text-sm text-[#0EA5E9]">
                      {cert.date}
                    </p>
                    
                    {cert.link && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground dark:text-gray-400 hover:text-[#0EA5E9] transition-colors mt-2"
                      >
                        View Certificate
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
