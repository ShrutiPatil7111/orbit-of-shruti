import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mail, Sparkles, Key, ExternalLink } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [enhancingField, setEnhancingField] = useState<string | null>(null);
  const { toast } = useToast();

  const enhancementStyles = [
    { type: 'professional', prompt: 'Make this more professional and business-appropriate:' },
    { type: 'concise', prompt: 'Make this more concise and clear:' },
    { type: 'friendly', prompt: 'Make this more friendly and engaging:' },
    { type: 'detailed', prompt: 'Make this more detailed and comprehensive:' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const enhanceText = async (field: "subject" | "message", currentText: string) => {
    if (!currentText.trim()) {
      toast({
        title: "Nothing to enhance!",
        description: "Please write something in the field before enhancing.",
        variant: "destructive",
        className: "toast-failure"
      });
      return
    };
    setEnhancingField(field);
    try {
      const response = await fetch("https://api-gemini-enhance.onrender.com/api/enhance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: currentText })
      });
      const data = await response.json();
      if (data.enhanced) {
        setFormData(prev => ({ ...prev, [field]: data.enhanced }));
      } else {
        toast({
          title: "Enhancement Failed!",
          description: data.error || "Could not enhance text.",
          variant: "destructive",
          className: "toast-failure"
        });
      }
    } catch {
      toast({
        title: "Enhancement Failed!",
        description: "Could not reach enhancement service.",
        variant: "destructive",
        className: "toast-failure"
      });
    }
    setEnhancingField(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/mgvlbwkg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
          variant: "default", // <-- use 'default' as allowed by type
          className: "toast-success"
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast({
          title: "Error!",
          description: "Failed to send message. Please try again.",
          variant: "destructive",
          className: "toast-failure"
        });
      }
    } catch {
      toast({
        title: "Error!",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
        className: "toast-failure"
      });
    }
    setIsSubmitting(false);
  };

  return (
    <div className="w-full flex justify-center mt-2 md:mt-8"> {/* Changed max-w-4xl mx-auto to w-full */}
      <Card className="p-2 md:p-4 w-full"> {/* Removed max-w-5xl */}
        <form onSubmit={handleSubmit} className="space-y-2 md:space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="e.g., John Doe, Coding Enthusiast"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 bg-input border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="e.g., john.doe@example.com"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 bg-input border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="subject" className="block text-sm font-medium">Subject</label>
              <button
                type="button"
                className="text-xs px-2 py-1 rounded bg-primary text-black flex items-center font-bold"
                onClick={() => enhanceText("subject", formData.subject)}
                disabled={enhancingField === "subject"}
              >
                {enhancingField === "subject" 
                ? "Enhancing..." 
                : <><Sparkles className="w-4 h-4 mr-1" /> Enhance</>}
              </button>
            </div>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="e.g., Collaboration Idea, Bug Report, Just Saying Hi!"
              value={formData.subject}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 bg-input border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="message" className="block text-sm font-medium">Message</label>
              <button
                type="button"
                className="text-xs px-2 py-1 rounded bg-primary text-black flex items-center font-bold"
                onClick={() => enhanceText("message", formData.message)}
                disabled={enhancingField === "message"}
              >
                {enhancingField === "message" 
                ? "Enhancing..." 
                : <><Sparkles className="w-4 h-4 mr-1" /> Enhance</>}
              </button>
            </div>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Your message... Maybe a joke, feedback, or a secret 😉"
              value={formData.message}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-2 bg-input border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-primary text-black rounded-md font-bold"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </Card>
    </div>
  );
};

export default ContactForm;