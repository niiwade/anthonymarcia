import "./globals.css";
import localFont from "next/font/local";
import "@fortawesome/fontawesome-free/css/all.min.css";

const ppNeue = localFont({ src: "../public/fonts/ppneue.woff2" });

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/am.jpg" />
      </head>
      <body className={ppNeue.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
