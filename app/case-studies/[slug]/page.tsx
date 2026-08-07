import { ArrowLeft, ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import { profile, projects } from "../../../data";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[var(--color-page)] text-[var(--color-text)]">
      <div className="mx-auto max-w-[1200px] px-5 py-8 sm:px-8 lg:px-12 xl:px-16">
        <Link
          className="inline-flex items-center gap-2 text-[0.75rem] font-black text-[var(--color-text)] transition hover:text-[var(--color-accent)]"
          href="/"
        >
          <ArrowLeft size={14} aria-hidden="true" /> Back to portfolio
        </Link>

        <section className="mt-7 grid gap-10 border-t border-[var(--border-subtle)] pt-9 lg:grid-cols-[1fr_0.84fr] lg:items-start">
          <div className="max-w-3xl">
            <p className="mb-4 flex items-center gap-2 text-[0.72rem] font-black uppercase tracking-[0.16em] text-[var(--color-accent)]">
              <Sparkles size={14} aria-hidden="true" />
              Case study
            </p>
            <p className="text-[0.72rem] font-black uppercase tracking-[0.14em] text-[var(--color-soft)]">
              {project.category}
            </p>
            <h1 className="mt-3 text-[clamp(2.1rem,4vw,4.2rem)] font-[family-name:var(--font-nunito)] font-extrabold leading-[0.94]">
              {project.title}
            </h1>
            <p className="mt-5 max-w-2xl text-[0.96rem] leading-8 text-[var(--color-muted)]">
              {project.summary}
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {project.highlights.map((item) => (
                <span
                  className="rounded-full border border-[var(--border-subtle)] px-3 py-1.5 text-[0.7rem] font-black transition hover:border-[var(--border-hover)]"
                  key={item}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[18px] border border-[var(--border-card)] p-5 transition duration-200 hover:border-[var(--border-hover)]">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="grid size-12 place-items-center rounded-full border border-[var(--border-card)] bg-[var(--color-page)]">
                  {project.logoUrl ? (
                    <Image
                      src={project.logoUrl}
                      alt=""
                      width={36}
                      height={36}
                      className="size-8 object-contain"
                      aria-hidden="true"
                    />
                  ) : (
                    <project.icon size={20} aria-hidden="true" />
                  )}
                </div>
                <div>
                  <p className="text-[0.68rem] font-black uppercase tracking-[0.14em] text-[var(--color-soft)]">
                    Project snapshot
                  </p>
                  <p className="mt-1 text-[0.95rem] font-extrabold">
                    {project.title}
                  </p>
                </div>
              </div>
              {project.url ? (
                <a
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] px-3 py-1.5 text-[0.72rem] font-black text-[var(--color-text)] transition hover:border-[var(--border-hover)] hover:text-[var(--color-accent)]"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              ) : null}
            </div>

            {project.heroImageUrl ? (
              <div className="mt-5 overflow-hidden rounded-[18px] border border-[var(--border-card)] bg-[var(--color-inverse)]">
                <Image
                  src={project.heroImageUrl}
                  alt={`${project.title} homepage screenshot`}
                  width={1200}
                  height={760}
                  className="h-auto w-full object-cover"
                  loading="lazy"
                />
              </div>
            ) : null}

            <div className="mt-6 grid grid-cols-2 gap-3 text-[0.78rem]">
              {[
                ["Role", "Full-stack delivery"],
                ["Focus", project.category],
                ["Stack", project.stack[0] ?? "Web"],
                ["Mode", "Product build"],
              ].map(([label, value]) => (
                <div
                  className="rounded-[16px] border border-[var(--border-card)] bg-[var(--color-page)] p-3 transition hover:border-[var(--border-hover)]"
                  key={label}
                >
                  <p className="text-[0.65rem] font-black uppercase tracking-[0.14em] text-[var(--color-accent)]">
                    {label}
                  </p>
                  <p className="mt-1 font-bold text-[var(--color-text)]">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            ["Problem", project.problem],
            ["Approach", project.approach],
            ["Outcome", project.outcome],
          ].map(([label, value]) => (
            <article
              className="rounded-[18px] border border-[var(--border-card)] p-5 transition duration-200 hover:border-[var(--border-hover)]"
              key={label}
            >
              <p className="text-[0.74rem] font-black uppercase tracking-[0.14em] text-[var(--color-accent)]">
                {label}
              </p>
              <p className="mt-3 text-[0.92rem] leading-7 text-[var(--color-muted)]">
                {value}
              </p>
            </article>
          ))}
        </section>

        <section className="mt-8 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="rounded-[18px] border border-[var(--border-card)] p-5 transition duration-200 hover:border-[var(--border-hover)]">
            <p className="text-[0.74rem] font-black uppercase tracking-[0.14em] text-[var(--color-accent)]">
              Responsibilities
            </p>
            <ul className="mt-4 grid gap-3 text-[0.92rem] leading-7 text-[var(--color-muted)]">
              {project.responsibilities.map((item) => (
                <li className="flex gap-3" key={item}>
                  <CheckCircle2
                    className="mt-1 text-[var(--color-soft)]"
                    size={16}
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-[18px] border border-[var(--border-card)] p-5 transition duration-200 hover:border-[var(--border-hover)]">
            <p className="text-[0.74rem] font-black uppercase tracking-[0.14em] text-[var(--color-accent)]">
              Stack
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  className="rounded-full border border-[var(--border-subtle)] px-3 py-1.5 text-[0.7rem] font-black text-[var(--color-text)] transition hover:border-[var(--border-hover)]"
                  key={item}
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-6 rounded-[18px] border border-[var(--border-card)] bg-[var(--color-page)] p-4 transition hover:border-[var(--border-hover)]">
              <p className="text-[0.68rem] font-black uppercase tracking-[0.14em] text-[var(--color-soft)]">
                At a glance
              </p>
              <p className="mt-2 text-[0.92rem] leading-7 text-[var(--color-muted)]">
                Built for day-to-day use, with the same practical tone the rest
                of the portfolio uses.
              </p>
            </div>
          </article>
        </section>

        <section className="mt-10 border-t border-[var(--border-subtle)] pt-5 text-[0.75rem] font-medium text-[var(--color-muted)]">
          <p>
            Case study built from the project already listed in the portfolio.
          </p>
          <a
            className="mt-2 inline-flex font-black text-[var(--color-text)] transition hover:text-[var(--color-accent)]"
            href={`mailto:${profile.email}`}
          >
            {profile.email}
          </a>
        </section>
      </div>
    </main>
  );
}
