import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'KI-angepasste Aufgabenstellungen | Digital Learning Hub Sek II',
  description:
    'Eine Werkbank für Lernziele, klare KI-Rollen, sichtbare Lernspuren und begründete menschliche Urteile.',
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
