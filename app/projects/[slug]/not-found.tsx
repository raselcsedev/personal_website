import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4 pt-28">
      <div className="text-center max-w-md">
        <p className="section-label mb-3">404</p>
        <h1 className="section-title mb-4">Project not found</h1>
        <p className="text-[rgb(var(--text-secondary))] mb-8">
          The project you are looking for does not exist or has been moved.
        </p>
        <Link href="/#projects" className="text-[rgb(var(--accent))] hover:underline">
          ← Back to all projects
        </Link>
      </div>
    </section>
  );
}
