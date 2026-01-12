import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  GraduationCap, 
  Briefcase, 
  Code2, 
  Cpu, 
  Globe, 
  Zap,
  ChevronDown,
  Layers,
  Award,
  Music,
  Users
} from 'lucide-react';

import ragCover from './assets/rag_project_cover_1767981135662.png';
import gestureCover from './assets/gesture_project_cover_1767981169463.png';
import tekknectCover from './assets/tekknect_project_cover_1767981152696.png';
import heroBg from './assets/portfolio_hero_section_1767980742565.png';
import aitCover from './assets/ait.jpg';
import tictactoeCover from './assets/tictactoe_project_cover_1767981217405.png';
import profilePic from './assets/harshit_profile.jpg';
import afterhoursLogo from './assets/afterhours_logo.jpg';

const Card3D = ({ children, className = "" }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, rotateY: 5, rotateX: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`glass-morphism p-6 ${className}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div style={{ transform: "translateZ(20px)" }}>
        {children}
      </div>
    </motion.div>
  );
};

const SectionHeader = ({ title, subtitle }) => (
  <div className="mb-12 text-center">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-extrabold mb-4"
      style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem' }}
    >
      {title}
    </motion.h2>
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: "100px" }}
      viewport={{ once: true }}
      className="rounded-full"
      style={{ height: '4px', background: 'linear-gradient(90deg, #00f2ff, #7000ff)', margin: '0 auto 16px', width: '100px' }}
    />
    <p className="text-gray-400 max-w-2xl mx-auto" style={{ color: '#a0a0ab', maxWidth: '42rem', margin: '0 auto' }}>{subtitle}</p>
  </div>
);

const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0a0a0c', color: 'white' }}>
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 z-50 origin-[0%]"
        style={{ scaleX, background: 'linear-gradient(90deg, #00f2ff, #7000ff)', height: '4px', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 glass-morphism p-4" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 40, border: 'none', borderRadius: '0', background: 'rgba(20, 20, 25, 0.3)' }}>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4" style={{ maxWidth: '80rem', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold gradient-text"
            style={{ fontSize: '1.5rem', fontWeight: 'bold' }}
          >
            HA.
          </motion.h1>
          <div className="hidden md:flex gap-8" style={{ display: 'flex', gap: '2rem' }}>
            {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{ color: '#a0a0ab', textDecoration: 'none', fontSize: '0.875rem', fontWeight: '500', transition: 'color 0.3s' }}
                onMouseEnter={(e) => e.target.style.color = '#00f2ff'}
                onMouseLeave={(e) => e.target.style.color = '#a0a0ab'}
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex gap-4" style={{ display: 'flex', gap: '1rem' }}>
            <a href="https://github.com/Shubhz20" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }} className="hover:text-cyan-400"><Github size={18} /></a>
            <a href="https://www.linkedin.com/in/harshitagrawal-/" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }} className="hover:text-purple-400"><Linkedin size={18} /></a>
            <a href="mailto:harshit.agrawal@adypu.edu.in" style={{ color: 'inherit', textDecoration: 'none' }} className="hover:text-white"><Mail size={18} /></a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <img 
            src={heroBg} 
            alt="Hero Background" 
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.1, mixBlendMode: 'overlay', filter: 'blur(8px)' }}
          />
          {/* Background Company Tabs */}
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 0.05, x: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{ 
                position: 'absolute', 
                top: '15%', 
                left: '5%', 
                padding: '1.5rem 3rem', 
                background: 'rgba(0, 242, 255, 0.08)', 
                borderRadius: '1rem',
                border: '1px solid rgba(0, 242, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                transform: 'rotate(-5deg)'
              }}
            >
              <span style={{ fontSize: '2rem', fontWeight: '800', color: 'white', letterSpacing: '0.05em' }}>TEK'KNECT</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 0.05, x: 0 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
              style={{ 
                position: 'absolute', 
                bottom: '20%', 
                right: '8%', 
                padding: '1.5rem 3rem', 
                background: 'rgba(112, 0, 255, 0.08)', 
                borderRadius: '1rem',
                border: '1px solid rgba(112, 0, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                transform: 'rotate(5deg)'
              }}
            >
              <span style={{ fontSize: '2rem', fontWeight: '800', color: 'white', letterSpacing: '0.05em' }}>AFTERHOURS</span>
            </motion.div>
          </div>
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ position: 'absolute', top: '25%', left: '25%', width: '24rem', height: '24rem', background: 'rgba(112, 0, 255, 0.15)', filter: 'blur(120px)', borderRadius: '9999px' }}
          />
          <motion.div 
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            style={{ position: 'absolute', bottom: '25%', right: '25%', width: '24rem', height: '24rem', background: 'rgba(0, 242, 255, 0.15)', filter: 'blur(120px)', borderRadius: '9999px' }}
          />
        </div>

        <motion.div 
          style={{ y: heroY, opacity: heroOpacity, zIndex: 10, textAlign: 'center', padding: '0 1rem' }}
        >
          <h2 style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)', color: '#00f2ff', marginBottom: '1rem', letterSpacing: '0.2em', fontWeight: '500' }}>HELLO, I'M</h2>
          <h1 style={{ fontSize: 'clamp(3rem, 10vw, 6rem)', fontWeight: '900', marginBottom: '1.5rem', lineHeight: '1.1', letterSpacing: '-0.02em' }}>
            HARSHIT <span className="gradient-text">AGRAWAL</span>
          </h1>
          <p style={{ fontSize: 'clamp(1.125rem, 3vw, 1.5rem)', color: '#a0a0ab', maxWidth: '48rem', margin: '0 auto 2.5rem', fontWeight: '300' }}>
            AI/ML Enthusiast • Full Stack Engineer • Entrepreneur
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ background: 'linear-gradient(135deg, #00f2ff, #7000ff)', border: 'none', cursor: 'pointer', padding: '14px 40px', borderRadius: '30px', color: 'white', fontWeight: '800', fontSize: '1rem', boxShadow: '0 0 20px rgba(0, 242, 255, 0.3)' }}
              onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            >
              View Journey
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(12px)', padding: '14px 40px', borderRadius: '30px', cursor: 'pointer', color: 'white', fontWeight: '800', fontSize: '1rem' }}
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </motion.button>
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ position: 'absolute', bottom: '2.5rem' }}
        >
          <ChevronDown size={32} style={{ color: '#6b7280' }} />
        </motion.div>
      </section>

      <section id="about" className="section-container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6 gradient-text" style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Professional Summary</h3>
            <p className="text-lg text-gray-300 mb-6" style={{ fontSize: '1.125rem', color: '#d1d5db', marginBottom: '1.5rem' }}>
              Pursuing a B.Tech at Newton School of Technology and a B.Sc. in Data Science from IIT Madras. 
              Experienced in building end-to-end web applications with exposure to backend workflows, 
              deployment, and version control.
            </p>
            <p className="text-lg text-gray-300" style={{ fontSize: '1.125rem', color: '#d1d5db' }}>
              Leadership experience at AIESEC Pune, managing a 22-member team, and developing corporate 
              communication skills while driving impactful exchange programs.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{ position: 'relative' }}
          >
            <motion.div 
              className="glass-morphism" 
              whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0, 242, 255, 0.2)' }}
              transition={{ duration: 0.3 }}
              style={{ aspectRatio: '1/1', position: 'relative', overflow: 'hidden', borderRadius: '1.5rem', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
                <motion.img 
                  src={profilePic} 
                  alt="Harshit Agrawal" 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 50%' }} 
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 50%, rgba(10,10,12,0.7))' }} />
              </div>
              <div style={{ padding: '1rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', background: 'rgba(20, 20, 25, 0.8)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                  <Zap size={16} style={{ color: '#facc15', marginBottom: '0.25rem' }} />
                  <span style={{ fontSize: '0.65rem', fontWeight: 'bold' }}>Fast Learner</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                   <Users size={16} style={{ color: '#c084fc', marginBottom: '0.25rem' }} />
                  <span style={{ fontSize: '0.65rem', fontWeight: 'bold' }}>Team Leader</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                  <Globe size={16} style={{ color: '#60a5fa', marginBottom: '0.25rem' }} />
                  <span style={{ fontSize: '0.65rem', fontWeight: 'bold' }}>Global Mindset</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                  <Cpu size={16} style={{ color: '#22d3ee', marginBottom: '0.25rem' }} />
                  <span style={{ fontSize: '0.65rem', fontWeight: 'bold' }}>Full Stack Developer & AI Enthusiast</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-container" style={{ borderRadius: '3rem', background: 'rgba(255,255,255,0.03)', padding: '5rem 2rem', margin: '5rem auto' }}>
        <SectionHeader title="Tech Arsenal" subtitle="Core technologies and tools I use to bring ideas to life." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1.5rem' }}>
          {[
            { name: 'Python', color: '#3776AB' },
            { name: 'JavaScript', color: '#F7DF1E' },
            { name: 'React', color: '#61DAFB' },
            { name: 'Node.js', color: '#339933' },
            { name: 'MongoDB', color: '#47A248' },
            { name: 'Express', color: '#ffffff' },
            { name: 'Prisma', color: '#2D3748' },
            { name: 'MySQL', color: '#4479A1' },
            { name: 'OpenCV', color: '#5C3EE8' },
            { name: 'NumPy', color: '#013243' },
            { name: 'LangChain', color: '#FF7043' },
            { name: 'Figma', color: '#F24E1E' }
          ].map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.1, rotateZ: 2 }}
              className="glass-morphism p-4"
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', cursor: 'pointer' }}
            >
              <div style={{ width: '3rem', height: '3rem', background: 'rgba(255,255,255,0.05)', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Code2 size={24} style={{ color: skill.color }} />
              </div>
              <span style={{ fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section-container">
        <SectionHeader title="Featured Projects" subtitle="A showcase of AI, web, and experimentations." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {[
          {
            title: "RAG System for Books",
            img: ragCover,
            desc: "Context-aware summarization and querying using Google Gemini and LangChain.",
            date: "Dec 2025",
            tech: ["Gemini", "LangChain", "VectorDB"],
            github: "https://github.com/Shubhz20/RAG_BookInsights",
            demo: "https://ragbookinsights-agmyyng7whgbvrbs9qh25z.streamlit.app/"
          },
          {
            title: "Hand Gesture Volume Control",
            img: gestureCover,
            desc: "Real-time gesture recognition using MediaPipe to control system volume on macOS.",
            date: "Dec 2025",
            tech: ["Python", "MediaPipe", "OpenCV"],
            github: "https://github.com/Shubhz20/Hand-Gesture-Volume-Control",
            demo: "https://appapppy-7y6e5uvlwrwjzxmnx8c3gq.streamlit.app/"
          },
          {
            title: "Tek'knect",
            img: tekknectCover,
            desc: "Full-stack platform for industry mentorship with Google OAuth integration.",
            date: "Oct 2025",
            tech: ["React", "Express", "MongoDB", "OAuth"],
            github: "https://github.com/Shubhz20/Tek-knect-",
            demo: "https://tek-knect.vercel.app/"
          },
          {
            title: "Tic-Tac-Toe AI",
            img: tictactoeCover,
            desc: "Classic game with an unbeatable Minimax algorithm implementation.",
            date: "2024",
            tech: ["React", "Algorithms", "Logic"],
            github: "https://github.com/Shubhz20/Tic-tac-toe-wap",
            demo: "https://tictactoe-wapgame.netlify.app/"
          },
          {
            title: "AfterHours Event Management",
            img: afterhoursLogo,
            desc: "Event management platform for parties and other events.",
            date: "2025",
            tech: ["React", "Vite", "Node.js"],
            github: null,
            demo: "https://afterhours-itwasalladream.vercel.app/"
          },
          {
            title: "AIESEC In Tanta Onboarding Portal",
            img: aitCover,
            desc: "Onboarding portal for AIESEC members in Tanta.",
            date: "2025",
            tech: ["React", "Firebase"],
            github: "https://github.com/Shubhz20/aiesec-in-tanta",
            demo: "https://aiesecintanta.netlify.app/"
          }
        ].map((proj) => (
            <motion.div
              key={proj.title}
              whileHover={{ y: -10 }}
              className="glass-morphism"
              style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%' }}
            >
              <div style={{ height: '12rem', overflow: 'hidden', position: 'relative' }}>
                <img src={proj.img} alt={proj.title} style={{ width: '100%', height: '100%', objectCover: 'cover', opacity: 0.8 }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent, rgba(10,10,12,0.8))' }} />
              </div>
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{proj.title}</h4>
                  <span style={{ fontSize: '0.75rem', color: '#00f2ff', fontFamily: 'monospace' }}>{proj.date}</span>
                </div>
                <p style={{ fontSize: '0.875rem', color: '#a0a0ab', marginBottom: '1.5rem' }}>{proj.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {proj.tech.map(t => (
                    <span key={t} style={{ fontSize: '10px', padding: '0.25rem 0.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '9999px', border: '1px solid rgba(255,255,255,0.1)' }}>{t}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                   {proj.github && (
                     <a href={proj.github} target="_blank" rel="noreferrer" style={{ fontSize: '0.75rem', color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="hover:text-cyan-400">
                       <Github size={14}/> Code
                     </a>
                   )}
                   {proj.demo && (
                     <a href={proj.demo} target="_blank" rel="noreferrer" style={{ fontSize: '0.75rem', color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="hover:text-cyan-400">
                       <ExternalLink size={14}/> Demo
                     </a>
                   )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="section-container">
        <SectionHeader title="My Journey" subtitle="Experiences that shaped my professional growth." />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', position: 'relative' }}>
          {[
            {
              role: "Senior Manager - Incoming Corporate",
              org: "AIESEC in Pune",
              date: "Jan 2025 - Present",
              learnings: [
                "Team Leadership & Management of 22+ members",
                "CRM Systems & Lead Tracking",
                "Corporate Sponsorship Strategy",
                "Cross-functional Communication"
              ]
            },
            {
              role: "Business Development Manager",
              org: "AIESEC in Pune",
              date: "Jan - Aug 2025",
              learnings: [
                "Business Scaling Strategies",
                "Partnership Development & Networking",
                "Operations & Process Design",
                "Startup Growth Mindset",
                "Strategic Planning & Execution"
              ]
            },
            {
              role: "Frontend Development Intern",
              org: "Safrni Egypt",
              date: "June - Aug 2025",
              learnings: [
                "Responsive Web Design Principles",
                "Design Thinking Process",
                "Mobile-First Development",
                "Tourism Industry UX Patterns",
                "Cross-cultural Collaboration"
              ]
            },
            {
              role: "Marketing Intern",
              org: "AIESEC in Egypt",
              date: "May - July 2025",
              learnings: [
                "React Component Architecture",
                "Portal Development & User Flows",
                "Global Team Collaboration",
                "Onboarding System Design",
                "Agile Development Practices"
              ]
            }
          ].map((exp, idx) => (
            <motion.div
              key={exp.role + idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: '2rem', alignItems: 'center' }}
            >
              {/* Left side - Brief Info */}
              <div style={{ textAlign: 'right' }} className="hidden md:block">
                <div className="glass-morphism" style={{ padding: '1.5rem', display: 'inline-block', maxWidth: '350px', textAlign: 'left' }}>
                  <h4 style={{ fontWeight: 'bold', fontSize: '1.25rem', color: '#00f2ff', marginBottom: '0.5rem' }}>{exp.role}</h4>
                  <p style={{ color: '#9ca3af', fontSize: '0.875rem', marginBottom: '0.25rem' }}>{exp.org}</p>
                  <p style={{ fontSize: '0.75rem', fontFamily: 'monospace', margin: '0.5rem 0 0', color: '#6b7280' }}>{exp.date}</p>
                </div>
              </div>

              {/* Center icon */}
              <div style={{ 
                width: '3.5rem', 
                height: '3.5rem', 
                borderRadius: '9999px', 
                background: 'linear-gradient(135deg, #00f2ff, #7000ff)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                flexShrink: 0, 
                boxShadow: '0 0 15px rgba(0, 242, 255, 0.3)',
                zIndex: 10
              }}>
                <Briefcase size={20} />
              </div>

              {/* Right side - Detailed Learnings */}
              <div style={{ textAlign: 'left' }} className="hidden md:block">
                <div className="glass-morphism" style={{ padding: '1.5rem', display: 'inline-block', maxWidth: '450px' }}>
                  <h5 style={{ fontSize: '0.875rem', fontWeight: '700', color: '#00f2ff', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    What I Learned
                  </h5>
                  <ul style={{ fontSize: '0.875rem', color: '#d1d5db', listStyle: 'none', paddingLeft: 0, margin: 0 }}>
                    {exp.learnings.map(learning => (
                      <li key={learning} style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                        <span style={{ color: '#00f2ff', flexShrink: 0, fontSize: '1rem' }}>✓</span>
                        <span>{learning}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Mobile view - Combined */}
              <div style={{ gridColumn: '1 / -1', display: 'block' }} className="md:hidden">
                <div className="glass-morphism" style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                    <div style={{ 
                      width: '3rem', 
                      height: '3rem', 
                      borderRadius: '9999px', 
                      background: 'linear-gradient(135deg, #00f2ff, #7000ff)', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      flexShrink: 0 
                    }}>
                      <Briefcase size={18} />
                    </div>
                    <div>
                      <h4 style={{ fontWeight: 'bold', fontSize: '1.125rem', color: '#00f2ff', marginBottom: '0.25rem' }}>{exp.role}</h4>
                      <p style={{ color: '#9ca3af', fontSize: '0.875rem', marginBottom: '0.25rem' }}>{exp.org}</p>
                      <p style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: '#6b7280' }}>{exp.date}</p>
                    </div>
                  </div>
                  <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem' }}>
                    <h5 style={{ fontSize: '0.75rem', fontWeight: '700', color: '#00f2ff', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
                      What I Learned
                    </h5>
                    <ul style={{ fontSize: '0.875rem', color: '#d1d5db', listStyle: 'none', paddingLeft: 0, margin: 0 }}>
                      {exp.learnings.map(learning => (
                        <li key={learning} style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                          <span style={{ color: '#00f2ff', flexShrink: 0 }}>✓</span>
                          <span>{learning}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="section-container" style={{ borderRadius: '3rem', background: 'rgba(255,255,255,0.03)', padding: '5rem 2rem', margin: '5rem auto' }}>
        <SectionHeader title="Education" subtitle="Foundation of my knowledge and skills." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {[
            {
              degree: "B.Tech (AI ML)",
              inst: "Newton School of Technology (ADYPU)",
              period: "2024 - 2028",
              grade: "8.23/10.0",
              color: "#00f2ff"
            },
            {
              degree: "B.Sc (Data Science)",
              inst: "IIT Madras",
              period: "2024 - 2027",
              grade: "10.0/10.0",
              color: "#7000ff"
            },
            {
              degree: "12th Grade (CBSE)",
              inst: "Senior Secondary Education",
              period: "2023 - 2024",
              grade: "79%",
              color: "#22d3ee"
            },
            {
              degree: "10th Grade (CBSE)",
              inst: "Secondary Education",
              period: "2022 - 2023",
              grade: "95.6%",
              color: "#a78bfa"
            }
          ].map(edu => (
            <Card3D key={edu.degree} style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <div style={{ padding: '1rem', borderRadius: '1rem', background: `${edu.color}1a` }}>
                <GraduationCap style={{ color: edu.color }} size={40} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{edu.degree}</h4>
                <p style={{ color: '#a0a0ab', fontSize: '0.875rem' }}>{edu.inst}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'monospace', color: '#6b7280' }}>{edu.period}</span>
                  <span style={{ fontSize: '0.875rem', fontWeight: 'bold', background: 'linear-gradient(135deg, #00f2ff, #7000ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>GPA: {edu.grade}</span>
                </div>
              </div>
            </Card3D>
          ))}
        </div>
      </section>

      {/* Extra Curricular - AfterHours */}
      <section className="section-container">
        <div className="glass-morphism" style={{ padding: '0', borderRadius: '4rem', position: 'relative', overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', width: '100%' }}>
            <div style={{ height: '500px', overflow: 'hidden', position: 'relative' }}>
              <img src={afterhoursLogo} alt="AfterHours Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent, rgba(10,10,12,0.8))' }} />
            </div>
            <div style={{ padding: '3rem', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                style={{ position: 'absolute', top: '-6rem', right: '-6rem', opacity: 0.1 }}
              >
                <Music size={300} />
              </motion.div>
              
              <div style={{ position: 'relative', zIndex: 10 }}>
                <h3 style={{ fontSize: '2.25rem', fontWeight: '900', marginBottom: '1.5rem', fontStyle: 'italic', letterSpacing: '-0.02em' }}>AFTERHOURS <span style={{ color: '#7000ff' }}>EVENTS</span></h3>
                <p style={{ fontSize: '1.25rem', color: '#d1d5db', marginBottom: '2rem', fontWeight: '300' }}>
                  Founded and running AfterHours, an event company organizing themed parties and major college festivals. 
                  Hands-on experience in planning, Operations, Promotion, and Audience Engagement.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1.5rem' }}>
                  <div style={{ borderLeft: '2px solid #00f2ff', paddingLeft: '1rem' }}>
                    <h5 style={{ fontWeight: 'bold' }}>3+ Major Events</h5>
                    <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>Successful executions</p>
                  </div>
                  <div style={{ borderLeft: '2px solid #7000ff', paddingLeft: '1rem' }}>
                    <h5 style={{ fontWeight: 'bold' }}>Sponsorships</h5>
                    <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>Corporate partnerships</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="section-container" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>Let's Build Something <span className="gradient-text">Great</span></h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '3rem' }}>
           <motion.a whileHover={{ scale: 1.2 }} href="mailto:harshit.agrawal@adypu.edu.in" style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '9999px', color: 'white', display: 'flex', alignItems: 'center' }}><Mail /></motion.a>
           <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/harshitagrawal-/" target="_blank" rel="noreferrer" style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '9999px', color: 'white', display: 'flex', alignItems: 'center' }}><Linkedin /></motion.a>
           <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/Shubhz20" target="_blank" rel="noreferrer" style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '9999px', color: 'white', display: 'flex', alignItems: 'center' }}><Github /></motion.a>
        </div>
        <p style={{ color: '#6b7280', fontSize: '0.875rem', marginBottom: '1rem' }}>Designed & Built by Harshit Agrawal © 2026</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', fontSize: '0.75rem', fontFamily: 'monospace', color: '#4b5563' }}>
          <span>+916377303438</span>
          <span>•</span>
          <span>Pune, India</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
