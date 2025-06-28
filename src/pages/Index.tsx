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
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      'YOUR_PUBLIC_KEY'
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

  const projects = [
    {
      title: "Advcato - Lawyer Finder Platform",
      description: "A comprehensive platform connecting users with legal professionals for advice and consultation.",
      technologies: ["Django", "Python", "HTML", "CSS", "JavaScript", "SQLite"],
      features: ["User Authentication", "Lawyer Profiles", "Responsive Design"]
    },
    {
      title: "File Management System",
      description: "Full-stack application for secure file upload and management with user authentication.",
      technologies: ["React", "Django", "Python", "REST API"],
      features: ["File Upload", "User Sessions", "API Integration"]
    },
    {
      title: "E-Commerce Gym Products",
      description: "Complete e-commerce solution for gym equipment with cart system and email integration.",
      technologies: ["Django", "Python", "HTML", "CSS", "JavaScript"],
      features: ["Product Ordering", "Cart System", "Email Service"]
    }
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
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              Vysakh
              <span className="bg-gradient-button bg-clip-text text-transparent"> E</span>
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

        {/* Floating elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-gradient-button rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-portfolio-secondary rounded-full opacity-30 animate-float" style={{animationDelay: '1s'}}></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative z-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6">About <span className="text-portfolio-primary">Me</span></h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
              I'm Vysakh E., a passionate and self-motivated full-stack Python developer with hands-on experience in building dynamic web applications using Django, React, and the MERN stack. My journey into tech began with curiosity and grew into a strong commitment to building solutions that matter.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
              Over time, I've developed a solid understanding of both frontend and backend development, and I enjoy transforming ideas into real-world applications. I'm always eager to learn new technologies, explore innovative ideas, and take on meaningful challenges that push my limits. Whether it's crafting a seamless UI or building powerful backend logic, I strive to write clean, maintainable code that makes a difference.
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
              <Button className="bg-gradient-button hover:opacity-90" onClick={handleContactClick}>
                Contact Me
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full bg-gradient-card border-2 border-portfolio-primary/30 flex items-center justify-center">
                <img 
                  src="/IMG-20240531-WA0005-01.jpeg" 
                  alt="Vysakh E" 
                  className="w-72 h-72 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-black/20 relative z-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
            <div className="flex justify-center mb-4">
              <span className="block w-24 h-1 bg-portfolio-primary rounded-full"></span>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <div key={skill.name} className="flex flex-col items-center justify-center bg-blue-950/80 border border-portfolio-primary/20 rounded-xl p-6 animate-fade-in transition-transform duration-300 ease-in-out hover:scale-105 group " style={{animationDelay: `${index * 0.05}s`}}>
                <img
                  src={`/icons/${skill.icon}`}
                  alt={skill.name}
                  className="w-10 h-10 mb-3 svg-theme transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:drop-shadow-glow"
                  title={skill.name}
                />
                <span className="text-white font-medium text-base text-center">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative z-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Experience</h2>
            <div className="flex justify-center">
              <span className="block w-24 h-1 bg-portfolio-primary rounded-full"></span>
            </div>
          </div>
          <div className="flex flex-col items-center relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-portfolio-primary/30"></div>
            {/* Timeline dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-24 w-4 h-4 bg-portfolio-primary rounded-full z-10"></div>
            <div className="w-full md:w-1/2 mt-12 md:mt-0 md:ml-auto p-3">
              <div className=" bg-gradient-card border bg-blue-950/80 rounded-xl shadow-lg p-8 mb-8 animate-fade-in">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold text-white">Python Fullstack Developer</h3>
                  <span className="text-portfolio-primary text-sm font-semibold">Aug 2024 – Present</span>
                </div>
                <div className="text-gray-300 font-semibold mb-1">Synnefo Solutions</div>
                <div className="text-gray-400 mb-4 text-sm">
                  Leading full-stack development using Django, Flask, and MERN stack. Implementing secure REST APIs with JWT/Auth0 authentication and Razorpay payment integration. Developing AI-powered features including chatbots and recommendation systems.
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {['Django', 'Flask', 'MERN Stack', 'REST APIs', 'Razorpay', 'JWT', 'Auth0', 'AI/ML'].map((tag) => (
                    <span key={tag} className="bg-portfolio-primary/20 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative z-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">My <span className="text-portfolio-primary">Projects</span></h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Here are some of the projects I've worked on, showcasing my skills in full-stack development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              // Choose an image based on project title/theme
              let imageUrl = '';
              if (project.title.toLowerCase().includes('lawyer') || project.title.toLowerCase().includes('adv')) {
                imageUrl = 'https://cache.careers360.mobi/media/article_images/2023/4/24/difference-between-lawyer-advocate.jpg'; // Law theme
              } else if (project.title.toLowerCase().includes('file')) {
                imageUrl = 'https://www.filecenter.com/blog/wp-content/uploads/2024/07/Electronic-filing-system-for-computerized-file-management.jpg'; // File theme
              } else if (project.title.toLowerCase().includes('e-commerce') || project.title.toLowerCase().includes('gym')) {
                imageUrl = 'https://www.zealthhealthtech.com/blog/wp-content/uploads/2023/11/ecommerce3-1.jpg'; // E-commerce/gym theme
              } else {
                imageUrl = 'https://placehold.co/600x300/1a2233/ffffff?text=Project+Image'; // Default
              }
              return (
                <Card key={project.title} className="bg-blue-950/80 border-portfolio-primary/20 hover:border-portfolio-primary/50 transition-all duration-300 group animate-fade-in flex flex-col overflow-hidden" style={{animationDelay: `${index * 0.2}s`}}>
                  {/* Project image at the top */}
                  <img src={imageUrl} alt={project.title} className="w-full h-48 object-cover object-center rounded-t-2xl" />
                  <CardHeader>
                    <CardTitle className="text-white group-hover:text-portfolio-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold mb-2 text-portfolio-primary">Key Features:</h4>
                      <ul className="text-sm text-gray-300 space-y-1">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-portfolio-primary rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-portfolio-primary/20 text-portfolio-primary border-portfolio-primary/30">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black/20 relative z-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Contact <span className="text-portfolio-primary">Me</span></h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Let's discuss how we can work together on your next project
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="bg-blue-950/80 border-portfolio-primary/20">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6 text-white">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <Input
                      type="text"
                      placeholder="Enter your full name..."
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="bg-black/20 border-gray-600 focus:border-portfolio-primary text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input
                      type="email"
                      placeholder="Enter your email..."
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="bg-black/20 border-gray-600 focus:border-portfolio-primary text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <Textarea
                      placeholder="Enter your message..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                      rows={6}
                      className="bg-black/20 border-gray-600 focus:border-portfolio-primary text-white resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-button hover:opacity-90">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
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
