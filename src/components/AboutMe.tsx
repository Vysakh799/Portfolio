import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Github } from 'lucide-react';
// import './App.css';
import StarBorder from './starBorder';
const aboutMeText1 = "I'm Vysakh E., a passionate and self-motivated full-stack Python developer with hands-on experience in building dynamic web applications using Django, React, and the MERN stack. My journey into tech began with curiosity and grew into a strong commitment to building solutions that matter.";
const aboutMeText2 = "Over time, I've developed a solid understanding of both frontend and backend development, and I enjoy transforming ideas into real-world applications. I'm always eager to learn new technologies, explore innovative ideas, and take on meaningful challenges that push my limits. Whether it's crafting a seamless UI or building powerful backend logic, I strive to write clean, maintainable code that makes a difference.";

const AboutMe = () => {
  const [typedAbout1, setTypedAbout1] = useState("");
  const [typedAbout2, setTypedAbout2] = useState("");
  const [showCursor1, setShowCursor1] = useState(true);
  const [showCursor2, setShowCursor2] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true);
      }
    };
    const observer = new window.IntersectionObserver(handleIntersection, {
      threshold: 0.3,
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
    // eslint-disable-next-line
  }, [sectionRef, hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;
    let i = 0;
    const totalDuration = 4000; // 4 seconds for first paragraph
    const interval = totalDuration / aboutMeText1.length;
    const type1 = () => {
      setTypedAbout1(aboutMeText1.slice(0, i + 1));
      if (i < aboutMeText1.length - 1) {
        i++;
        setTimeout(type1, interval);
      } else {
        setShowCursor1(false);
        setShowCursor2(true);
        // Start typing the second paragraph after the first is done
        let j = 0;
        const totalDuration2 = 4000; // 4 seconds for second paragraph
        const interval2 = totalDuration2 / aboutMeText2.length;
        const type2 = () => {
          setTypedAbout2(aboutMeText2.slice(0, j + 1));
          if (j < aboutMeText2.length - 1) {
            j++;
            setTimeout(type2, interval2);
          } else {
            setShowCursor2(false);
          }
        };
        type2();
      }
    };
    type1();
    // eslint-disable-next-line
  }, [hasAnimated]);

  return (
    <section id="about" className="py-20 relative z-20" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6 sm:text-3xl xs:text-2xl">About <span className="text-portfolio-primary">Me</span></h2>
            <p className="text-gray-300 mb-6 leading-relaxed min-h-[96px] sm:text-base xs:text-sm text-xs">
              {typedAbout1}
              {showCursor1 && (
                <span className="inline-block w-2 h-6 align-middle bg-portfolio-primary animate-pulse ml-1" style={{ verticalAlign: 'middle' }}></span>
              )}
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed min-h-[96px] sm:text-base xs:text-sm text-xs">
              {typedAbout2}
              {showCursor2 && (
                <span className="inline-block w-2 h-6 align-middle bg-portfolio-primary animate-pulse ml-1" style={{ verticalAlign: 'middle' }}></span>
              )}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-portfolio-primary" />
                <span className="text-sm">vysakh.dev.official@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-portfolio-primary" />
                <span className="text-sm">+91 7994634647</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-portfolio-primary" />
                <span className="text-sm">Calicut, Kerala</span>
              </div>
              <div className="flex items-center space-x-2">
                <Github className="w-5 h-5 text-portfolio-primary" />
                <span className="text-sm">github.com/Vysakh799</span>
              </div>
            </div>
            <button className="bg-gradient-button hover:opacity-90 flex items-center px-4 py-2 rounded text-white font-semibold">
              Contact Me
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </button>
          </div>
          <div className="order-1 md:order-2 relative w-80 h-80 mx-auto flex items-center justify-center sm:w-72 sm:h-72 xs:w-48 xs:h-48 w-44 h-44">
            <div className="w-80 h-80 rounded-full bg-gradient-card border-2 border-portfolio-primary/30 flex items-center justify-center overflow-hidden sm:w-72 sm:h-72 xs:w-48 xs:h-48 w-44 h-44">
              <img
                src="/IMG-20240531-WA0005-01.jpeg"
                alt="Vysakh E"
                className="w-72 h-72 rounded-full object-cover sm:w-64 sm:h-64 xs:w-40 xs:h-40 w-36 h-36"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe; 