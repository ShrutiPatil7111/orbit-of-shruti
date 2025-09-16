import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Mail, Sparkles, Loader2, CheckCircle2, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

interface ContactFormProps {
  geminiApiKey?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ geminiApiKey }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [isEnhancingSubject, setIsEnhancingSubject] = useState(false);
  const [isEnhancingMessage, setIsEnhancingMessage] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const enhancementStyles = [
    { 
      type: 'professional', 
      prompt: 'Make this text more professional and polished while maintaining its core message. Use formal language and professional tone.'
    },
    { 
      type: 'concise', 
      prompt: 'Make this text more concise and to the point while keeping all important information. Remove unnecessary words and make it clear and direct.'
    },
    { 
      type: 'grammar', 
      prompt: 'Fix any grammar, spelling, or punctuation errors in this text. Improve sentence structure and readability while maintaining the original meaning.'
    },
    { 
      type: 'engaging', 
      prompt: 'Make this text more engaging and compelling while keeping it professional. Add personality and make it more interesting to read.'
    }
  ];

  const enhanceText = async (text: string, isSubject: boolean) => {
    if (!geminiApiKey) {
      toast({
        title: "API Key Required",
        description: "Please provide your Gemini API key to use the enhancement feature.",
        variant: "destructive"
      });
      return text;
    }

    if (!text.trim()) {
      toast({
        title: "No Text to Enhance",
        description: `Please enter some ${isSubject ? 'subject' : 'message'} text first.`,
        variant: "destructive"
      });
      return text;
    }

    const randomStyle = enhancementStyles[Math.floor(Math.random() * enhancementStyles.length)];
    const prompt = `${randomStyle.prompt}\n\nText to enhance: "${text}"\n\nReturn only the enhanced text without any additional formatting or explanations.`;

    try {
      const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=' + geminiApiKey, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: prompt
            }]
          }],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          }
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to enhance text');
      }

      const data = await response.json();
      const enhancedText = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
      
      if (enhancedText) {
        toast({
          title: "✨ Enhanced!",
          description: `Applied ${randomStyle.type} enhancement style.`,
        });
        return enhancedText;
      }
      
      return text;
    } catch (error) {
      console.error('Enhancement error:', error);
      toast({
        title: "Enhancement Failed",
        description: "Could not enhance text. Please try again.",
        variant: "destructive"
      });
      return text;
    }
  };

  const handleEnhanceSubject = async () => {
    setIsEnhancingSubject(true);
    const currentSubject = form.getValues('subject');
    const enhancedSubject = await enhanceText(currentSubject, true);
    form.setValue('subject', enhancedSubject);
    setIsEnhancingSubject(false);
  };

  const handleEnhanceMessage = async () => {
    setIsEnhancingMessage(true);
    const currentMessage = form.getValues('message');
    const enhancedMessage = await enhanceText(currentMessage, false);
    form.setValue('message', enhancedMessage);
    setIsEnhancingMessage(false);
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('subject', data.subject);
      formData.append('message', data.message);

      const response = await fetch('https://formspree.io/f/mgvlbwkg', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setShowSuccessPopup(true);
        form.reset(); // Clear form after successful submission
        setTimeout(() => setShowSuccessPopup(false), 5000); // Auto-hide after 5 seconds
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Card className="p-6 w-full max-w-xl">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g., John Doe, Coding Enthusiast"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="e.g., john.doe@example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center justify-between">
                    <span>Subject</span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={handleEnhanceSubject}
                      disabled={isEnhancingSubject || !geminiApiKey}
                      className="text-xs h-6 px-2"
                    >
                      {isEnhancingSubject ? (
                        <Loader2 className="w-3 h-3 animate-spin" />
                      ) : (
                        <Sparkles className="w-3 h-3" />
                      )}
                      ✨Enhance
                    </Button>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g., Collaboration Idea, Bug Report, Just Saying Hi!"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center justify-between">
                    <span>Message</span>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={handleEnhanceMessage}
                      disabled={isEnhancingMessage || !geminiApiKey}
                      className="text-xs h-6 px-2"
                    >
                      {isEnhancingMessage ? (
                        <Loader2 className="w-3 h-3 animate-spin" />
                      ) : (
                        <Sparkles className="w-3 h-3" />
                      )}
                      ✨Enhance
                    </Button>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      rows={4}
                      placeholder="Your message... Maybe a joke, feedback, or a secret 😉"
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
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
        </Form>
      </Card>

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/50" onClick={() => setShowSuccessPopup(false)} />
          <Card className="relative z-10 p-6 max-w-sm w-full bg-green-50 border-green-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-green-600 mr-2" />
                <h3 className="font-semibold text-green-800">Message Sent!</h3>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowSuccessPopup(false)}
                className="text-green-600 hover:text-green-700"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-green-700 text-sm">
              Thanks for reaching out. I'll get back to you soon.
            </p>
          </Card>
        </div>
      )}
    </>
  );
};

export default ContactForm;