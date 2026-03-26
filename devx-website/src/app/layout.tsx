import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Krado One — A DevX Platform',
  description:
    'Self-hosted internal developer platform. Tasks, service catalog, runbooks, incident management, cloud visibility, and more — all in one place.',
  icons: { icon: '/favicon.png' },
  openGraph: {
    title: 'Krado One',
    description: 'The internal developer platform for modern engineering teams.',
    type: 'website',
    images: [{ url: '/logo.png' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
