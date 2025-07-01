import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Skill {
  name: string;
  icon: string;
}

interface SkillsProps {
  skills: Skill[];
}

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.08,
    }
  },
  exit: {}
};

const iconVariants = {
  hidden: (i: number) => ({
    opacity: 0,
    y: 100 * ((i % 2 === 0) ? 1 : -1),
    scale: 0.5,
  }),
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring' as const, stiffness: 300, damping: 20 }
  },
  exit: (i: number) => ({
    opacity: 0,
    y: -100 * ((i % 2 === 0) ? 1 : -1),
    scale: 0.5,
    transition: { duration: 0.5 }
  })
};

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: false });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('exit');
    }
  }, [inView, controls]);

  return (
    <section id="skills" className="py-20 bg-black/20 relative z-20">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
          <div className="flex justify-center mb-4">
            <span className="block w-24 h-1 bg-portfolio-primary rounded-full"></span>
          </div>
        </div>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          exit="exit"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="flex flex-col items-center justify-center bg-blue-950/80 border border-portfolio-primary/20 rounded-xl p-6 group"
              custom={index}
              variants={iconVariants}
            >
              <img
                src={`/icons/${skill.icon}`}
                alt={skill.name}
                className="w-10 h-10 mb-3 svg-theme"
                title={skill.name}
              />
              <span className="text-white font-medium text-base text-center">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 