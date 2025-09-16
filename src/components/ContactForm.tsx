import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mail, Sparkles, Key, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ContactFormProps {
  geminiApiKey: string;
  setGeminiApiKey: (key: string) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ geminiApiKey, setGeminiApiKey }) => {
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

  const enhanceText = async (field: string, currentText: string) => {
    if (!geminiApiKey) {
      toast({
        title: "API Key Required",
        description: "Please enter your Gemini API key to use AI enhancement.",
        variant: "destructive"
      });
      return;
    }

    if (!currentText.trim()) {
      toast({
        title: "No Content",
        description: `Please enter some ${field} text first to enhance.`,
        variant: "destructive"
      });
      return;
    }

    setEnhancingField(field);
    
    try {
      const randomStyle = enhancementStyles[Math.floor(Math.random() * enhancementStyles.length)];
      
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${geminiApiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `${randomStyle.prompt} "${currentText}"`
            }]
          }]
        })
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();
      const enhancedText = data.candidates?.[0]?.content?.parts?.[0]?.text;
      
      if (enhancedText) {
        setFormData(prev => ({ ...prev, [field]: enhancedText.trim() }));
        toast({
          title: "✨ Enhanced!",
          description: `Your ${field} has been enhanced with ${randomStyle.type} style.`,
        });
      }
    } catch (error) {
      toast({
        title: "Enhancement Failed",
        description: "Failed to enhance text. Please check your API key and try again.",
        variant: "destructive"
      });
    } finally {
      setEnhancingField(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mgvlbwkg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast({
          title: "✅ Message Sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
          className: "bg-green-50 border-green-200",
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast({
        title: "Failed to Send",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-6">
        <p className="text-muted-foreground mb-8">
          Let's Connect! Whether you want to discuss new opportunities, ideas or just want to have a chat about technology, feel free to reach out using the form below.
        </p>
        
        {/* API Key Input */}
        {!geminiApiKey && (
          <Card className="p-4 bg-blue-50/50 border-blue-200">
            <div className="flex items-center gap-3 mb-3">
              <Key className="w-5 h-5 text-blue-600" />
              <h3 className="font-medium text-blue-900">Enable AI Enhancement ✨</h3>
            </div>
            <p className="text-sm text-blue-700 mb-3">
              Enter your Gemini API key to unlock AI-powered text enhancement for your messages.
            </p>
            <div className="flex gap-2">
              <input
                type="password"
                placeholder="Enter your Gemini API key"
                value={geminiApiKey}
                onChange={(e) => setGeminiApiKey(e.target.value)}
                className="flex-1 px-3 py-2 text-sm bg-white border border-blue-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button size="sm" variant="outline" asChild>
                <a 
                  href="https://aistudio.google.com/app/apikey" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="whitespace-nowrap"
                >
                  Get API Key
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </Button>
            </div>
          </Card>
        )}
      </div>

      <div className="flex justify-center mt-8">
        <Card className="p-6 w-full max-w-xl">
          <form onSubmit={handleSubmit} className="space-y-4">
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
                {geminiApiKey && (
                  <Button
                    type="button"
                    size="sm"
                    variant="ghost"
                    onClick={() => enhanceText('subject', formData.subject)}
                    disabled={enhancingField === 'subject'}
                    className="h-6 px-2 text-xs"
                  >
                    {enhancingField === 'subject' ? (
                      <>
                        <div className="w-3 h-3 border-2 border-primary border-t-transparent rounded-full animate-spin mr-1" />
                        Enhancing...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-3 h-3 mr-1" />
                        ✨Enhance
                      </>
                    )}
                  </Button>
                )}
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
                {geminiApiKey && (
                  <Button
                    type="button"
                    size="sm"
                    variant="ghost"
                    onClick={() => enhanceText('message', formData.message)}
                    disabled={enhancingField === 'message'}
                    className="h-6 px-2 text-xs"
                  >
                    {enhancingField === 'message' ? (
                      <>
                        <div className="w-3 h-3 border-2 border-primary border-t-transparent rounded-full animate-spin mr-1" />
                        Enhancing...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-3 h-3 mr-1" />
                        ✨Enhance
                      </>
                    )}
                  </Button>
                )}
              </div>
              <textarea 
                id="message" 
                name="message" 
                rows={4} 
                placeholder="Your message... Maybe a joke, feedback, or a secret 😉"
                value={formData.message}
                onChange={handleInputChange}
                required 
                className="w-full px-3 py-2 bg-input border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <Mail className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default ContactForm;