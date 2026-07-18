import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "sky-city-cloud.pages.dev";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const base = new URL(`${protocol}://${host}`);

  return {
    metadataBase: base,
    title: "天空农云 · Sky City Cloud",
    description:
      "把阳光分给作物、城市降温、水热循环和必要控制电力的开放式未来城市基础设施。",
    icons: {
      icon: "/favicon.png",
      shortcut: "/favicon.png",
    },
    openGraph: {
      type: "website",
      locale: "zh_CN",
      siteName: "天空农云 · Sky City Cloud",
      title: "天空农云 · 把阳光分给生命",
      description: "一个可系留、可回收、可证伪的空中农业与城市遮阳开源计划。",
      images: [
        {
          url: new URL("/og.png", base).toString(),
          width: 1200,
          height: 630,
          alt: "天空农云开放式城市基础设施概念",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "天空农云 · Sky City Cloud",
      description: "把阳光分给生命，而不只分给电池。",
      images: [new URL("/og.png", base).toString()],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
