import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Proposal AI",
  description: "Generate personalized freelance proposals in seconds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#050816] text-white antialiased">
        {children}

        <Toaster
          position="top-center"
          toastOptions={{
            duration: 2000,
            style: {
              background: "#0f172a",
              color: "#fff",
              border: "1px solid #334155",
            },
          }}
        />
      </body>
    </html>
  );
}