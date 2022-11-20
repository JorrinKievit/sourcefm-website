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
        <title>SourceFM</title>
        <meta
          name="description"
          content="A music player for source based games, Play your music to your teammates in voice-chat in games like CS:GO"
          key="desc"
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
