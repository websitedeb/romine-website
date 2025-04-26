import "./globals.css";

export const metadata = {
  title: "Romine",
  description: "Best Microsoft Points Generator",
  icons: {
    icon: [
      { media: '(prefers-color-scheme: light)', url: '/icon.ico' },
      { media: '(prefers-color-scheme: dark)', url: '/icon.ico' },
    ],
  },
  openGraph: {
    title: "Romine",
    description: "Best Microsoft Points Generator",
    url: "https://romine.pages.dev",
    siteName: "Romine",
    images: [
      {
        url: "https://romine.pages.dev/Romine.png",
        width: 1200,
        height: 630,
        alt: "Romine Image",
      },
    ],
    type: "website",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
        {children}
      </body>
    </html>
  );
}
