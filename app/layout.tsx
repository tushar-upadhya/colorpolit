import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/component/header/Header";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetBrainsMono",
});

export const metadata = {
  title: "Tushar Upadhyay",
  description:
    "Frontend Developer, HTML5, CSS, JavaScript,TypeScript,  ReactJS, NextJS, Redux, TailwindCss, SCSS, Java, DSA",
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.variable}>
        <Header />
        {children}
      </body>
    </html>
  );
}
