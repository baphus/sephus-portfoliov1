
"use client";

import React from 'react';
import { Button } from './ui/button';
import { 
  ArrowUp, 
  Github, 
  Linkedin, 
  Facebook, 
  Mail, 
  MapPin, 
  CheckCircle2,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import Logo from './logo';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { label: 'GitHub', value: '@baphus', icon: <Github className="h-4 w-4" />, href: 'https://github.com/baphus' },
    { label: 'LinkedIn', value: '@josephus-kim-sarsonas', icon: <Linkedin className="h-4 w-4" />, href: 'https://www.linkedin.com/in/josephus-kim-sarsonas-1b5191260/' },
    { label: 'Facebook', value: '@josephus.sarsonas', icon: <Facebook className="h-4 w-4" />, href: '#' },
    { label: 'Email', value: 'sarsonasjosephuskim@gmail.com', icon: <Mail className="h-4 w-4" />, href: 'mailto:sarsonasjosephuskim@gmail.com' },
  ];

  return (
    <footer className="w-full pt-20 pb-10 bg-background border-t">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Profile Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Logo className="h-10 w-10 text-primary" />
              <div>
                <h3 className="text-xl font-bold font-headline leading-none">Josephus</h3>
                <p className="text-xs text-muted-foreground mt-1">Full-Stack Developer</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                Philippines
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                Open to full-time roles and projects
              </div>
            </div>
            <div className="bg-primary/5 border border-primary/10 rounded-2xl p-4">
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Let's build something</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Passionate about creating innovative solutions through clean and performant code.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">Quick Links</h4>
            <nav className="flex flex-col space-y-3">
              {['Home', 'About', 'Skills', 'Portfolio', 'Education', 'Contact'].map((link) => (
                <a 
                  key={link} 
                  href={`#${link.toLowerCase()}`} 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
                >
                  <div className="h-1 w-1 rounded-full bg-border group-hover:bg-primary transition-colors" />
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Connections */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">Connect</h4>
            <div className="space-y-3">
              {socialLinks.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 border border-transparent hover:border-primary/20 hover:bg-primary/5 transition-all group"
                >
                  <div className="p-2 rounded-lg bg-background group-hover:text-primary transition-colors">
                    {link.icon}
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground leading-none">{link.label}</p>
                    <p className="text-xs font-semibold truncate mt-1">{link.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Availability Status */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">Availability</h4>
            <div className="bg-white/40 dark:bg-neutral-900/40 backdrop-blur-md rounded-[2rem] border border-white/20 p-6 space-y-4">
              <p className="text-xs text-muted-foreground leading-relaxed">
                Available for full-time roles, job offers, and freelance web projects.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs">
                  <Mail className="h-3 w-3 text-primary" />
                  <span className="font-semibold">sarsonasjosephuskim@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <MessageSquare className="h-3 w-3 text-primary" />
                  <span className="text-muted-foreground">Usually replies within 24 hours</span>
                </div>
              </div>
              <div className="pt-2">
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">Specializing in</p>
                <div className="flex flex-wrap gap-1.5">
                  {['Next.js', 'Laravel', 'React', 'TypeScript', 'PostgreSQL'].map(s => (
                    <Badge key={s} variant="secondary" className="text-[9px] px-2 py-0 rounded-md bg-primary/5 text-primary border-primary/10">
                      {s}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} <span className="font-bold text-foreground">Josephus</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <button onClick={scrollToTop} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
              Back to top <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
