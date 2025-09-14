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
import profilePhoto from '@/assets/profile-photo.jpg';

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
    { name: 'Python', level: 90 },
    { name: 'Java', level: 85 },
    { name: 'C/C++', level: 80 },
    { name: 'JavaScript', level: 75 },
    { name: 'HTML/CSS', level: 85 },
    { name: 'SQL', level: 80 },
    { name: 'Data Structures & Algorithms', level: 85 },
    { name: 'Git/GitHub', level: 80 }
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
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 tech-grid opacity-30" />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-fade-in">
            <img 
              src={profilePhoto} 
              alt="Shruti Kiran Patil"
              className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-primary/50 shadow-2xl hover-glow"
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
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-primary mr-3" />
                  <span>shrutikpatil7111@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-primary mr-3" />
                  <span>+91-9044911171</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-primary mr-3" />
                  <span>Pune, Maharashtra, India</span>
                </div>
              </div>
            </div>

            {/* Education Timeline */}
            <div className="animate-slide-in-right">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Education</h3>
              <div className="space-y-6">
                <Card className="p-6 hover-lift">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">B.Tech – Computer Engineering</h4>
                      <p className="text-primary">Rajarambapu Institute of Technology, Islampur</p>
                      <p className="text-sm text-muted-foreground">2025 • CGPA: 8.11</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 hover-lift">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-accent rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">HSC</h4>
                      <p className="text-accent">Dnyandeep Junior College</p>
                      <p className="text-sm text-muted-foreground">2021 • 97.50%</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 hover-lift">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">SSC</h4>
                      <p className="text-muted-foreground">Kamalabai Ramnane Kanya Vidyalaya</p>
                      <p className="text-sm text-muted-foreground">2019 • 96.60%</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Technical Skills</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Languages: English, Hindi, Marathi, German</p>
            <p className="text-muted-foreground">Concepts: Data Structures & Algorithms, OOPs, Git, GitHub</p>
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
                
                <div className="flex space-x-3">
                  {project.liveUrl && (
                    <Button size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
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
          
          <div className="max-w-3xl mx-auto space-y-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-6 hover-lift">
                <div className="flex items-center">
                  <Award className="w-6 h-6 text-primary mr-4 flex-shrink-0" />
                  <p className="text-lg">{achievement}</p>
                </div>
              </Card>
            ))}
          </div>

          {/* Activities */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-primary">Activities & Competitions</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="p-6 hover-lift">
                <Calendar className="w-6 h-6 text-accent mb-3" />
                <h4 className="font-semibold mb-2">Code Clash 2025</h4>
                <p className="text-muted-foreground">402nd rank in Algorithm Arena (April 2025)</p>
              </Card>
              
              <Card className="p-6 hover-lift">
                <Calendar className="w-6 h-6 text-accent mb-3" />
                <h4 className="font-semibold mb-2">Employability Skills Training</h4>
                <p className="text-muted-foreground">Rubicon LifeSkills (March 2024)</p>
              </Card>
              
              <Card className="p-6 hover-lift">
                <Calendar className="w-6 h-6 text-accent mb-3" />
                <h4 className="font-semibold mb-2">Data Analytics & ML Workshop</h4>
                <p className="text-muted-foreground">RIT (March 2024)</p>
              </Card>
              
              <Card className="p-6 hover-lift">
                <Calendar className="w-6 h-6 text-accent mb-3" />
                <h4 className="font-semibold mb-2">IEEE Day – Code Spark Contest</h4>
                <p className="text-muted-foreground">(October 2023)</p>
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
                  <FileText className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <p className="text-sm">{cert}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Get In Touch</h2>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8">
                I'm always open to discussing new opportunities, collaborations, or just having a chat about technology!
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

            <div>
              <h3 className="text-2xl font-semibold mb-6">Professional Links</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, index) => (
                  <Button 
                    key={index} 
                    variant="outline" 
                    className="justify-start hover-lift hover-glow h-auto p-4"
                    asChild
                  >
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      <link.icon className="w-5 h-5 mr-3" />
                      <span className="text-left">
                        <div className="font-medium">{link.name}</div>
                        <div className="text-xs text-muted-foreground">View Profile</div>
                      </span>
                    </a>
                  </Button>
                ))}
              </div>
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