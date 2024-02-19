import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'RAToolBox',
  description: 'Checking listing IP or Domains',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="main-container">
          <Navbar />
          <div className="content-container">{children}</div>
          <div className="footer-layout">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
