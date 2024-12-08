import "./globals.css";
import ToastProvider from "@/components/toast/ToastProvider";
import Footer from "@/layouts/footer/Footer";
import Header from "@/layouts/header/Header";
import Providers from "@/redux/Providers";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          <ToastProvider />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
