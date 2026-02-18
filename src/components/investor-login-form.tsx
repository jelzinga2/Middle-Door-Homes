"use client";

import { FormEvent, useState } from "react";

export function InvestorLoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = (await response.json()) as { message?: string };
      setStatus(data.message ?? "Placeholder response received.");
    } catch {
      setStatus("Unable to reach placeholder endpoint.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-[var(--mdh-subtle)]">
          Email
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="investor@firm.com"
          className="w-full rounded-xl border border-[var(--mdh-line)] bg-white px-4 py-3 text-sm outline-none focus:border-[var(--mdh-title)]"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-medium text-[var(--mdh-subtle)]"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          autoComplete="current-password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Enter password"
          className="w-full rounded-xl border border-[var(--mdh-line)] bg-white px-4 py-3 text-sm outline-none focus:border-[var(--mdh-title)]"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="inline-flex rounded-full bg-[var(--mdh-title)] px-5 py-2.5 text-sm font-medium text-white hover:bg-[var(--mdh-ink-soft)] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? "Signing In..." : "Sign In"}
      </button>
      {status ? <p className="text-sm text-[var(--mdh-muted)]">{status}</p> : null}
    </form>
  );
}
