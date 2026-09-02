"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  GraduationCap,
  MapPin,
  MessageCircle,
  Users,
} from 'lucide-react';
import AquaWindow from '@/components/ui/aqua-window';

const communityRoles = [
  {
    role: 'Core Tech Officer',
    organization: 'AWS Student Builder Group — Cebu Technological University',
    description:
      'Helping create a campus community where students can learn, experiment, and build with cloud technology together.',
    image: '/about/aws-sbg-ctu.jpg',
    imageAlt: 'AWS Student Builder Group at Cebu Technological University artwork',
  },
  {
    role: 'Web & Systems Lead',
    organization: 'Google Developer Groups — CTU Main',
    description:
      'Guiding the group’s web presence and the systems that support its community at CTU Main.',
    image: '/about/gdg-ctu.jpg',
    imageAlt: 'Google Developer Groups CTU Main artwork',
  },
];

const principles = [
  {
    title: 'Listen before building',
    detail:
      'I begin with the people doing the work, because the real problem rarely fits neatly into the first brief.',
    icon: MessageCircle,
  },
  {
    title: 'Keep everyone in the loop',
    detail:
      'I share progress early, invite feedback, and make decisions understandable to the whole team.',
    icon: Users,
  },
  {
    title: 'Make it useful and finished',
    detail:
      'I care about the details people feel: clear steps, dependable behavior, and work someone else can continue.',
    icon: CheckCircle2,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function About() {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mb-8 max-w-3xl space-y-3"
      >
        <h2 className="text-3xl font-bold tracking-[-0.025em] text-foreground md:text-5xl">
          More than the stack
        </h2>
        <p className="max-w-[65ch] text-[15px] leading-relaxed text-muted-foreground md:text-base">
          The person, communities, and working style behind the projects.
        </p>
      </motion.div>

      <div className="grid items-stretch gap-6 lg:grid-cols-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="lg:col-span-7"
        >
          <AquaWindow
            title="About Josephus"
            className="h-full"
            bodyClassName="h-full"
            contentClassName="h-full"
            statusBar={
              <span className="flex w-full items-center justify-between gap-3">
                <span>Cebu, Philippines</span>
                <span>BS Information Systems</span>
              </span>
            }
          >
            <div className="grid h-full sm:grid-cols-[180px_1fr]">
              <div className="relative min-h-64 overflow-hidden border-b border-aqua-hairline/25 bg-slate-200 sm:min-h-full sm:border-b-0 sm:border-r dark:bg-slate-900">
                <Image
                  src="/about/600x750.png"
                  alt="Josephus Kim L. Sarsonas"
                  fill
                  sizes="(max-width: 640px) 100vw, 180px"
                  className="object-cover object-top"
                />
                <div className="absolute inset-x-0 bottom-0 bg-black/55 px-3 py-2 text-[11px] font-bold text-white">
                  Josephus.jpg
                </div>
              </div>

              <div className="flex flex-col gap-5 p-6 md:p-8">
                <p className="font-headline text-2xl font-bold leading-snug tracking-[-0.025em] text-foreground md:text-[2rem]">
                  I like turning unclear, repetitive work into something people can actually use.
                </p>

                <div className="space-y-4 text-[15px] leading-relaxed text-muted-foreground">
                  <p>
                    I&apos;m{' '}
                    <strong className="font-bold text-foreground">Josephus Kim L. Sarsonas</strong>,
                    a full-stack software engineer and Information Systems student based in Cebu.
                  </p>
                  <p>
                    Most of my projects start with listening: how people work today, where they
                    lose time, and what would make the next step clearer. I care about the finished
                    experience as much as the work behind it.
                  </p>
                </div>

                <div className="mt-auto grid gap-2 border-t border-aqua-hairline/25 pt-5 text-[12px] sm:grid-cols-2">
                  <div className="flex items-start gap-2.5">
                    <GraduationCap
                      className="mt-0.5 h-4 w-4 shrink-0 text-aqua-blue"
                      aria-hidden="true"
                    />
                    <span className="leading-relaxed text-muted-foreground">
                      CTU student, graduating in 2027 with a 1.45 GWA
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Briefcase
                      className="mt-0.5 h-4 w-4 shrink-0 text-aqua-blue"
                      aria-hidden="true"
                    />
                    <span className="leading-relaxed text-muted-foreground">
                      Full-Stack Software Engineer Trainee at Edufied Pte
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </AquaWindow>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ delay: 0.08 }}
          className="lg:col-span-5"
        >
          <AquaWindow
            title="Community"
            className="h-full"
            bodyClassName="h-full"
            contentClassName="flex h-full flex-col"
            toolbar={
              <div className="flex items-center gap-2 text-[12px] font-bold text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 text-aqua-blue" aria-hidden="true" />
                Building with students at CTU Main
              </div>
            }
            statusBar={<span>2 campus leadership roles</span>}
          >
            <div className="flex flex-1 flex-col divide-y divide-aqua-hairline/25">
              {communityRoles.map((item) => {
                return (
                  <article
                    key={item.role}
                    className="grid flex-1 grid-cols-[88px_1fr] gap-4 p-5 sm:grid-cols-[104px_1fr] md:p-6"
                  >
                    <div className="relative aspect-square w-full overflow-hidden rounded-control border border-aqua-hairline/35 bg-white shadow-sm dark:bg-slate-950">
                      <Image
                        src={item.image}
                        alt={item.imageAlt}
                        fill
                        sizes="(max-width: 640px) 88px, 104px"
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-2">
                      <div>
                        <h3 className="text-[16px] font-bold leading-snug text-foreground">
                          {item.role}
                        </h3>
                        <p className="mt-1 text-[12px] font-bold leading-relaxed text-aqua-blue">
                          {item.organization}
                        </p>
                      </div>
                      <p className="text-[13px] leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </AquaWindow>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="lg:col-span-12"
        >
          <AquaWindow
            title="How I work"
            toolbar={
              <div className="flex w-full items-center justify-between gap-4">
                <span className="text-[12px] font-bold text-muted-foreground">
                  People first. Useful outcomes. Clear handoffs.
                </span>
                <Link
                  href="/contact"
                  className="group hidden items-center gap-1.5 text-[12px] font-bold text-aqua-blue hover:text-aqua-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aqua-blue sm:inline-flex"
                >
                  Work with me
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            }
            statusBar={<span>The goal is to make the next step obvious.</span>}
          >
            <div className="grid md:grid-cols-3">
              {principles.map((principle, index) => {
                const Icon = principle.icon;

                return (
                  <article
                    key={principle.title}
                    className={`p-6 md:p-8 ${index > 0 ? 'border-t border-aqua-hairline/25 md:border-l md:border-t-0' : ''}`}
                  >
                    <Icon className="mb-5 h-6 w-6 text-aqua-blue" aria-hidden="true" />
                    <h3 className="text-[16px] font-bold text-foreground">{principle.title}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                      {principle.detail}
                    </p>
                  </article>
                );
              })}
            </div>
          </AquaWindow>
        </motion.div>
      </div>
    </div>
  );
}
