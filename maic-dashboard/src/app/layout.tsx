// maic-dashboard/src/app/layout.tsx
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers" // 분리한 클라이언트 Provider 임포트

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MAIC - MAP Asset Intelligence Center",
  description: "Unified Asset Intelligence for BTC & MAP Protocol",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* 모든 하위 컴포넌트에 클라이언트 상태 주입 */}
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}