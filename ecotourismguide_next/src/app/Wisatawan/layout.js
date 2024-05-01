import "../globals.css";

export const metadata = {
  title: "Dashboard",
  description: "Website tentang pariwisata",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
