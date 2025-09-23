import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-6 flex items-center justify-center">
      <div className="w-full max-w-3xl text-center">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
          Welcome
        </h1>
        <p className="mt-3 text-sm sm:text-base text-foreground/70">
          This is a simple Next.js app demonstrating different Tailwind CSS
          height utilities related to viewport height.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Card href="/h-screen" title="h-screen">
            Tailwind class for full viewport height.
          </Card>
          <Card href="/h-dvh" title="h-dvh">
            Tailwind class for dynamic viewport height.
          </Card>
          <Card href="/h-svh" title="h-svh">
            Tailwind class for small viewport height.
          </Card>
          <Card href="/h-lvh" title="h-lvh">
            Tailwind class for large viewport height.
          </Card>
          <Card href="/h-full" title="h-full">
            Tailwind class where child fills its parent height.
          </Card>
          <Card href="/size-max" title="size-max">
            Tailwind class for maximum content size.
          </Card>
          <Card href="/size-min" title="size-min">
            Tailwind class for minimum content size.
          </Card>
          <Card href="/size-fit" title="size-fit">
            Tailwind class for fit content size.
          </Card>
        </div>

        <footer className="mt-10 text-xs text-foreground/60">
          Built with Next.js 15 and Tailwind CSS 4.
        </footer>
      </div>
    </main>
  );
}

function Card({
  href,
  title,
  children,
}: {
  href: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group rounded-lg border p-4 text-left transition-colors hover:border-foreground/40"
    >
      <h2 className="mb-1 font-medium">
        {title}{" "}
        <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
      </h2>
      <p className="text-sm text-foreground/70">{children}</p>
    </Link>
  );
}

