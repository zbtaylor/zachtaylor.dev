import Head from "next/head";
import Link from "next/link";
import Hero from "./hero";
import Navigation from "./navigation";

const name = "Zach Taylor";
export const siteTitle = "Zach Taylor | Full Stack Developer";

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="The web development blog and portfolio of Zach Taylor."
        />
        <title>{siteTitle}</title>
        <meta name="og:title" content={siteTitle} />
      </Head>
      <div className="container">
        <Navigation />
        {home && <Hero />}
        {children}
      </div>
    </>
  );
}
