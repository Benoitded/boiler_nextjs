// @/app/layout.tsx

import type { Metadata } from "next";
// import "./globals.css";
import ReownProvider from "@/context/reown";
import Header from "@/components/Header/Header";
import { headers } from "next/headers";
import "@/styles/globals.css";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Your project name",
  icons: {
    icon: "/logo-icon.png",
  },
  description: "Your project description",

  openGraph: {
    images: ["/og-image.png"],
    type: "website",
    siteName: "Your project name",
    title: "Your project name",
    description: "Your project description",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your project name",
    description: "Your project description",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const NoSSR = dynamic(() => import("@/components/NoSSR"), { ssr: false });
  const cookies = headers().get("cookie");

  //add gas component
  return (
    <html lang="en">
      <body>
        <NoSSR>
          <ReownProvider cookies={cookies}>
            <Header />
            {children}
          </ReownProvider>
        </NoSSR>
      </body>
    </html>
  );
}
