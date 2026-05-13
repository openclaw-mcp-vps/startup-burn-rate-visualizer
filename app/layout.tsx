import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BurnRate — Visualize Your Startup Runway',
  description: 'Interactive burn rate dashboards with expense category breakdowns and runway predictions for startup founders and CFOs.',
  keywords: 'burn rate, startup runway, expense tracking, financial dashboard, startup tools',
  openGraph: {
    title: 'BurnRate — Visualize Your Startup Runway',
    description: 'Interactive burn rate dashboards with expense category breakdowns and runway predictions.',
    type: 'website'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ae4f5699-6aa7-453a-8f7a-dcc83fd8ed12"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
