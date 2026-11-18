"use client";

import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-rose-100 via-pink-50 to-fuchsia-100 p-6">
      <div className="w-full max-w-md overflow-hidden rounded-3xl border border-pink-100 bg-white/90 shadow-2xl shadow-pink-200/50 backdrop-blur-md">
        {/* Soft Pink Top Banner */}
        <div className="h-28 bg-gradient-to-r from-pink-400 via-rose-400 to-fuchsia-400" />

        <div className="px-8 pb-8 text-center">
          {/* Plain <img> overlapping the banner */}
          <img
            src="/profile.jpeg"
            alt="Kenchie Ong Dilodilo"
            className="mx-auto -mt-16 h-36 w-36 rounded-full border-4 border-white object-cover shadow-lg shadow-pink-200/70"
          />

          <span className="mt-4 inline-block rounded-full bg-pink-100 px-3.5 py-1 text-[11px] font-semibold tracking-wider text-pink-600 uppercase">
            Student Profile
          </span>

          <h1 className="mt-3 text-2xl font-extrabold tracking-tight text-slate-800">
            Kenchie Ong Dilodilo
          </h1>

          <p className="mt-1.5 text-sm font-medium text-pink-500">
            Holy Cross of Davao College
          </p>

          <div className="my-6 h-px bg-gradient-to-r from-transparent via-pink-200 to-transparent" />

          <button
            onClick={() => router.back()}
            className="w-full rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-pink-500/25 transition-all duration-200 hover:-translate-y-0.5 hover:from-pink-600 hover:to-rose-600 hover:shadow-lg"
          >
            ← Back
          </button>
        </div>
      </div>
    </main>
  );
}
