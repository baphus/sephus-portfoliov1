
"use client";

import React from 'react';
import Link from 'next/link';
import { 
  ArrowUp, 
  Github, 
  Linkedin, 
  Facebook, 
  Mail, 
  MapPin, 
  MessageSquare,
  CheckCircle2,
  Phone
} from 'lucide-react';
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
    { label: 'LinkedIn', handle: 'Josephus Kim Sarsonas', icon: <Linkedin className="h-4 w-4" />, href: 'https://www.linkedin.com/in/josephus-kim-sarsonas-1b5191260/' },
    { label: 'Phone', handle: '(+63) 9918630201', icon: <Phone className="h-4 w-4" />, href: 'tel:+639918630201' },
    { label: 'Email', handle: 'sarsonasjosephuskim@gmail.com', icon: <Mail className="h-4 w-4" />, href: 'mailto:sarsonasjosephuskim@gmail.com' },
  ];

  return (
    <footer className="w-full pt-24 pb-20 bg-background border-t border-border/50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Profile Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 rounded-full overflow-hidden border-2 border-primary shadow-lg bg-muted">
                 <Image src="/about/600x750.png" alt="Josephus Kim L. Sarsonas" fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-black font-headline text-foreground leading-none">Josephus</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mt-2">Full-Stack Developer</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground font-medium">
                <div className="p-1.5 rounded-lg bg-primary/10 text-primary">
                  <MapPin className="h-4 w-4" />
                </div>
                Toledo City, Cebu
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground font-medium">
                <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-500">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                Available for Internship
              </div>
            </div>

            <div className="bg-white/5 dark:bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-6">
              <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-3">Professional Philosophy</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Autonomous developer delivering scalable solutions across the SDLC using MVC architecture and modern tech.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-8 space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground">Navigation</h4>
            <nav className="flex flex-col space-y-4">
              {[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' },
                { label: 'Skills', href: '/skills' },
                { label: 'Portfolio', href: '/portfolio' },
                { label: 'Education', href: '/education' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <Link 
                  key={link.label} 
                  href={link.href} 
                  className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors flex items-center gap-3 group"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-border group-hover:bg-primary transition-colors" />
                  {link.label}
                </Link>
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
                  className="flex items-center gap-4 p-3 rounded-2xl bg-white/5 dark:bg-white/[0.02] border border-white/5 hover:border-primary/30 hover:bg-primary/5 transition-all group"
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
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground">Status</h4>
            <div className="bg-white/5 dark:bg-white/[0.02] backdrop-blur-2xl rounded-[2.5rem] border border-white/10 p-8 space-y-6">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Available to start a remote internship in May 2026.
              </p>
              
              <div className="space-y-4">
                <a href="mailto:sarsonasjosephuskim@gmail.com" className="flex items-center gap-3 text-sm group">
                  <div className="p-2 rounded-xl bg-primary/10 text-primary">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span className="font-bold text-foreground group-hover:text-primary transition-colors text-xs truncate">sarsonasjosephuskim@gmail.com</span>
                </a>
                <div className="flex items-center gap-3 text-sm">
                  <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-500">
                    <MessageSquare className="h-4 w-4" />
                  </div>
                  <span className="text-muted-foreground font-medium text-xs">Seeking May Internship</span>
                </div>
              </div>

              <div className="pt-4 border-t border-border/50">
                <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-3">Core Stack</p>
                <div className="flex flex-wrap gap-1.5">
                  {['Next.js', 'Laravel', 'Express', 'Typescript', 'SQL'].map(s => (
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
            &copy; {currentYear} <span className="text-foreground">Josephus Kim L. Sarsonas</span> • All rights reserved.
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
