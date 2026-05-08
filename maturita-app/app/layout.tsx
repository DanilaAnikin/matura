import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import ExamDateFooter from "./components/ExamDateFooter";

export const metadata: Metadata = {
  title: "Maturita 2026 — procvičování",
  description: "Příprava na maturitu z češtiny, matematiky a fyziky",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
      <body>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <footer className="border-t border-taupe/40 py-6 mt-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 font-ui text-xs text-dust flex flex-col sm:flex-row justify-between gap-2 sm:gap-0">
              <ExamDateFooter />
              <span>Vyrobeno s pomocí Claude</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
