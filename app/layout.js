import './globals.css';

export const metadata = {
  title: 'Nishanth Nuthi | Software Developer',
  description: 'Portfolio of Nishanth Nuthi - Aspiring Software Developer specializing in Full Stack Development, Machine Learning, and Data Engineering',
  keywords: ['Nishanth Nuthi', 'Software Developer', 'Full Stack Developer', 'React', 'Next.js', 'Machine Learning'],
  icons: {
    icon: '/favicon.ico',
  },  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
