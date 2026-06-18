import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "ColdPing — Cold Emails That Actually Get Replies",
  description:
    "Paste a LinkedIn profile and get a hyper-personalized cold email in 3 seconds. Free. Powered by Gemini AI.",
  keywords: [
    "cold email",
    "email personalization",
    "LinkedIn outreach",
    "AI email writer",
    "sales email generator",
  ],
  openGraph: {
    title: "ColdPing — Cold Emails That Actually Get Replies",
    description:
      "Paste a LinkedIn profile → get a hyper-personalized email in 3 seconds. Free.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col animate-page-fade">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
