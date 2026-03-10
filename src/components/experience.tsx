
const experienceData = [
  {
    role: 'Technical Support & Systems Experience',
    company: 'Deployed Web Applications — Client and Academic Systems',
    period: 'Ongoing',
    description: 'Diagnosed and resolved technical issues in production environments. Identified, reproduced, and debugged problems related to authentication, database queries, and frontend behavior. Assisted users in resolving platform-related issues.',
  },
  {
    role: 'Technical Systems Maintenance',
    company: 'Firebase, Render, Vercel & Supabase Monitoring',
    period: 'Ongoing',
    description: 'Maintained cloud-hosted systems to ensure reliability. Configured backend services including email notifications, database integrations, and cloud storage systems. Documented fixes and system behavior.',
  },
  {
    role: 'Client Liaison & Requirements Gathering',
    company: 'Cebu Technological University Projects',
    period: '2023 - Present',
    description: 'Gathered system requirements and explained technical concepts to non-technical clients. Assured clarity on solution functionality and supported user onboarding after system deployment.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="w-full py-16 md:py-24 bg-transparent">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl font-headline">Technical Support & Systems Experience</h2>
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
                  <p className="mt-2 text-foreground/80 text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
