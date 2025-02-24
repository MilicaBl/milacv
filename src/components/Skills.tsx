import React, { useEffect, useRef, useState } from "react";
import "../styles/Skills.css";

interface SkillProps {
  name: string;
  progress: number;
}
const Skill: React.FC<SkillProps> = ({ name, progress }) => {
  const [currentProgress, setCurrentProgress] = useState(0);
  const skillRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const options: IntersectionObserverInit = {
      threshold: 0.5, // 50% av elementet måste synas
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setCurrentProgress(progress);
      }
    }, options);

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }
    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, [progress]);

  return (
    <div className="skill" ref={skillRef}>
      <label>{name}</label>
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${currentProgress}%` }}
        ></div>
      </div>
    </div>
  );
};
const Skills: React.FC = () => {
  const skills = [
    { name: "JavaScript", progress: 85 },
    { name: "CSS/SCSS", progress: 95 },
    { name: ".NET", progress: 75 },
    { name: "React/Next.js", progress: 85 },
    { name: "C#", progress: 75 },
    { name: "Node.js", progress: 55 },
    { name: "HTML", progress: 95 },
    { name: "TypeScript", progress: 60 },
    { name: "MySQL/NoSQL", progress: 60 },
    { name: "UX", progress: 25 },
    { name: "Angular", progress: 20 },
    { name: "Wordpress/DatoCMS", progress: 20 },
  ];
  return (
    <>
      <h3>Skills</h3>
      <div id="skills" className="skills-container">
        {skills.map((skill, index) => (
          <Skill key={index} name={skill.name} progress={skill.progress} />
        ))}
      </div>
    </>
  );
};
export default Skills;
