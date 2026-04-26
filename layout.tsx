import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://aerivue.dev"),

  title: {
    default: "Aerivue | Web Development Agency in India",
    template: "%s | Aerivue",
  },

  description:
    "Aerivue is a modern web development agency in India offering fast, SEO-optimized websites using Next.js, React, and Tailwind CSS. Build scalable, high-performance web apps.",

  applicationName: "Aerivue",

  authors: [{ name: "Surydeep Singh", url: "https://aerivue.dev" }],
  creator: "Aerivue",
  publisher: "Aerivue",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Aerivue | Web Development Agency",
    description:
      "Build modern, fast and SEO-optimized websites with Aerivue. متخصص in Next.js, React & Tailwind.",
    url: "https://aerivue.dev",
    siteName: "Aerivue",
    images: [
      {
        url: "https://aerivue.dev/og.png",
        width: 1200,
        height: 630,
        alt: "Aerivue Web Development",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Aerivue | Web Development Agency",
    description:
      "High-performance websites built with Next.js and React.",
    images: ["https://aerivue.dev/og.png"],
    creator: "@yourhandle", // change this
  },

  icons: {
    icon: "/favicon.ico",
  },

  category: "technology",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}