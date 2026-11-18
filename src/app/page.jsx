import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-rose-100 via-pink-50 to-fuchsia-100 p-6">
      <div className="w-full max-w-md overflow-hidden rounded-3xl border border-pink-100 bg-white/90 shadow-2xl shadow-pink-200/50 backdrop-blur-md">
        {/* Soft Pink Top Header Banner */}
        <div className="bg-gradient-to-r from-pink-400 via-rose-400 to-fuchsia-400 px-8 py-6 text-center text-white">
          <span className="inline-block rounded-full bg-white/25 px-3.5 py-1 text-[11px] font-semibold tracking-wider text-white uppercase backdrop-blur-sm">
              Home
          </span>
          <h1 className="mt-3 text-2xl font-extrabold tracking-tight">
            Welcome
          </h1>
          <p className="mt-1 text-xs font-medium text-pink-100">
            Kenchie Ong Dilodilo • HCDC
          </p>
        </div>

        {/* Card Body */}
        <div className="p-8 text-center">
          <p className="text-sm text-slate-500">
            Choose a page below to view my profile or get in touch:
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/profile"
              className="flex-1 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-pink-500/25 transition-all duration-200 hover:-translate-y-0.5 hover:from-pink-600 hover:to-rose-600 hover:shadow-lg"
            >
              Profile
            </Link>

            <Link
              href="/contact"
              className="flex-1 rounded-2xl border border-pink-200 bg-pink-50/80 px-6 py-3.5 text-sm font-semibold text-pink-600 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-pink-100 hover:shadow-md"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
