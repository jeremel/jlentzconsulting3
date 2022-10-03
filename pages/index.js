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
        <link rel="icon" href="/JL-icon.png" />
      </Head>

      <FullPageText setAnchor={setAnchor} />
      <ContactForm />
      <Footer />
    </Container>
  );
}
