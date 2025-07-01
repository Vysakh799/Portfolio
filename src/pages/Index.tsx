import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Github, Linkedin, Download, ExternalLink, ArrowRight, Atom, Code, Database, BadgeCheck, FileCode, Braces, Globe, Box, GitBranch, Cloud, Server, Lock, CreditCard, Palette, Brain } from "lucide-react";
import SmoothScroll from "@/components/SmoothScroll";
import SplashCursor from "@/components/SplashCursor";
import emailjs from '@emailjs/browser';
import ContactForm from "@/components/ContactForm";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs.send(
      'service_272x6dz',
      'template_1ez9kyl',
      {
        from_name: formData.name,
        from_email: formData.email,
        message: `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
      },
      'ftcbj2F_thVjy3SdM'
    )
    .then(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
    })
    .catch(() => {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive"
      });
    });
  };

  const handleContactClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProjectsClick = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = [
    { name: "Python", icon: "python.svg" },
    { name: "JavaScript", icon: "javascript.svg" },
    { name: "Django", icon: "django.svg" },
    { name: "Flask", icon: "flask.svg" },
    { name: "React", icon: "react.svg" },
    { name: "Node.js", icon: "nodedotjs.svg" },
    { name: "Express", icon: "express.svg" },
    { name: "MongoDB", icon: "mongodb.svg" },
    { name: "MySQL", icon: "mysql.svg" },
    { name: "PostgreSQL", icon: "postgresql.svg" },
    { name: "Git", icon: "git.svg" },
    { name: "Docker", icon: "docker.svg" },
    { name: "AWS EC2", icon: "aws.svg" },
    { name: "Nginx", icon: "nginx.svg" },
    { name: "Auth0", icon: "auth0.svg" },
    { name: "JWT", icon: "jsonwebtokens.svg" },
    { name: "Razorpay", icon: "razorpay.svg" },
    { name: "Stripe", icon: "stripe.svg" },
    { name: "OpenCV", icon: "opencv.svg" },
    { name: "TensorFlow", icon: "tensorflow.svg" },
    { name: "scikit-learn", icon: "scikitlearn.svg" },
    { name: "Redux Toolkit", icon: "redux.svg" },
    { name: "Tailwind CSS", icon: "tailwindcss.svg" },
    { name: "Figma", icon: "figma.svg" },
  ];

  return (
    <div className="bg-gradient-portfolio min-h-screen text-white">
      <SmoothScroll />
      <SplashCursor />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-button bg-clip-text text-transparent">
              Vysakh E
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-portfolio-primary transition-colors">Home</a>
              <a href="#about" className="hover:text-portfolio-primary transition-colors">About</a>
              <a href="#skills" className="hover:text-portfolio-primary transition-colors">Skills</a>
              <a href="#experience" className="hover:text-portfolio-primary transition-colors">Experience</a>
              <a href="#projects" className="hover:text-portfolio-primary transition-colors">Projects</a>
              <a href="#contact" className="hover:text-portfolio-primary transition-colors">Contact</a>
            </div>
            <Button className="bg-gradient-button hover:opacity-90">
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-fade-in">
            <p className="text-portfolio-primary text-lg mb-4 tracking-wide">FULL-STACK WEB DEVELOPER</p>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 flex justify-center gap-1">
              {['V','y','s','a','k','h',' ','E'].map((char, i) => (
                <span
                  key={i}
                  className={`hero-3d-letter${char === ' ' ? ' w-4 md:w-6' : ''}`}
                  style={{
                    animationDelay: `${i * 0.08}s`,
                  }}
                >
                  {char}
                </span>
              ))}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Motivated Python Developer with hands-on experience in full-stack development using Django, Flask, React, and MERN stack.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-button hover:opacity-90" onClick={handleContactClick}>
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
              <Button size="lg" variant="outline" className="border-portfolio-primary text-portfolio-primary hover:bg-portfolio-primary hover:text-white" onClick={handleProjectsClick}>
                <ExternalLink className="w-4 h-4 mr-2" />
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutMe />

      {/* Skills Section */}
      <Skills skills={skills} />

      {/* Experience Section */}
      <Experience />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black/20 relative z-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Contact <span className="text-portfolio-primary">Me</span></h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Let's discuss how we can work together on your next project
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800 relative z-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-2xl font-bold bg-gradient-button bg-clip-text text-transparent mb-2">
                Vysakh E
              </h3>
              <p className="text-gray-400">Full-Stack Web Developer</p>
            </div>
            <div className="flex space-x-6">
              <a href="mailto:vysakh.dev.official@gmail.com" className="text-gray-400 hover:text-portfolio-primary transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a href="https://github.com/Vysakh799" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-portfolio-primary transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="http://www.linkedin.com/in/vysakh7995" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-portfolio-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-gray-800">
            <p className="text-gray-400">© 2024 Vysakh E. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
