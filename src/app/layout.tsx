import "./globals.css";

import Providers from "@/store/redux/Provider";

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
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
