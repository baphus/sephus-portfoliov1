export default function PageHeading({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <header className="container mx-auto mb-10 max-w-5xl space-y-3 px-4 md:px-6">
      <h1 className="max-w-[18ch] font-headline text-4xl font-bold tracking-[-0.025em] text-foreground md:text-6xl">
        {title}
      </h1>
      <p className="max-w-[68ch] text-base leading-relaxed text-muted-foreground md:text-lg">
        {description}
      </p>
    </header>
  );
}

