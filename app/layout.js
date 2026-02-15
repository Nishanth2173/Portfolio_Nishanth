import './globals.css';

export const metadata = {
  title: 'Nishanth Nuthi | Software Developer',
  description: 'Portfolio of Nishanth Nuthi - Aspiring Software Developer specializing in Full Stack Development, Machine Learning, and Data Engineering',
  keywords: ['Nishanth Nuthi', 'Software Developer', 'Full Stack Developer', 'React', 'Next.js', 'Machine Learning', 'Data Engineering', 'Portfolio'],
  authors: [{ name: 'Nishanth Nuthi' }],
  creator: 'Nishanth Nuthi',
  publisher: 'Nishanth Nuthi',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nishanth-portfolio.vercel.app',
    title: 'Nishanth Nuthi | Software Developer',
    description: 'Portfolio of Nishanth Nuthi - Aspiring Software Developer specializing in Full Stack Development, Machine Learning, and Data Engineering',
    siteName: 'Nishanth Nuthi Portfolio',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
