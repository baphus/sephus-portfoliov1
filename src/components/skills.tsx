import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Monitor, Presentation, Briefcase, Code, Database, Megaphone, Brush, BarChart3, Edit } from 'lucide-react';

const skillsData = [
  {
    category: 'Digital Media & Content Creation',
    skills: ['Video Editing (CapCut, Premiere Pro)', 'Graphic Design (Canva, Adobe Suite)', 'Content Strategy', 'Brand Development', 'Product Photography & Styling'],
    icon: <Brush />,
  },
  {
    category: 'Social Media Management',
    skills: ['Multi-platform Strategy', 'Campaign Optimization', 'Community Management', 'Content Calendars', 'Audience Growth'],
    icon: <Megaphone />,
  },
  {
    category: 'Web Development & Design',
    skills: ['HTML, CSS, JavaScript', 'WordPress, Squarespace', 'Full-stack Project Management', 'Responsive Design', 'Next.js'],
    icon: <Code />,
  },
  {
    category: 'Data Management & Analysis',
    skills: ['SQL & Database Management', 'Excel & Google Sheets', 'Data Visualization', 'Google Forms', 'Campaign Analytics & Reporting'],
    icon: <BarChart3 />,
  },
  {
    category: 'Business & Productivity',
    skills: ['Presentation Design (Canva, PowerPoint)', 'MS Office & Google Workspace', 'Project Management (Notion)', 'Scheduling & Coordination', 'PDF Tools'],
    icon: <Presentation />,
  },
  {
    category: 'Communication & Administrative',
    skills: ['Content Editing & Proofreading', 'Interview Coordination', 'Comprehensive Research', 'Client Communication', 'Fast Typing & Data Entry'],
    icon: <Briefcase />,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="w-full py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl font-headline">Core Competencies</h2>
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
