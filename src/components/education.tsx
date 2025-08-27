import { GraduationCap, Trophy, Medal } from 'lucide-react';

const educationData = [
  {
    institution: 'Cebu Technological University - Main Campus',
    degree: 'Bachelor of Science in Information Technology',
    period: '2024 - Present',
    details: [
      'Passed the DOST (Department of Science and Technology) exam to become an OWWA (Overseas Workers Welfare Administration) scholar.',
    ],
    icon: <GraduationCap />,
  },
  {
    institution: 'Toledo City Science Highschool',
    degree: 'High School Diploma, With Honors',
    period: 'Graduated 2022',
    details: [
      'Graduated with honors, ranking 12th in my class.',
      'As a member of the TOLEDO Robotics Team, achieved 1st place in the Division Science Fair for Robotics (2019).',
      'Secured 2nd, 4th, and 6th place across different Sumobot categories at the Regional Science & Technology Fair (2019).',
    ],
    icon: <Trophy />,
  },
];

export default function Education() {
  return (
    <section id="education" className="w-full py-16 md:py-24 bg-transparent">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl font-headline">Education & Achievements</h2>
        <div className="relative mt-12 max-w-3xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2"></div>
          {educationData.map((item, index) => (
            <div key={index} className="relative mb-8">
              <div className="absolute left-1/2 top-1 w-4 h-4 bg-primary rounded-full border-4 border-secondary -translate-x-1/2"></div>
              <div className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-full md:w-5/12 p-4 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <p className="text-sm text-muted-foreground">{item.period}</p>
                  <h3 className="text-xl font-bold font-headline flex items-center gap-2 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}">
                    {item.icon} {item.institution}
                  </h3>
                  <p className="font-semibold text-primary">{item.degree}</p>
                  <ul className="mt-2 text-foreground/80 list-disc list-inside">
                    {item.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
