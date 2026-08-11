import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const imageUrl = `${protocol}://${host}/og.png`;

  return {
    title: "Manoel Teófilo | Sites & Automações",
    description:
      "Sites, automações e presença digital para negócios locais de Fortaleza e Região Metropolitana.",
    keywords: [
      "criação de sites em Fortaleza",
      "automação WhatsApp Fortaleza",
      "Manoel Teófilo",
      "sites para negócios locais",
    ],
    openGraph: {
      title: "Manoel Teófilo | Sites & Automações",
      description:
        "Infraestrutura digital para negócios locais venderem com mais clareza e ganharem tempo.",
      type: "website",
      locale: "pt_BR",
      images: [{ url: imageUrl, width: 1200, height: 630, alt: "Manoel Teófilo — Sites & Automações" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Manoel Teófilo | Sites & Automações",
      description:
        "Infraestrutura digital para negócios locais venderem com mais clareza e ganharem tempo.",
      images: [imageUrl],
    },
    icons: {
      icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
      shortcut: "/favicon.svg",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>{children}</body>
    </html>
  );
}
