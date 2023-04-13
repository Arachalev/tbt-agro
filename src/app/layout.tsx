import "./globals.css";

export const metadata = {
  title: "Tbt-Agro",
  description: "Homepage of TBT Agro",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
