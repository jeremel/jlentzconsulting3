import Head from "next/head";
import styled from "styled-components";
import ContactForm from "../components/ContactForm";
// import CenterTextBlock from "../components/CenterTextBlock";
// import Header from "../components/Header";
// import Hero from "../components/Hero";
// import LeftSlideInBox from "../components/LeftSlideInBox";
// import RightSlideInBox from "../components/RightSlideInBox";
// import ServicesList from "../components/ServicesList";
import FullPageText from "../components/FullPageText";

import Lenis from "@studio-freight/lenis";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

const Container = styled.div``;

export default function Home() {
  const [anchor, setAnchor] = useState(null);

  // Lenis smooth scroll code
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // https://easings.net
      direction: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    //get scroll value
    // lenis.on("scroll", ({ scroll, limit, velocity, direction, progress }) => {
    //   console.log({ scroll, limit, velocity, direction, progress });
    // });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    {
      anchor && lenis.scrollTo(anchor);
    }

    requestAnimationFrame(raf);
  }, [anchor]);

  return (
    <Container>
      <Head>
        <title>JLentz Consulting</title>
        <meta name="description" content="JLentz Consulting" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FullPageText setAnchor={setAnchor} />
      <ContactForm />
      <Footer />

      {/* <Header />
      <Hero />
      <CenterTextBlock text="With over a decade's worth of experience managing the finances of small businesses with multi-million dollar revenues, we are intimately aware of what matters to small business owners." />
      <LeftSlideInBox text="We work one on one with you to assess your business's performance and to create a plan for the future to help your business achieve and exceed it's goals." />
      <RightSlideInBox text="We are comfortable wearing many hats and can provide guidance in many facets of your business." />
      <LeftSlideInBox text="With experience in all aspects of business including Accounting, Operations, Project Management, and Technology, we are generalists and proud of it." />
      <ServicesList /> */}
    </Container>
  );
}
