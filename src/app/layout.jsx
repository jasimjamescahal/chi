import "./globals.css";

export const metadata = {
  title: "Navigation Exam",
  description: "Next.js Navigation Exam - Home, Profile, and Contact",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
