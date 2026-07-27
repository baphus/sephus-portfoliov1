"use client";

import React from 'react';
import { motion } from 'framer-motion';
import AquaWindow from '@/components/ui/aqua-window';
import { AquaList, AquaRow } from '@/components/ui/aqua-list';

/** Straight off the résumé, newest first. */
const certifications = [
  { name: 'AWS SBG Core Team Member Badge', issuer: 'Amazon Web Services', date: 'July 2026' },
  { name: 'Networking Basics', issuer: 'Cisco', date: 'May 2025' },
  { name: 'iLeap IP Course Certificate', issuer: 'IPOPHL', date: 'May 2024' },
  { name: 'Introduction to Python', issuer: 'Coursera', date: 'April 2024' },
];

export default function Certifications() {
  return (
    <div className="container mx-auto max-w-4xl px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <AquaWindow
          title="Certifications & Awards"
          statusBar={
            <span>
              {certifications.length} {certifications.length === 1 ? 'item' : 'items'}
            </span>
          }
        >
          <div className="p-4">
            <AquaList>
              {certifications.map((certification) => (
                <AquaRow
                  key={certification.name}
                  label={certification.name}
                  value={
                    <span className="flex items-center gap-3">
                      <span>{certification.issuer}</span>
                      <span className="hidden text-muted-foreground/70 sm:inline">
                        {certification.date}
                      </span>
                    </span>
                  }
                />
              ))}
            </AquaList>
          </div>
        </AquaWindow>
      </motion.div>
    </div>
  );
}
