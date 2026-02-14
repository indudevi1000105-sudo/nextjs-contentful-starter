import '../../styles/globals.css';

export const metadata = {
  verification: {
    google: '23kAS2g1VN7deKZLKIOmQHkJGkMXhocngVwF5xJD58s',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
