
"use client";

import React, { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import AquaWindow from '@/components/ui/aqua-window';
import { AquaList, AquaRow } from '@/components/ui/aqua-list';
import { submitContactForm } from '@/lib/actions';
import { Github, Linkedin, Mail, Loader2, Send, MapPin, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const FIELD_CLASS =
  'aqua-field rounded-control border-aqua-hairline/40 bg-white focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-black/25';

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
          title: 'Message sent',
          description: "It's in my inbox. I'll reply as soon as I can.",
        });
        form.reset();
      } else {
        toast({
          variant: 'destructive',
          title: "That didn't go through",
          description: result.message || 'Please try again, or email me directly.',
        });
      }
    });
  }

  const channels = [
    {
      label: 'Email',
      value: 'sarsonasjosephuskim@gmail.com',
      icon: <Mail className="h-4 w-4" />,
      href: 'mailto:sarsonasjosephuskim@gmail.com',
    },
    {
      label: 'Phone',
      value: '(+63) 991 863 0201',
      icon: <Phone className="h-4 w-4" />,
      href: 'tel:+639918630201',
    },
    {
      label: 'GitHub',
      value: '@baphus',
      icon: <Github className="h-4 w-4" />,
      href: 'https://github.com/baphus',
      external: true,
    },
    {
      label: 'LinkedIn',
      value: 'josephus-kim-sarsonas',
      icon: <Linkedin className="h-4 w-4" />,
      href: 'https://www.linkedin.com/in/josephus-kim-sarsonas-1b5191260/',
      external: true,
    },
  ];

  return (
    <div className="container mx-auto max-w-5xl px-4 md:px-6">
      <div className="grid items-start gap-6 lg:grid-cols-[1.35fr_1fr]">
        <AquaWindow title="New Message">
          <div className="p-6 md:p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[12px] font-bold">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} className={`${FIELD_CLASS} h-11`} />
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
                        <FormLabel className="text-[12px] font-bold">Email</FormLabel>
                        <FormControl>
                          <Input placeholder="you@example.com" {...field} className={`${FIELD_CLASS} h-11`} />
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
                      <FormLabel className="text-[12px] font-bold">Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="What it's about" {...field} className={`${FIELD_CLASS} h-11`} />
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
                      <FormLabel className="text-[12px] font-bold">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell me what you need."
                          rows={7}
                          {...field}
                          className={`${FIELD_CLASS} resize-none`}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="btn-aqua btn-aqua-primary h-12 w-full" disabled={isPending}>
                  {isPending ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <span className="flex items-center gap-2">
                      Send message <Send className="h-4 w-4" />
                    </span>
                  )}
                </Button>

                {/* What happens to the data someone types here. */}
                <p className="text-[11px] leading-relaxed text-muted-foreground">
                  Your name, email address and message are sent to my email inbox and used only to
                  reply to you. They are not stored on this site and not shared with anyone else.
                </p>
              </form>
            </Form>
          </div>
        </AquaWindow>

        <div className="space-y-6">
          <AquaWindow title="Contact">
            <div className="space-y-4 p-4">
              <p className="px-1 text-[13px] leading-relaxed text-muted-foreground">
                Email gets the fastest reply. The form and my inbox go to the same place, so use
                whichever you prefer.
              </p>
              <AquaList>
                {channels.map((channel) => (
                  <AquaRow
                    key={channel.label}
                    icon={channel.icon}
                    label={channel.label}
                    value={channel.value}
                    href={channel.href}
                    external={channel.external}
                  />
                ))}
                <AquaRow
                  icon={<MapPin className="h-4 w-4" />}
                  label="Location"
                  value="Cebu, Philippines"
                />
              </AquaList>
            </div>
          </AquaWindow>
        </div>
      </div>
    </div>
  );
}
