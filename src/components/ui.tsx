import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

type ClassName = {
  className?: string;
};

export function Container({ className, children }: ClassName & { children: ReactNode }) {
  return (
    <div className={`mx-auto w-full max-w-[1180px] px-5 md:px-8 ${className ?? ""}`.trim()}>
      {children}
    </div>
  );
}

export function Section({
  className,
  children,
  id,
}: ClassName & { children: ReactNode; id?: string }) {
  return (
    <section id={id} className={`py-12 md:py-14 ${className ?? ""}`.trim()}>
      {children}
    </section>
  );
}

export function Heading({ className, children }: ClassName & { children: ReactNode }) {
  return (
    <h2 className={`text-3xl font-semibold leading-tight tracking-[-0.01em] text-[var(--mdh-title)] md:text-4xl ${className ?? ""}`.trim()}>
      {children}
    </h2>
  );
}

export function Eyebrow({ className, children }: ClassName & { children: ReactNode }) {
  return (
    <p className={`text-xs font-medium uppercase tracking-[0.16em] text-[var(--mdh-subtle)] ${className ?? ""}`.trim()}>
      {children}
    </p>
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
    <div className={`rounded-2xl border border-[var(--mdh-line)] bg-[var(--mdh-surface)] p-5 shadow-[0_10px_30px_rgba(31,49,66,0.05)] md:p-6 ${className ?? ""}`.trim()}>
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

export function WideHero({
  imageSrc,
  imageAlt,
}: {
  imageSrc: string;
  imageAlt: string;
}) {
  return (
    <div className="relative h-44 w-full overflow-hidden border-b border-[var(--mdh-line)] md:h-56">
      <Image src={imageSrc} alt={imageAlt} fill priority className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(12,22,31,0.08)] to-transparent" />
    </div>
  );
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
