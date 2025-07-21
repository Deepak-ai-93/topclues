import Link from 'next/link';

export function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-8 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Topclues Solutions</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link href="#" className="text-sm hover:text-primary transition-colors" prefetch={false}>
          Terms
        </Link>
        <Link href="#" className="text-sm hover:text-primary transition-colors" prefetch={false}>
          Privacy
        </Link>
      </nav>
    </footer>
  );
}
