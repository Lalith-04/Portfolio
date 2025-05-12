import { Code, Database, Server, Wrench, Cloud } from 'lucide-react';

type Skill = {
  name: string;
  level: number;
  category: 'development' | 'database' | 'cloud' | 'tools';
};

const SkillsSection = () => {
  const skills: Skill[] = [
    // Development Tools
    { name: 'VS Code', level: 95, category: 'development' },
    { name: 'Git & GitHub', level: 90, category: 'development' },
    { name: 'NPM/Yarn', level: 85, category: 'development' },
    
    // Database Tools
    { name: 'MongoDB Compass', level: 85, category: 'database' },
    { name: 'pgAdmin', level: 80, category: 'database' },
    { name: 'DBeaver', level: 75, category: 'database' },
    
    // Cloud & Deployment
    { name: 'AWS', level: 80, category: 'cloud' },
    { name: 'Vercel', level: 90, category: 'cloud' },
    { name: 'Docker', level: 85, category: 'cloud' },
    
    // Testing & Other Tools
    { name: 'Postman', level: 90, category: 'tools' },
    { name: 'Chrome DevTools', level: 85, category: 'tools' },
    { name: 'GitHub Actions', level: 80, category: 'tools' },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'development':
        return <Code className="w-6 h-6 text-[#0EA5E9] group-hover:text-white transition-colors" />;
      case 'database':
        return <Database className="w-6 h-6 text-[#0EA5E9] group-hover:text-white transition-colors" />;
      case 'cloud':
        return <Cloud className="w-6 h-6 text-[#0EA5E9] group-hover:text-white transition-colors" />;
      case 'tools':
        return <Wrench className="w-6 h-6 text-[#0EA5E9] group-hover:text-white transition-colors" />;
      default:
        return null;
    }
  };

  const getCategoryName = (category: string) => {
    switch (category) {
      case 'development':
        return 'Development';
      case 'database':
        return 'Database';
      case 'cloud':
        return 'Cloud & Deployment';
      case 'tools':
        return 'Testing & Tools';
      default:
        return '';
    }
  };

  const categories = ['development', 'database', 'cloud', 'tools'];

  return (
    <section id="skills" className="py-16 bg-background dark:bg-[#0B1121]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-[#0EA5E9] text-sm font-medium tracking-wider mb-1">TECHNICAL PROFICIENCY</p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground dark:text-white mb-4">Tools & Technologies</h2>
          <div className="h-1 w-16 bg-[#0EA5E9] mx-auto"></div>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <div key={category} className="bg-card dark:bg-[#0F172A] rounded-xl p-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-accent dark:bg-[#1E293B] rounded-lg">
                  {getCategoryIcon(category)}
                </div>
                <h3 className="text-lg font-semibold text-foreground dark:text-white">
                  {getCategoryName(category)}
                </h3>
              </div>
              
              <div className="space-y-3">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <div key={skill.name} className="group">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-foreground dark:text-white">{skill.name}</span>
                        <span className="text-xs text-[#0EA5E9]">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-accent dark:bg-[#1E293B] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#0EA5E9] rounded-full transition-all duration-500 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
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
