import "./globals.css";
import { Poppins, Noto_Sans_Hebrew } from "@next/font/google";
import { Provider } from "@/context/Ctx";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "400"],
  variable: "--font-poppins",
});
const noto = Noto_Sans_Hebrew({
  subsets: ["latin"],
  weight: ["100", "200", "400"],
  variable: "--font-noto",
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <Provider>
        <body className={`${poppins.className} ${noto.className}`}>
          {children}
        </body>
      </Provider>
    </html>
  );
}
