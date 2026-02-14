import '../../styles/globals.css';

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <head><meta name="google-site-verification" content="23kAS2g1VN7deKZLKIOmQHkJGkMXhocngVwF5xJD58s" /></head>
      <body>
        {children}
      </body>
    </html>
  );
}
