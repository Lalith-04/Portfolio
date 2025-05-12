import { Briefcase } from 'lucide-react';

type Experience = {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
};

const ExperienceSection = () => {
  const experiences: Experience[] = [
    {
      title: "Developer Intern ",
      company: "Dhruthzuci technology solutions pvt.ltd",
      location: "Horamavu Bengaluru, Karnataka",
      period: "Nov-2024 to Feb-2025",
      description: "I'm V. Lalith Kishore, a passionate and Full Stack Developer with hands-on experience in building scalable and intelligent web applications. My expertise lies in developing full-stack solutions using the MERN stack, combined with integrating powerful AI-driven features such as chatbots, voice assistants, and automated systems.",
      achievements: [
        "As a Developer Intern at Dhruthzuci Tech Solutions, I successfully developed a clock-in/clock-out employee tracking system and a support ticketing platform that streamlined internal operations. My projects also include building AI HR chatbots, AI Interviewers, and Call Center Co-Pilots, demonstrating my drive to create real-world solutions using cutting-edge technologies.",
      ]
    },
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My career journey and professional experience in the web development industry.
          </p>
          <div className="h-1 w-20 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                } relative`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary border-4 border-white dark:border-gray-900 z-10">
                  <Briefcase className="w-4 h-4 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>
                
                {/* Timeline content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
                  <div className="glass-card p-6 animate-fade-in">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-primary">{exp.title}</h3>
                      <span className="bg-primary/10 text-primary text-xs font-semibold px-2.5 py-0.5 rounded">
                        {exp.period}
                      </span>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-lg font-semibold">{exp.company}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{exp.location}</p>
                    </div>
                    
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>
                    
                    <div>
                      <h4 className="text-sm font-semibold uppercase text-gray-500 dark:text-gray-400 mb-2">Key Achievements</h4>
                      <ul className="space-y-1 list-disc list-inside text-sm text-gray-600 dark:text-gray-400">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Empty div for layout on opposite side */}
                <div className="hidden md:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
