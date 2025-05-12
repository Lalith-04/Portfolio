import { Code, Database, Server, Github, Wrench } from 'lucide-react';

type Skill = {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'tools';
};

const SkillsSection = () => {
  const skills: Skill[] = [
    // Frontend
    { name: 'React', level: 90, category: 'frontend' },
    { name: 'HTML & CSS', level: 95, category: 'frontend' },
    { name: 'JavaScript', level: 90, category: 'frontend' },
    { name: 'TypeScript', level: 85, category: 'frontend' },
    { name: 'Tailwind CSS', level: 80, category: 'frontend' },
    { name: 'Redux', level: 75, category: 'frontend' },
    
    // Backend
    { name: 'Node.js', level: 85, category: 'backend' },
    { name: 'Express', level: 80, category: 'backend' },
    { name: 'REST APIs', level: 90, category: 'backend' },
    { name: 'GraphQL', level: 70, category: 'backend' },
    
    // Database
    { name: 'MongoDB', level: 85, category: 'database' },
    { name: 'PostgreSQL', level: 75, category: 'database' },
    { name: 'Redis', level: 65, category: 'database' },
    
    // DevOps
    { name: 'Docker', level: 75, category: 'devops' },
    { name: 'GitHub Actions', level: 70, category: 'devops' },
    { name: 'AWS', level: 65, category: 'devops' },
    
    // Tools
    { name: 'Git', level: 90, category: 'tools' },
    { name: 'VS Code', level: 95, category: 'tools' },
    { name: 'Postman', level: 85, category: 'tools' },
    { name: 'Figma', level: 70, category: 'tools' },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'frontend':
        return <Code className="w-8 h-8 text-[#0EA5E9] group-hover:text-white transition-colors" />;
      case 'backend':
        return <Server className="w-8 h-8 text-[#0EA5E9] group-hover:text-white transition-colors" />;
      case 'database':
        return <Database className="w-8 h-8 text-[#0EA5E9] group-hover:text-white transition-colors" />;
      case 'devops':
        return <Github className="w-8 h-8 text-[#0EA5E9] group-hover:text-white transition-colors" />;
      case 'tools':
        return <Wrench className="w-8 h-8 text-[#0EA5E9] group-hover:text-white transition-colors" />;
      default:
        return null;
    }
  };

  const getCategoryName = (category: string) => {
    switch (category) {
      case 'frontend':
        return 'Frontend Development';
      case 'backend':
        return 'Backend Development';
      case 'database':
        return 'Databases';
      case 'devops':
        return 'DevOps';
      case 'tools':
        return 'Tools & Software';
      default:
        return '';
    }
  };

  const categories = ['frontend', 'backend', 'database', 'devops', 'tools'];

  return (
    <section id="skills" className="min-h-screen py-20 bg-[#0B1121]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-[#0EA5E9] text-sm font-medium tracking-wider mb-1">SKILLS & EXPERTISE</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Proficiency</h2>
          <div className="h-1 w-16 bg-[#0EA5E9] mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {categories.map((category) => (
            <div 
              key={category}
              className="mb-12 last:mb-0"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-[#1E293B] rounded-xl">
                  {getCategoryIcon(category)}
                </div>
                <h3 className="text-2xl font-bold text-white">{getCategoryName(category)}</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <div 
                      key={skill.name} 
                      className="group bg-[#0F172A] hover:bg-[#0EA5E9] p-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(14,165,233,0.3)]"
                    >
                      <div className="flex flex-col h-full">
                        <h4 className="text-lg font-semibold text-white mb-2">{skill.name}</h4>
                        <div className="mt-auto">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-gray-400 group-hover:text-white/80">Proficiency</span>
                            <span className="text-[#0EA5E9] group-hover:text-white font-medium">{skill.level}%</span>
                          </div>
                          <div className="w-full h-1 bg-[#1E293B] group-hover:bg-white/20 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-[#0EA5E9] group-hover:bg-white rounded-full transition-all duration-500 ease-out"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
