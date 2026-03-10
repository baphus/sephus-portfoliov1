
"use client";

import React from 'react';
import { 
  ArrowUp, 
  Github, 
  Linkedin, 
  Facebook, 
  Mail, 
  MapPin, 
  MessageSquare,
  CheckCircle2,
  Gitlab
} from 'lucide-react';
import Logo from './logo';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { label: 'GitHub', handle: '@baphus', icon: <Github className="h-4 w-4" />, href: 'https://github.com/baphus' },
    { label: 'GitLab', handle: '@josephuskim', icon: <Gitlab className="h-4 w-4" />, href: '#' },
    { label: 'LinkedIn', handle: '@jksarsonas', icon: <Linkedin className="h-4 w-4" />, href: 'https://www.linkedin.com/in/josephus-kim-sarsonas-1b5191260/' },
    { label: 'Facebook', handle: '@josephusf23', icon: <Facebook className="h-4 w-4" />, href: '#' },
    { label: 'Email', handle: 'sarsonasjosephus@gmail.com', icon: <Mail className="h-4 w-4" />, href: 'mailto:sarsonasjosephuskim@gmail.com' },
  ];

  return (
    <footer className="w-full pt-24 pb-12 bg-background border-t border-border/50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Profile Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 rounded-full overflow-hidden border-2 border-primary shadow-lg">
                 <Image src="/about/600x750.png" alt="Josephus" fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-black font-headline text-foreground leading-none">Ferdz</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mt-2">Full-Stack Developer</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground font-medium">
                <div className="p-1.5 rounded-lg bg-primary/10 text-primary">
                  <MapPin className="h-4 w-4" />
                </div>
                Philippines
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground font-medium">
                <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-500">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                Open to full-time roles and projects
              </div>
            </div>

            <div className="bg-white/40 dark:bg-neutral-900/40 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-sm">
              <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-3">Let's build something amazing</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Passionate about creating innovative solutions that solve real-world problems through clean code.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-8 space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground">Quick Links</h4>
            <nav className="flex flex-col space-y-4">
              {['Home', 'Portfolio', 'Experience', 'Skills', 'Education', 'Certifications', 'Contact'].map((link) => (
                <a 
                  key={link} 
                  href={`#${link.toLowerCase()}`} 
                  className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors flex items-center gap-3 group"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-border group-hover:bg-primary transition-colors" />
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect Column */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground">Connect</h4>
            <div className="space-y-3">
              {socialLinks.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-2xl bg-white/40 dark:bg-neutral-900/40 backdrop-blur-md border border-white/10 hover:border-primary/30 hover:bg-primary/5 transition-all group"
                >
                  <div className="p-2 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                    {link.icon}
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground leading-none">{link.label}</p>
                    <p className="text-xs font-bold text-foreground mt-1 truncate">{link.handle}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Availability Status */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground">Availability</h4>
            <div className="bg-white/50 dark:bg-neutral-900/50 backdrop-blur-2xl rounded-[2.5rem] border border-white/20 p-8 space-y-6 shadow-xl">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Available for full-time roles, job offers, and freelance web projects.
              </p>
              
              <div className="space-y-4">
                <a href="mailto:sarsonasjosephus@gmail.com" className="flex items-center gap-3 text-sm group">
                  <div className="p-2 rounded-xl bg-primary/10 text-primary">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span className="font-bold text-foreground group-hover:text-primary transition-colors">ferdz.waine.mak@gmail.com</span>
                </a>
                <div className="flex items-center gap-3 text-sm">
                  <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-500">
                    <MessageSquare className="h-4 w-4" />
                  </div>
                  <span className="text-muted-foreground font-medium">Usually replies within 24 hours</span>
                </div>
              </div>

              <div className="pt-4 border-t border-border/50">
                <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-3">Specializing in</p>
                <div className="flex flex-wrap gap-1.5">
                  {['Next.js & React', 'Laravel, Symfony, CodeIgniter', 'WordPress & Drupal CMS', 'PHP', 'JavaScript'].map(s => (
                    <Badge key={s} variant="secondary" className="text-[9px] px-2 py-0.5 rounded-md bg-primary/5 text-primary border-primary/10 font-bold">
                      {s}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-border/30">
          <p className="text-xs font-bold text-muted-foreground tracking-widest uppercase">
            &copy; {currentYear} <span className="text-foreground">Ferdz</span> • All rights reserved.
          </p>
          <div className="flex items-center gap-8 mt-6 md:mt-0">
            <button onClick={scrollToTop} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground hover:text-primary transition-all group">
              Back to top <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-1" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

