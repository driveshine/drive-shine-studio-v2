import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[70svh] items-center justify-center bg-carbon px-6 py-32">
      <div className="max-w-lg">
        <p className="mono-label text-red">Error 404</p>
        <h1 className="chrome-text mt-5 text-[clamp(3rem,10vw,7rem)]">Wrong turn.</h1>
        <p className="mt-5 text-muted-foreground">
          This page doesn't exist or has been moved. Head back and pick a route.
        </p>
        <div className="mt-10">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-red px-7 py-3.5 font-mono text-xs font-medium uppercase tracking-[0.12em] text-white transition-shadow duration-300 hover:shadow-[0_0_40px_-8px_rgba(224,27,34,.55)]"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
