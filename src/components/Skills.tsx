import type { Skill } from '../types/types';

const skillsData: Skill[] = [
  { name: 'React', icon: '⚛️', level: 90, category: 'frontend' },
  { name: 'TypeScript', icon: '📘', level: 85, category: 'frontend' },
  { name: 'Tailwind', icon: '🎨', level: 88, category: 'frontend' },
  { name: 'Node.js', icon: '🟢', level: 80, category: 'backend' },
  { name: 'Python', icon: '🐍', level: 75, category: 'backend' },
  { name: 'Git', icon: '📦', level: 85, category: 'tools' },
  { name: 'AWS', icon: '☁️', level: 70, category: 'tools' },
];

export const Skills = () => {
  const categories = {
    frontend: 'Frontend',
    backend: 'Backend', 
    tools: 'Herramientas',
    soft: 'Habilidades Blandas'
  };

  return (
    <section id="habilidades" className="section-padding bg-darker-custom">
      <div className="container-custom">
        <h2 className="section-title">Mis Habilidades</h2>
        <p className="section-subtitle">Tecnologías y herramientas que domino</p>

        <div className="skills-container">
          {Object.entries(categories).map(([key, title]) => (
            <div key={key} className="skill-category">
              <h3>{title}</h3>
              <div className="space-y-4">
                {skillsData
                  .filter(skill => skill.category === key)
                  .map((skill) => (
                    <div key={skill.name} className="skill-item">
                      <span className="skill-icon">{skill.icon}</span>
                      <div className="skill-info">
                        <div className="skill-header">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-percentage">{skill.level}%</span>
                        </div>
                        <div className="skill-bar">
                          <div 
                            className="skill-progress" 
                            style={{ width: `${skill.level}%` }}
                          ></div>
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