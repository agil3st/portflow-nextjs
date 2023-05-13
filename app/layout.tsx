import "/styles/globals.css";
import { Poppins } from "next/font/google";
import Header from "/components/Header";
import Footer from "/components/Footer";
import api from "@/libs/api";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Portflow Next.js",
  description: "By Agil Setiawan",
};

export let myConfig = {};
export let mediumProfile = {};
export let socials = {};

async function getConfig() {
  return await api({ page: "config" });
}

async function getMediumProfile() {
  return await api({
    page: "https://api.medium.com/v1/me",
    plain: true,
    token: process.env.MEDIUM_API_TOKEN,
  });
}

async function getSocials() {
  return await api({
    page: "share-button",
    query: {
      $orderby: "data/order/iv asc",
    },
  });
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const config = await getConfig();
  myConfig = config.items[0].data;

  const medium = await getMediumProfile();
  mediumProfile = medium.data;

  const socialData = await getSocials();
  socials = socialData.items;

  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.lineicons.com/4.0/lineicons.css"
          rel="stylesheet"
        />
      </head>
      <body className={poppins.className} suppressHydrationWarning={true}>
        <div className="mx-auto">
          {/* Navbar */}
          <Header config={config} />
          {/* End of Navbar */}

          {/* Content */}
          {children}
          {/* End of Content */}

          {/* Footer */}
          <Footer />
          {/* End of Footer */}
        </div>
      </body>
    </html>
  );
}
