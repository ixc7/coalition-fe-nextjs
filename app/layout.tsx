import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import "./globals.css"

const manrope = Manrope({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Coalition Skills Test",
  description: "Coalition Skills Test",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={manrope.className}>
      <body>{children}</body>
    </html>
  )
}
