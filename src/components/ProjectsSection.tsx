import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  technologies: string[];
  github?: string;
  demo?: string;
  featured: boolean;
};

const ProjectsSection = () => {
  const [filter, setFilter] = useState<'all' | 'frontend' | 'backend' | 'fullstack'>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Employee Time Tracker",
      description: "A comprehensive employee clock-in/clock-out system with real-time tracking, attendance analytics, and automated reporting. Features include facial recognition for authentication, geolocation verification, and automated timesheet generation.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
      tags: ["fullstack", "AI"],
      technologies: ["React", "Node.js", "MongoDB", "Express", "Face-API.js", "JWT"],
      github: "https://github.com/lalithkishore/time-tracker",
      demo: "https://time-tracker-demo.example.com",
      featured: true
    },
    {
      id: 2,
      title: "AI HR Assistant",
      description: "An intelligent HR chatbot system that handles employee queries, automates interview scheduling, and provides personalized onboarding assistance. Integrated with natural language processing for understanding complex queries and sentiment analysis.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a",
      tags: ["AI", "fullstack"],
      technologies: ["React", "Node.js", "OpenAI API", "MongoDB", "Express", "Socket.io"],
      github: "https://github.com/lalithkishore/ai-hr-assistant",
      demo: "https://ai-hr-demo.example.com",
      featured: true
    },
    {
      id: 3,
      title: "Support Ticket System",
      description: "A modern support ticketing platform with AI-powered ticket categorization, priority assignment, and automated routing. Features include real-time updates, ticket analytics, and integration with various communication channels.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
      tags: ["fullstack", "automation"],
      technologies: ["React", "Node.js", "MongoDB", "Express", "Redis", "ML Models"],
      github: "https://github.com/lalithkishore/support-system",
      demo: "https://support-system-demo.example.com",
      featured: true
    },
  ];

  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    return project.tags.includes(filter);
  });

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I'm V. Lalith Kishore, a passionate and Full Stack Developer with hands-on experience in building scalable and intelligent web applications. My expertise lies in developing full-stack solutions using the MERN stack, combined with integrating powerful AI-driven features such as chatbots, voice assistants, and automated systems.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              As a Developer Intern at Dhruthzuci Tech Solutions, I successfully developed a clock-in/clock-out employee tracking system and a support ticketing platform that streamlined internal operations. My projects also include building AI HR chatbots, AI Interviewers, and Call Center Co-Pilots, demonstrating my drive to create real-world solutions using cutting-edge technologies.
            </p>
          </div>
          <div className="h-1 w-20 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="flex justify-center flex-wrap gap-2 mb-8">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-sm ${
              filter === 'all'
                ? 'bg-primary text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter('frontend')}
            className={`px-4 py-2 rounded-full text-sm ${
              filter === 'frontend'
                ? 'bg-primary text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
            }`}
          >
            Frontend
          </button>
          <button
            onClick={() => setFilter('backend')}
            className={`px-4 py-2 rounded-full text-sm ${
              filter === 'backend'
                ? 'bg-primary text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
            }`}
          >
            Backend
          </button>
          <button
            onClick={() => setFilter('fullstack')}
            className={`px-4 py-2 rounded-full text-sm ${
              filter === 'fullstack'
                ? 'bg-primary text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
            }`}
          >
            Full Stack
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="glass-card overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-110 duration-500" 
                />
                {project.featured && (
                  <span className="absolute top-2 right-2 bg-secondary text-white text-xs font-semibold px-2 py-1 rounded">
                    Featured
                  </span>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </a>
                  )}
                  
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a 
            href="https://github.com/johndoe" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Github size={18} />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
