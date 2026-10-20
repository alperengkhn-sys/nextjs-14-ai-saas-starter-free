export const metadata = {
  title: 'Next.js 14 AI & Prompt SaaS Starter (Free Demo)',
  description: 'Free UI Preview Edition',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, backgroundColor: '#09090b', color: '#fff' }}>
        {children}
      </body>
    </html>
  );
}
