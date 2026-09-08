import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'KI-angepasste Aufgaben gestalten | Digital Learning Hub Sek II',
  description:
    'Vom Lernziel zu Aufgaben mit klaren KI-Rollen, sichtbaren Lernspuren und begründeten menschlichen Urteilen.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de-CH">
      <body>{children}</body>
    </html>
  );
}
