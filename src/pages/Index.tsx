
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Github, Linkedin, Download, ExternalLink, ArrowRight } from "lucide-react";
import SmoothScroll from "@/components/SmoothScroll";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
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
    { name: "Python", level: 90 },
    { name: "Django", level: 90 },
    { name: "React", level: 85 },
    { name: "JavaScript", level: 85 },
    { name: "HTML/CSS", level: 95 },
    { name: "Flask", level: 80 },
    { name: "MySQL", level: 75 },
    { name: "MongoDB", level: 70 }
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
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e91e63' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-fade-in">
            <p className="text-portfolio-primary text-lg mb-4 tracking-wide">FULL-STACK WEB DEVELOPER</p>
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              Vysakh
              <span className="block bg-gradient-button bg-clip-text text-transparent">E</span>
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
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold mb-6">About <span className="text-portfolio-primary">Me</span></h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm a motivated and enthusiastic Python Developer who successfully transitioned from intern to professional developer. 
                Currently working as a Python FullStack Developer Cum Trainer at Synnefo Solutions, where I develop web applications 
                and deliver training sessions.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I specialize in building scalable web applications using Django, React, and modern development practices. 
                My experience spans from developing CRM systems to training the next generation of developers.
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
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" 
                  alt="Vysakh E" 
                  className="w-72 h-72 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">My <span className="text-portfolio-primary">Skills</span></h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Here are the technologies and tools I use to bring ideas to life
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div key={skill.name} className="animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-portfolio-primary">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="h-2 bg-gradient-button rounded-full transition-all duration-1000 ease-out"
                    style={{width: `${skill.level}%`}}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">My <span className="text-portfolio-primary">Projects</span></h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Here are some of the projects I've worked on, showcasing my skills in full-stack development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={project.title} className="bg-gradient-card border-portfolio-primary/20 hover:border-portfolio-primary/50 transition-all duration-300 group animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
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
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Contact <span className="text-portfolio-primary">Me</span></h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Let's discuss how we can work together on your next project
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="bg-gradient-card border-portfolio-primary/20">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
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
      <footer className="py-12 border-t border-gray-800">
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
