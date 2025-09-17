import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  Code2,
  Brain,
  Car,
  Globe,
  Award,
  Calendar,
  FileText,
  Download
} from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';
import profilePhoto from '@/assets/shruti-profile.png';
import ContactForm from './ContactForm';

const PortfolioSite = () => {
  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/shrutipatil71/', icon: Linkedin },
    { name: 'GitHub', url: 'https://github.com/ShrutiPatil7111', icon: Github },
    { name: 'LeetCode', url: 'https://leetcode.com/u/Shruti_Kiran_Patil/', icon: Code2 },
    { name: 'HackerRank', url: 'https://www.hackerrank.com/profile/shrutikpatil7111', icon: Code2 },
    { name: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/user/shrutikiranpatil/', icon: Code2 },
    { name: 'CodeChef', url: 'https://www.codechef.com/users/shrutikpatil71', icon: Code2 }
  ];

  const skills = [
    'C/C++', 'Python', 'Java', 'HTML/CSS', 'JavaScript', 
    'MySQL', 'DSA', 'OOPs', 'Git/GitHub', 
    'Streamlit', 'Pandas', 'Folium', 'Tkinter', 'PyTorch', 'Arduino Uno', 'Tinkercad'
  ];

  const languages = [
    'English', 'Hindi', 'Marathi', 'German'
  ];

  const projects = [
    { 
      title: 'GeoMap Dashboard',
      description: 'Geospatial web app for shapefile visualization with dynamic filtering and export capabilities.',
      tech: ['Python', 'Streamlit', 'GeoPandas', 'Folium'],
      liveUrl: 'https://geomapdashboard.streamlit.app/',
      githubUrl: 'https://github.com/ShrutiPatil7111/GeoMapDashboard',
      icon: Globe
    },
    {
      title: 'Brain Tumor Classification using Vision Transformers',
      description: 'Deep learning system classifying MRI brain images into 4 categories, packaged as executable.',
      tech: ['Python', 'PyTorch', 'Tkinter', 'PyInstaller'],
      githubUrl: 'https://github.com/ShrutiPatil7111/Brain-Tumor-Classification-ViT',
      downloadUrl: 'https://github.com/ShrutiPatil7111/Brain-Tumor-Classification-ViT/releases/tag/v01',
      icon: Brain
    },
    {
      title: 'Smart Seatbelt Reminder System',
      description: 'Arduino-based safety system prototype detecting unfastened seatbelt.',
      tech: ['Arduino Uno', 'C++', 'FSR Sensor'],
      githubUrl: 'https://github.com/ShrutiPatil7111/Smart-Seatbelt-Reminder-System',
      icon: Car
    },
    {
      title: 'Restaurant Landing Page',
      description: 'Responsive static website built using HTML & CSS with modern design.',
      tech: ['HTML5', 'CSS3', 'Responsive Design'],
      githubUrl: 'https://github.com/ShrutiPatil7111/Restaurant_Landing_Page',
      icon: Globe
    }
  ];

  const achievements = [
    'GATE 2025 Scores – 27.33 (CS), 23.67 (DA)',
    'Goethe German A1 Certificate – 96% in first attempt',
    'TFWS (Tuition Fee Waiver Scheme) Recipient – Top 6 in branch'
  ];

  const certificates = [
    'C Intermediate – SoloLearn (Feb 2025)',
    'Intro to C – SoloLearn (Feb 2025)',
    'UNIX & Linux OS Fundamentals – Infosys Springboard (Apr 2024)',
    'Database Management System – Infosys Springboard (Dec 2023)',
    'DSA Using Java – Infosys Springboard (Nov 2023)',
    'Cybersecurity Internship – AICTE + Palo Alto (Sept-Nov 2023)',
    'Goethe Zertifikat A1 – 96% (Sept 2023)',
    'AI/ML Virtual Internship – AICTE + AWS Academy (May-July 2023)',
    'C++ Programming – Infosys Springboard (June 2023)',
    'Learn C Programming – O2 Breathing Brains (Jan 2023)',
    'MATLAB Onramp – MathWorks (Mar 2022)'
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold gradient-text">Shruti Kiran Patil</h1>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-primary transition-colors">Home</a>
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
              <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
              <a href="#achievements" className="hover:text-primary transition-colors">Achievements</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="stars"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 tech-grid opacity-20" />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-fade-in">
            <img 
              src={profilePhoto} 
              alt="Shruti Kiran Patil"
              className="w-48 h-48 rounded-full mx-auto mb-8 border-4 border-primary/50 shadow-2xl hover-glow object-cover"
            />
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm <span className="gradient-text">Shruti</span> 👋
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Computer Engineering Graduate 2025 | Software Developer | Problem Solver | Adaptable to new technologies
            </p>
            
            {/* Social Links */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {socialLinks.map((link, index) => (
                <Button 
                  key={index} 
                  variant="outline" 
                  size="sm" 
                  className="hover-lift hover-glow"
                  asChild
                >
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <link.icon className="w-4 h-4 mr-2" />
                    {link.name}
                  </a>
                </Button>
              ))}
            </div>

            <Button size="lg" className="hover-lift animate-glow-pulse" asChild>
              <a href="#projects">
                View My Work
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                A Computer Engineering graduate with a strong foundation in software development. 
                Experienced in geospatial data visualization, AI projects and web design. 
                Skilled in Python, Java, C/C++, SQL and front-end technologies. 
                Problem-solving mindset with adaptability to new domains.
              </p>
              
              <div className="space-y-4">
                <Card className="p-4 hover-lift">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-primary mr-4" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:shrutikpatil7111@gmail.com" className="text-muted-foreground hover:text-primary">
                        shrutikpatil7111@gmail.com
                      </a>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-4 hover-lift">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-primary mr-4" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:+91-9044911171" className="text-muted-foreground hover:text-primary">
                        +91-9044911171
                      </a>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-4 hover-lift">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-primary mr-4" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">Pune, Maharashtra, India</p>
                    </div>
                  </div>
                </Card>
              </div>
              
            </div>

            {/* Education Timeline */}
            <div className="animate-slide-in-right">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Education</h3>
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-muted-foreground"></div>
                
                <div className="space-y-8">
                  <div className="relative">
                    <div className="absolute left-4 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                    <Card className="ml-12 p-6 hover-lift">
                      <h4 className="font-semibold">B.Tech – Computer Engineering</h4>
                      <p className="text-primary">Rajarambapu Institute of Technology, Islampur</p>
                      <p className="text-sm text-muted-foreground">2025 • CGPA: 8.11</p>
                    </Card>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute left-4 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                    <Card className="ml-12 p-6 hover-lift">
                      <h4 className="font-semibold">HSC – PCM</h4>
                      <p className="text-primary">Dnyandeep Junior College</p>
                      <p className="text-sm text-muted-foreground">2021 • 97.50%</p>
                    </Card>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute left-4 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                    <Card className="ml-12 p-6 hover-lift">
                      <h4 className="font-semibold">SSC</h4>
                      <p className="text-primary">Kamalabai Ramnane Kanya Vidyalaya</p>
                      <p className="text-sm text-muted-foreground">2019 • 96.60%</p>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mt-8 mb-16 gradient-text">Technical Skills</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <Card key={index} className="p-3 hover-lift flex items-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <Code2 className="w-6 h-6 text-primary mr-3 flex-shrink-0" />
                <h3 className="font-medium text-base">{skill}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-8 bg-card/30">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 gradient-text">Languages</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {languages.map((language, index) => (
              <Card key={index} className="p-3 hover-lift flex items-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <Globe className="w-6 h-6 text-primary mr-3 flex-shrink-0" />
                <h3 className="font-medium text-base">{language}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-card/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="p-6 hover-lift card-glow">
                <div className="flex items-center mb-4">
                  <project.icon className="w-8 h-8 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
                
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">{tech}</Badge>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.liveUrl && (
                    <Button size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.downloadUrl && (
                    <Button size="sm" asChild>
                      <a href={project.downloadUrl} target="_blank" rel="noopener noreferrer">
                        <Download className="w-4 h-4 mr-2" />
                        Download EXE
                      </a>
                    </Button>
                  )}
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Achievements</h2>
          
          <div className="max-w-2xl mx-auto space-y-4">
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-3 hover-lift">
                <div className="flex items-center">
                  <Award className="w-6 h-6 text-primary mr-4 flex-shrink-0" />
                  <p className="text-lg">{achievement}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Activities */}
          <div className="mt-16">
            <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Activities</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="p-6 hover-lift">
                <div className="flex items-center mb-2">
                  <Calendar className="w-6 h-6 text-accent mr-3 flex-shrink-0" />
                  <h4 className="font-semibold">Code Clash - Lets Code Community</h4>
                </div>
                <p className="text-muted-foreground">
                  Participated through multiple rounds (Aptitude, CS Fundamentals and Coding Arena) and secured 402nd rank out of 450+ finalists in the Final Coding Round.
                </p>
              </Card>
              
              <Card className="p-6 hover-lift">
                <div className="flex items-center mb-2">
                  <Calendar className="w-6 h-6 text-accent mr-3 flex-shrink-0" />
                  <h4 className="font-semibold">IEEE Day - Code Spark Contest</h4>
                </div>
                <p className="text-muted-foreground">
                  Participated in a national-level coding contest organized by IEEE Student Branch, solving real-world programming challenges as part of IEEE Day celebrations.
                </p>
              </Card>
              
              <Card className="p-6 hover-lift">
                <div className="flex items-center mb-2">
                  <Calendar className="w-6 h-6 text-accent mr-3 flex-shrink-0" />
                  <h4 className="font-semibold">Employability Skills Training</h4>
                </div>
                <p className="text-muted-foreground">
                  Completed soft skills and employability training program designed to enhance professional readiness by Rubicon LifeSkills Initiative.
                </p>
              </Card>
              
              <Card className="p-6 hover-lift">
                <div className="flex items-center mb-2">
                  <Calendar className="w-6 h-6 text-accent mr-3 flex-shrink-0" />
                  <h4 className="font-semibold">Machine Learning Workshop</h4>
                </div>
                <p className="text-muted-foreground">
                  Participated in a 2-day hands-on workshop on Data Analytics & Machine Learning using Python under Lead College Scheme.
                </p>
              </Card>
              
            </div>
          </div>
          
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Certifications</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {certificates.map((cert, index) => (
              <Card key={index} className="p-4 hover-lift">
                <div className="flex items-start">
                  <FileText className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                  <p className="text-base">{cert}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8 gradient-text">Get In Touch</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <p className="text-muted-foreground">
                Let's Connect! Whether you want to discuss new opportunities, ideas or just want to have a chat about technology, feel free to reach out using the form below.
              </p>
            </div>

            <div className="flex justify-center">
              <ContactForm />
            </div>
            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-card/30">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2025 Shruti Kiran Patil. Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioSite;