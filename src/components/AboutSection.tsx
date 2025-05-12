import { 
  Code, 
  Database, 
  Server, 
  Globe, 
  Briefcase, 
  Book, 
  Star, 
  Award, 
  Trophy, 
  Github, 
  Cloud, 
  Network, 
  Snowflake, 
  FileCode 
} from 'lucide-react';
import { cn } from '@/lib/utils';
import React from 'react';

const AboutSection = () => {
  const techStack = [
    { 
      name: 'MongoDB', 
      icon: <Database size={24} className="text-green-500" />, 
      category: 'database' 
    },
    { 
      name: 'Express.js', 
      icon: <Server size={24} className="text-gray-500" />, 
      category: 'backend' 
    },
    { 
      name: 'React', 
      icon: <Code size={24} className="text-blue-500" />, 
      category: 'frontend' 
    },
    { 
      name: 'Node.js', 
      icon: <Server size={24} className="text-green-500" />, 
      category: 'backend' 
    },
    { 
      name: 'Supabase', 
      icon: <Database size={24} className="text-emerald-500" />, 
      category: 'database' 
    },
    {   
      name: 'GitHub', 
      icon: <Github size={24} className="text-gray-700 dark:text-gray-300" />, 
      category: 'devops' 
    },
    { 
      name: 'Docker', 
      icon: <Server size={24} className="text-blue-500" />, 
      category: 'devops' 
    },
    { 
      name: 'TypeScript', 
      icon: <Code size={24} className="text-blue-600" />, 
      category: 'frontend' 
    },
    {
      name: 'AWS',
      icon: <Cloud size={24} className="text-orange-500" />,
      category: 'devops'
    },
    {
      name: 'REST API',
      icon: <Network size={24} className="text-purple-500" />,
      category: 'backend'
    },
    {
      name: 'Snowflake',
      icon: <Snowflake size={24} className="text-blue-400" />,
      category: 'database'
    },
    {
      name: 'Python',
      icon: <FileCode size={24} className="text-yellow-500" />,
      category: 'backend'
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Applications',
      institution: 'Banglore North University',
      duration: '2022-2025',
      description: 'Specialized in Web Technologies and Cloud Computing',
      Certification: 'Cloud Computing',
      CGPA: '8.89/10',
      Achievements:'Best Website design in inter-college contest ',
    },
  ];

  return (
    <section id="about" className="min-h-screen py-8 bg-background dark:bg-[#0B1121] text-foreground dark:text-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-6">
          <p className="text-[#0EA5E9] text-sm font-medium mb-1 mt-7">ABOUT ME</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Know Me More</h2>
          <div className="h-1 w-16 bg-[#0EA5E9] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="bg-card dark:bg-[#0F172A] p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold flex items-center gap-2 mb-3">
                <span className="text-[#0EA5E9]">&gt;</span> Personal Introduction
              </h3>
              <div className="space-y-2 text-sm text-muted-foreground dark:text-gray-300">
                <p>I'm a passionate and driven full-stack developer with a strong foundation in the MERN stack. I recently completed a developer internship at Dhruthzuci Tech Solutions, where I worked on real-time applications like employee clock-in/clock-out systems and internal task management tools.</p>
                <p>I enjoy building innovative tech solutions that solve real-world problems, and I'm always eager to learn and take on new challenges. Outside of coding, I enjoy staying up to date with the latest in AI and exploring ways to integrate it into my projects.</p>
                <p>I'm excited to grow further in the tech industry and contribute to impactful development teams.</p>
              </div>
            </div>

            <div className="bg-card dark:bg-[#0F172A] p-4 rounded-lg shadow-md">
              <div className="flex items-center gap-2 mb-4">
                <Book className="text-[#0EA5E9]" size={20} />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              
              <div className="bg-accent dark:bg-[#1E293B] p-4 rounded-lg border-l-4 border-[#0EA5E9]">
                <h4 className="text-xl text-[#0EA5E9] font-semibold mb-1">
                  {education[0].degree}
                </h4>
                <p className="text-base text-muted-foreground dark:text-gray-300 mb-3">
                  {education[0].institution}
                </p>
                
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center text-muted-foreground dark:text-gray-400">
                    <Briefcase size={16} className="mr-2" />
                    <span>{education[0].duration}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground dark:text-gray-400">
                    <Star size={16} className="mr-2" />
                    <span>CGPA: {education[0].CGPA}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center text-muted-foreground dark:text-gray-400">
                    <Award size={16} className="mr-2 text-[#0EA5E9]" />
                    <span>Certification: {education[0].Certification}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground dark:text-gray-400">
                    <Trophy size={16} className="mr-2 text-[#0EA5E9]" />
                    <span>Achievement: {education[0].Achievements}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card dark:bg-[#0F172A] p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Globe className="text-[#0EA5E9]" size={18} />
                <span>My Expertise</span>
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-accent dark:bg-[#1E293B] p-3 rounded-lg">
                  <Globe className="text-[#0EA5E9] mb-2" size={13} />
                  <h4 className="text-sm font-semibold mb-1">MERN Stack</h4>
                  <p className="text-xs text-muted-foreground dark:text-gray-400">Full-stack development with modern practices</p>
                </div>
                <div className="bg-accent dark:bg-[#1E293B] p-3 rounded-lg">
                  <Server className="text-[#0EA5E9] mb-2" size={13} />
                  <h4 className="text-sm font-semibold mb-1">Cloud & DevOps</h4>
                  <p className="text-xs text-muted-foreground dark:text-gray-400">AWS, Docker, and CI/CD pipelines</p>
                </div>
                <div className="bg-accent dark:bg-[#1E293B] p-3 rounded-lg">
                  <Database className="text-[#0EA5E9] mb-2" size={13} />
                  <h4 className="text-sm font-semibold mb-1">Data Engineering</h4>
                  <p className="text-xs text-muted-foreground dark:text-gray-400">Snowflake and Python data pipelines</p>
                </div>
                <div className="bg-accent dark:bg-[#1E293B] p-3 rounded-lg">
                  <Code className="text-[#0EA5E9] mb-2" size={13} />
                  <h4 className="text-sm font-semibold mb-1">API Development</h4>
                  <p className="text-xs text-muted-foreground dark:text-gray-400">RESTful APIs with Node.js</p>
                </div>
              </div>
            </div>

            <div className="bg-card dark:bg-[#0F172A] p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Code className="text-[#0EA5E9]" size={18} />
                <span>Tech Stack</span>
              </h3>
              <div className="grid grid-cols-4 gap-2">
                {techStack.map((tech) => (
                  <div 
                    key={tech.name}
                    className={cn(
                      "bg-accent dark:bg-[#1E293B] p-2 rounded-lg",
                      "flex flex-col items-center justify-center",
                      "hover:bg-accent/80 dark:hover:bg-[#2D3B4F] transition-colors duration-300",
                    )}
                  >
                    {tech.icon}
                    <span className="text-xs mt-1 text-muted-foreground dark:text-gray-400">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
