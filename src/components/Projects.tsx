import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Tilt from 'react-parallax-tilt';

const projects = [
  {
    title: "E-Commerce Gym Products",
    description: "Complete e-commerce solution for gym equipment with cart system and email integration.",
    technologies: ["Django", "Python", "HTML", "CSS", "JavaScript"],
    features: ["Product Ordering", "Cart System", "Email Service"],
    image: "https://www.zealthhealthtech.com/blog/wp-content/uploads/2023/11/ecommerce3-1.jpg"
  },
  {
    title: "RMS - Restaurant Management System",
    description: "A robust restaurant management system for handling orders, inventory, and staff, built with the MERN stack.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Redux", "Tailwind CSS"],
    features: ["Order Management", "Inventory Tracking", "Staff Management", "Analytics Dashboard"],
    image: "https://www.blinkco.io/wp-content/uploads/2021/11/multi-purpose-restaurant-app-management-platform.jpg"
  },
  {
    title: "LeadSquare - CRM for Leads and Calls",
    description: "A CRM platform to manage leads, schedule and track calls, and automate follow-ups for sales teams.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Redux", "Socket.io"],
    features: ["Lead Management", "Call Scheduling", "Automated Follow-ups", "Real-time Notifications"],
    image: "https://salestack.in/admin/api/uploads/Product/1660108531QnWpXAq1.jpg"
  },
  {
    title: "Real-time Chatting Application",
    description: "A real-time chat application using Django Channels for seamless, bi-directional communication.",
    technologies: ["Django", "Django Channels", "WebSockets", "Redis", "HTML", "CSS", "JavaScript"],
    features: ["Real-time Messaging", "User Presence", "Group Chats", "Message History"],
    image: "https://files.ably.io/ghost/prod/2023/01/build-a-realtime-chat-app-from-scratch--1-.png"
  },
  {
    title: "SeatMap - Exam Seat Allocation System",
    description: "Automatically allocates seats for students for exams and manages students, HODs, and the entire exam management team. Built using Flask.",
    technologies: ["Flask", "Python", "HTML", "CSS", "JavaScript", "MySQL"],
    features: ["Automatic Seat Allocation", "Student Management", "HOD & Staff Management", "Exam Scheduling", "Role-based Access", "Reporting"],
    image: "https://www.roffeypark.com/wp-content/uploads/2024/02/the-joy-of-exams-2.jpg"
  },
  {
    title: "Advcato - Lawyer Finder Platform",
    description: "A comprehensive platform connecting users with legal professionals for advice and consultation.",
    technologies: ["Django", "Python", "HTML", "CSS", "JavaScript", "SQLite"],
    features: ["User Authentication", "Lawyer Profiles", "Responsive Design"],
    image: "https://adcolaw.com/wp-content/uploads/2022/02/Duties-of-an-Advocate-1-1024x683.png"
  },
  {
    title: "File Management System",
    description: "Full-stack application for secure file upload and management with user authentication.",
    technologies: ["React", "Django", "Python", "REST API"],
    features: ["File Upload", "User Sessions", "API Integration"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqbaGSszXFAOb9tKHumCBkvCzQEpLYB6lwVA&s"
  }
];

const getImageUrl = (title: string) => {
  if (title.toLowerCase().includes('lawyer') || title.toLowerCase().includes('adv')) {
    return 'https://cache.careers360.mobi/media/article_images/2023/4/24/difference-between-lawyer-advocate.jpg';
  } else if (title.toLowerCase().includes('file')) {
    return 'https://www.filecenter.com/blog/wp-content/uploads/2024/07/Electronic-filing-system-for-computerized-file-management.jpg';
  } else if (title.toLowerCase().includes('e-commerce') || title.toLowerCase().includes('gym')) {
    return 'https://www.zealthhealthtech.com/blog/wp-content/uploads/2023/11/ecommerce3-1.jpg';
  } else {
    return 'https://placehold.co/600x300/1a2233/ffffff?text=Project+Image';
  }
};

const Projects: React.FC = () => (
  <section id="projects" className="py-20 relative z-20">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">My <span className="text-portfolio-primary">Projects</span></h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Here are some of the projects I've worked on, showcasing my skills in full-stack development
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto h-full items-stretch">
        {projects.map((project, index) => (
          <Tilt
            key={project.title}
            glareEnable={true}
            glareMaxOpacity={0.15}
            scale={1.04}
            tiltMaxAngleX={12}
            tiltMaxAngleY={12}
            transitionSpeed={250}
            className="h-full flex flex-col"
          >
            <Card className="h-full min-h-[500px] flex flex-col bg-blue-950/80 border-portfolio-primary/20 hover:border-portfolio-primary/50 transition-all duration-300 group animate-fade-in overflow-hidden" style={{animationDelay: `${index * 0.2}s`}}>
              <img src={project.image || getImageUrl(project.title)} alt={project.title} className="w-full h-48 object-cover object-center rounded-t-2xl" />
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
          </Tilt>
        ))}
      </div>
    </div>
  </section>
);

export default Projects; 