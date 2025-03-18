import "./globals.css";
import MainLayout from "@/components/layout/MainLayout";

export const metadata = {
  title: "Panel Administrativo",
  description: "Creado por Olmedo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
