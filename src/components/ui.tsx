import Link from "next/link";
import { ReactNode } from "react";

type ClassName = {
  className?: string;
};

export function Container({ className, children }: ClassName & { children: ReactNode }) {
  return <div className={`mx-auto w-full max-w-6xl px-6 ${className ?? ""}`.trim()}>{children}</div>;
}

export function Section({
  className,
  children,
  id,
}: ClassName & { children: ReactNode; id?: string }) {
  return (
    <section id={id} className={`py-16 md:py-20 ${className ?? ""}`.trim()}>
      {children}
    </section>
  );
}

export function Heading({ className, children }: ClassName & { children: ReactNode }) {
  return (
    <h2 className={`font-serif text-3xl font-semibold tracking-tight text-[var(--mdh-ink)] md:text-4xl ${className ?? ""}`.trim()}>
      {children}
    </h2>
  );
}

export function Subheading({ className, children }: ClassName & { children: ReactNode }) {
  return (
    <p className={`mt-4 max-w-3xl text-base leading-relaxed text-[var(--mdh-muted)] md:text-lg ${className ?? ""}`.trim()}>
      {children}
    </p>
  );
}

export function Card({ className, children }: ClassName & { children: ReactNode }) {
  return (
    <div className={`rounded-2xl border border-[var(--mdh-line)] bg-white p-6 shadow-[0_1px_2px_rgba(15,23,32,0.04)] ${className ?? ""}`.trim()}>
      {children}
    </div>
  );
}

export function Stat({
  value,
  label,
  note,
}: {
  value: string;
  label: string;
  note?: string;
}) {
  return (
    <Card>
      <div className="text-2xl font-semibold tracking-tight md:text-3xl">{value}</div>
      <div className="mt-2 text-xs uppercase tracking-[0.15em] text-[var(--mdh-subtle)]">{label}</div>
      {note ? <p className="mt-3 text-sm leading-relaxed text-[var(--mdh-muted)]">{note}</p> : null}
    </Card>
  );
}

export function Divider() {
  return <div className="h-px w-full bg-[var(--mdh-line)]" aria-hidden />;
}

export function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}) {
  const classes =
    variant === "primary"
      ? "bg-[var(--mdh-ink)] text-white hover:bg-[var(--mdh-ink-soft)]"
      : "border border-[var(--mdh-line)] bg-white text-[var(--mdh-ink)] hover:bg-[var(--mdh-bg)]";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition ${classes}`}
    >
      {children}
    </Link>
  );
}
