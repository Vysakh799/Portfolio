import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ExperienceProps {
  tags?: string[];
}

const defaultTags = ['Django', 'Flask', 'MERN Stack', 'REST APIs', 'Razorpay', 'JWT', 'Auth0', 'AI/ML'];

const Experience: React.FC<ExperienceProps> = ({ tags = defaultTags }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: false });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [inView, controls]);

  return (
    <section id="experience" className="py-20 relative z-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <div className="flex justify-center">
            <span className="block w-24 h-1 bg-portfolio-primary rounded-full"></span>
          </div>
        </div>
        <div className="flex flex-col items-center relative" ref={ref}>
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-portfolio-primary/30"></div>
          {/* Timeline dot */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-24 w-4 h-4 bg-portfolio-primary rounded-full z-10"></div>
          <div className="w-full md:w-1/2 mt-12 md:mt-0 md:ml-auto p-3">
            <motion.div
              className="bg-gradient-card border bg-blue-950/80 rounded-xl shadow-lg p-8 mb-8 animate-fade-in"
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 18 } }
              }}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold text-white">Python Fullstack Developer</h3>
                <span className="text-portfolio-primary text-sm font-semibold">Aug 2024 – Present</span>
              </div>
              <div className="text-gray-300 font-semibold mb-1">Synnefo Solutions</div>
              <div className="text-gray-400 mb-4 text-sm">
                Leading full-stack development using Django, Flask, and MERN stack. Implementing secure REST APIs with JWT/Auth0 authentication and Razorpay payment integration. Developing AI-powered features including chatbots and recommendation systems.
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {tags.map((tag) => (
                  <span key={tag} className="bg-portfolio-primary/20 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 