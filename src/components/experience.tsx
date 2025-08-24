const experienceData = [
  {
    role: 'Social Media Manager & Creative Designer',
    company: 'JK Bros Combos',
    period: 'April 21, 2025 - Present',
    description: 'Developed and executed an intensive social media campaign, handling everything from brand identity and logo design to daily content creation, community management, and performance analytics, resulting in significant organic growth. I continue to manage all aspects of the business\'s digital presence.',
  },
  {
    role: 'Web Developer',
    company: 'Academic & Personal Projects',
    period: 'Ongoing',
    description: 'Developed a full-stack Cinema Ticketing Website and a responsive LET Reviewer web app. Focused on modern UI/UX, database management (SQL), and performance optimization using technologies like Next.js.',
  },
  {
    role: 'Interviewer & Researcher',
    company: 'Academic Project',
    period: 'University Project',
    description: 'Conducted and documented professional interviews with a Project Manager from Chowis Co. Ltd. and a Lead Executive from Ishmael Enterprises, enhancing communication, research, and public speaking skills.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="w-full py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl font-headline">Professional Experience</h2>
        <div className="relative mt-12 max-w-3xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2"></div>
          {experienceData.map((item, index) => (
            <div key={index} className="relative mb-8">
              <div className="absolute left-1/2 top-1 w-4 h-4 bg-primary rounded-full border-4 border-secondary -translate-x-1/2"></div>
              <div className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-full md:w-5/12 p-4 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <p className="text-sm text-muted-foreground">{item.period}</p>
                  <h3 className="text-xl font-bold font-headline">{item.role}</h3>
                  <p className="font-semibold text-primary">{item.company}</p>
                  <p className="mt-2 text-foreground/80">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
