import Head from "next/head";
import { useRef } from "react";
import Header from "../components/Header";
import HomePage from "../components/Home";

export default function Home() {
  const homeRef = useRef<null | HTMLDivElement>(null);
  const featuresRef = useRef<null | HTMLDivElement>(null);
  const faqRef = useRef<null | HTMLDivElement>(null);
  return (
    <>
      <Head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>SourceFM</title>
        <meta
          name="description"
          content="A music player for source based games, Play your music to your teammates in voice-chat in games like CS:GO"
          key="desc"
        />
        <meta
          name="keywords"
          content="CS:GO, csgo, source games, source, music, music player, voice chat"
          key="keywords"
        />
        <meta name="author" content="SourceFM" key="author" />
        <meta property="og:title" content="SourceFM" key="og:title" />
        <meta
          property="og:description"
          content="A music player for source based games, Play your music to your teammates in voice-chat in games like CS:GO"
          key="og:description"
        />
        <meta name="robots" content="index, follow" key="robots" />
        <meta
          name="google-site-verification"
          content="AwlJ7atvp0dKodDTyTUrFs7V3hR1f7alRo8W7tImGKk"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        homeSection={homeRef}
        featuresSection={featuresRef}
        faqSection={faqRef}
      />
      <main className="container px-8 mx-auto">
        <HomePage
          homeSection={homeRef}
          featuresSection={featuresRef}
          faqSection={faqRef}
        />
      </main>

      <footer></footer>
    </>
  );
}
