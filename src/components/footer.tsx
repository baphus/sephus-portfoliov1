export default function Footer() {
  return (
    <footer className="w-full py-6 bg-secondary/50 border-t">
      <div className="container mx-auto px-4 md:px-6">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Josephus Kim L. Sarsonas. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
