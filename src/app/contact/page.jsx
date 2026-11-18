"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactPage() {
  const router = useRouter();
  const [copied, setCopied] = useState(false);

  const email = "kenchie.dilodilo@hcdc.edu.ph";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-rose-100 via-pink-50 to-fuchsia-100 p-6">
      <div className="w-full max-w-md overflow-hidden rounded-3xl border border-pink-100 bg-white/90 shadow-2xl shadow-pink-200/50 backdrop-blur-md">
        {/* Soft Pink Top Header Banner */}
        <div className="bg-gradient-to-r from-pink-400 via-rose-400 to-fuchsia-400 px-8 py-6 text-center text-white">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/25 backdrop-blur-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h1 className="mt-3 text-2xl font-extrabold tracking-tight">
            Contact Information
          </h1>
          <p className="mt-1 text-xs font-medium text-pink-100">
            Holy Cross of Davao College
          </p>
        </div>

        {/* Card Body */}
        <div className="p-8 text-center">
          <p className="text-sm text-slate-500">
            Feel free to reach out through my official student email:
          </p>

          {/* Pink Email Display + Copy Box */}
          <div className="mt-5 rounded-2xl border border-pink-100 bg-pink-50/70 p-4 text-left transition hover:border-pink-200">
            <div className="flex items-center justify-between gap-2">
              <div className="min-w-0">
                <p className="text-[11px] font-bold tracking-wider text-pink-600 uppercase">
                  HCDC Email
                </p>
                <p className="mt-0.5 truncate text-sm font-semibold text-slate-800">
                  {email}
                </p>
              </div>

              <button
                onClick={handleCopy}
                type="button"
                className="shrink-0 rounded-xl border border-pink-200 bg-white px-3 py-1.5 text-xs font-semibold text-pink-600 shadow-sm transition hover:bg-pink-500 hover:text-white"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>

          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-pink-500/25 transition-all duration-200 hover:-translate-y-0.5 hover:from-pink-600 hover:to-rose-600 hover:shadow-lg"
          >
            <span>←</span>
            <span>Back</span>
          </button>
        </div>
      </div>
    </main>
  );
}
