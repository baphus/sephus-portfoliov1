"use client";

import React, { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { submitContactForm } from '@/lib/actions';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Loader2, 
  Send, 
  Facebook, 
  MapPin, 
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export default function Contact() {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', email: '', subject: '', message: '' },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(async () => {
      const result = await submitContactForm(values);
      if (result.success) {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        form.reset();
      } else {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: result.message || "There was a problem with your request.",
        });
      }
    });
  }

  const socialLinks = [
    { 
      label: 'Email', 
      value: 'sarsonasjosephuskim@gmail.com', 
      icon: <Mail className="h-5 w-5" />, 
      href: 'mailto:sarsonasjosephuskim@gmail.com' 
    },
    { 
      label: 'GitHub', 
      value: '@baphus', 
      icon: <Github className="h-5 w-5" />, 
      href: 'https://github.com/baphus' 
    },
    { 
      label: 'LinkedIn', 
      value: 'Josephus Kim Sarsonas', 
      icon: <Linkedin className="h-5 w-5" />, 
      href: 'https://www.linkedin.com/in/josephus-kim-sarsonas-1b5191260/' 
    },
    { 
      label: 'Facebook', 
      value: 'Josephus Sarsonas', 
      icon: <Facebook className="h-5 w-5" />, 
      href: '#' 
    },
    { 
      label: 'Location', 
      value: 'Cebu City, Philippines', 
      icon: <MapPin className="h-5 w-5" />, 
      href: '#' 
    },
  ];

  return (
    <div className="container mx-auto px-4 md:px-6">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
          <MessageSquare className="h-4 w-4" />
          <span>Contact</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight font-headline">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl leading-relaxed text-lg">
          Let&apos;s discuss your next project. I&apos;m always excited to work on something amazing together.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
        {/* Left Column: Form */}
        <Card className="rounded-[2.5rem] border-white/20 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-xl shadow-xl p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold font-headline mb-2">Send me a message</h3>
            <p className="text-muted-foreground text-sm mb-8">
              Fill out the form below and I&apos;ll get back to you as soon as possible.
            </p>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-bold">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your full name" {...field} className="bg-background/50 border-border/50 rounded-xl h-12" />
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
                        <FormLabel className="font-bold">Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your.email@example.com" {...field} className="bg-background/50 border-border/50 rounded-xl h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-bold">Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="What's this about?" {...field} className="bg-background/50 border-border/50 rounded-xl h-12" />
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
                      <FormLabel className="font-bold">Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Tell me about your project or just say hello!" {...field} rows={6} className="bg-background/50 border-border/50 rounded-2xl resize-none" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full btn-aqua btn-aqua-primary h-14 rounded-2xl shadow-lg group transition-transform hover:scale-[1.02]" disabled={isPending}>
                  {isPending ? (
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  ) : (
                    <span className="flex items-center gap-2 text-base">
                      Send Message <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </span>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </Card>

        {/* Right Column: Contact Info */}
        <div className="space-y-6">
          <Card className="rounded-[2.5rem] border-white/20 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-xl shadow-xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold font-headline mb-8">Connect with me</h3>
              
              <div className="space-y-4">
                {socialLinks.map((link, idx) => (
                  <a 
                    key={idx} 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-background/40 border border-border/50 hover:bg-primary/5 hover:border-primary/30 transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                      {link.icon}
                    </div>
                    <div className="flex-1 overflow-hidden">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{link.label}</p>
                      <p className="text-sm font-semibold truncate group-hover:text-primary transition-colors">{link.value}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </a>
                ))}
              </div>
            </div>
          </Card>

          {/* Chat Floating Action Button Tip */}
          <div className="hidden lg:flex justify-end pr-4">
            <div className="flex items-center gap-3 p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-emerald-600 text-xs font-bold animate-bounce">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
              Quick Response Guaranteed
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
