import type React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Footer from "../components/footer";

// Poppins 폰트 설정 (Black 900 weight와 italic 스타일 포함)
const poppins = Poppins({
  weight: ["900"],
  style: ["italic", "normal"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "풀스택 개발자 LIKA-7의 포트폴리오",
  description: "프로젝트 포트폴리오",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={poppins.className}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <div className="flex-grow">{children}</div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
