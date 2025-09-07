import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../components/Navbar";
import ThemeProvider from "../components/ThemeProvider";
import localFont from "next/font/local";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const productFont = localFont({
  src: "../fonts/ProductSans-Regular.ttf",
})

export const metadata: Metadata = {
  title: "Sumit Jha - portfolio",
  description:
    "Full Stack Developer skilled in React, Next.js, Node.js, Python, machine learning, aritificial intelligence, deep learning, Django, and modern web technologies. Explore my portfolio, projects, and technical expertise.",
  keywords: [
    "Sumit Jha",
    "MNNIT", 
    "MNNIT Allahabad", 
    "Motilal Nehru National Institute of Technology", 
    "NIT-A", 
    "Software Developer", 
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "JavaScript",
    "TypeScript",
    "Python Developer",
    "Django Developer",
    "PostgreSQL",
    "MongoDB",
    "MERN Stack",
    "Portfolio",
    "Web Development",
    "API Development",
    "Machine Learning"
  ],
  authors: [{ name: "Sumit Jha", url: "https://sumitjha.dev" }],
  creator: "Sumit Jha",
  publisher: "Sumit Jha",
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
    type: "website",
    locale: "en_US",
    url: "https://sumitjha.dev",
    siteName: "Sumit Jha Portfolio",
    title: "Sumit Jha - Full Stack Software Developer | Portfolio",
    description:
      "Full Stack Developer specializing in React, Next.js, Node.js, Django, and modern web technologies.",
    images: [
      {
        url: "/icons/sumitjha.png",
        width: 1200,
        height: 630,
        alt: "Sumit Jha - Software Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sumit Jha - Full Stack Software Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, Node.js, Django, and modern web technologies.",
    images: ["/icons/sumitjha.png"],
    creator: "@__sumitjha",
  },
  alternates: {
    canonical: "https://sumitjha.dev",
  },
  category: "Technology",
  classification: "Portfolio Website",
  other: {
    "application-name": "Sumit Jha Portfolio",
    "apple-mobile-web-app-title": "Sumit Jha",
    "msapplication-TileColor": "#000000",
    "theme-color": "#000000",
    "contact-email": "sumitjha1618@gmail.com",
    "contact-github": "https://github.com/zhasumit",
    "contact-linkedin": "https://linkedin.com/in/sumitjha1618",
    "contact-twitter": "https://twitter.com/__sumitjha",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/icons/sumitjha.png" />
        <link rel="apple-touch-icon" href="/icons/sumitjha.png" />
        <link rel="canonical" href="https://sumitjha.dev" />

        <meta name="author" content="Sumit Jha" />
        <meta name="contact" content="sumitjha1618@gmail.com" />
        <meta name="reply-to" content="sumitjha1618@gmail.com" />
        <meta name="owner" content="Sumit Jha" />
        <meta name="url" content="https://sumitjha.dev" />
        <meta name="identifier-URL" content="https://sumitjha.dev" />
        <meta name="directory" content="submission" />
        <meta name="pagename" content="Sumit Jha - Full Stack Developer Portfolio" />
        <meta name="category" content="Portfolio, Technology, Software Development" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 days" />
        <meta name="subtitle" content="Software Developer Engineer at Prismberry" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Sumit Jha",
              "jobTitle": "Software Developer Engineer",
              "description": "Full Stack Developer at Prismberry specializing in React, Next.js, Django, and Python. Built tax compliance platforms serving 500+ users, MERN stack chat applications, and machine learning systems.",
              "url": "https://sumitjha.dev",
              "image": "https://sumitjha.dev/icons/sumitjha.png",
              "worksFor": {
                "@type": "Organization",
                "name": "Prismberry",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Noida",
                  "addressRegion": "Uttar Pradesh",
                  "addressCountry": "India"
                }
              },
              "sameAs": [
                "https://github.com/zhasumit",
                "https://linkedin.com/in/sumitjha1618",
                "https://twitter.com/__sumitjha"
              ],
              "knowsAbout": [
                "JavaScript",
                "TypeScript",
                "Python",
                "C++",
                "React",
                "Next.js",
                "Node.js",
                "Express.js",
                "Django",
                "Ruby on Rails",
                "MongoDB",
                "PostgreSQL",
                "MySQL",
                "HTML",
                "CSS",
                "Tailwind CSS",
                "Machine Learning",
                "Deep Learning",
                "Data Structures and Algorithms",
                "Artificial Intelligence",
                "Pandas",
                "NumPy",
                "Scikit-learn",
                "TensorFlow",
                "PyTorch",
                "Data Analysis",
                "Data Visualization",
                "API Development",
                "Web Applications",
                "Full Stack Development",
                "MERN Stack"
              ],
              "hasCredential": [
                {
                  "@type": "EducationalOccupationalCredential",
                  "name": "Software Developer Engineer",
                  "credentialCategory": "Professional Experience"
                }
              ],
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://sumitjha.dev"
              }
            })
          }}
        />
      </head>
      <body className={`${productFont.className} ${geistSans.variable} ${geistMono.variable} antialiased text-lg`}>
        <ThemeProvider>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Navbar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}