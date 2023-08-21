import "./globals.css";
import localFont from "next/font/local";
import favicon from "../../public/favicon.ico";

const primaryFont = localFont({
  src: "../assets/fonts/Sensei-Medium.ttf",
  display: "swap",
});

export const metadata = {
  title: "Pet Vet | Marianella Tovar",
  description: "Médico Veterinario Marianella Tovar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${primaryFont.className} !scroll-smooth`}>
      <head>
        <link rel="icon" href={favicon.src} sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
