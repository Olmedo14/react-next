import "./globals.css";

export const metadata = {
  title: "Panel Administrativo",
  description: "Creado por Olmedo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
