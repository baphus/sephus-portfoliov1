import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Monitor, Presentation, Briefcase, Code, Database, Wand2, Megaphone, Brush, MessageSquare } from 'lucide-react';

const skillsData = [
  {
    category: 'Digital Marketing & Branding',
    skills: ['Social Media Management', 'Content Strategy', 'Brand Development', 'Organic Growth', 'Campaign Analysis'],
    icon: <Megaphone />,
  },
  {
    category: 'Creative Design',
    skills: ['Graphic Design (Ads, Posters)', 'Logo & Brand Identity', 'Food Photography & Styling', 'Canva', 'Notion'],
    icon: <Brush />,
  },
  {
    category: 'Video Editing',
    skills: ['Capcut', 'Premiere Pro', 'Filmora', 'Sony Vegas', 'Creative Storytelling'],
    icon: <Monitor />,
  },
  {
    category: 'Web Development',
    skills: ['HTML/CSS/PHP', 'MySQL', 'Squarespace', 'WordPress', 'Next.js'],
    icon: <Code />,
  },
  {
    category: 'Presentations & Office Tools',
    skills: ['Canva', 'MS PowerPoint', 'Google Slides', 'MS Word & Excel', 'Adobe PDF'],
    icon: <Presentation />,
  },
  {
    category: 'Professional Skills',
    skills: ['Fast Typing', 'Scheduling', 'Google Forms', 'Remote Collaboration', 'Public Speaking', 'Interviewing'],
    icon: <Briefcase />,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="w-full py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl font-headline">My Skills</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillsData.map((skillGroup) => (
            <Card key={skillGroup.category} className="rounded-2xl shadow-md transition-all hover:shadow-xl hover:-translate-y-1">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  {skillGroup.icon}
                </div>
                <CardTitle className="font-headline">{skillGroup.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  {skillGroup.skills.map((skill) => (
                    <li key={skill} className="flex items-center">
                      <span className="text-primary mr-2">✓</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
