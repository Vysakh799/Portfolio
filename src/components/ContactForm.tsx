import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
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

  return (
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
  );
};

export default ContactForm; 