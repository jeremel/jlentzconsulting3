import { useEffect, useLayoutEffect, useRef } from "react";
import styled from "styled-components";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Container = styled.main`
  min-height: 100vh;
  background: var(--darkerBlue);
  color: var(--lightBlue);
  font-weight: 300;
  line-height: 1.25;
  padding: 2rem clamp(1rem, -0.5rem + 6.6667vw, 3rem);

  p {
    margin-bottom: 4rem;
    font-size: clamp(2rem, 0.5rem + 6.6667vw, 4rem);

    &:hover {
      cursor: default;
    }

    span {
      color: var(--lighterBlue);
      font-style: italic;
    }

    a {
      color: var(--lighterBlue);
      font-style: italic;
      text-decoration: none;

      &:hover {
        color: var(--white);
      }
    }
  }
`;

export default function FullPageText({ setAnchor }) {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.utils.toArray(comp.current.children).forEach((el, index) => {
        let firstNode = index === 0;
        gsap.from(el, {
          autoAlpha: firstNode ? 1 : 0,
          opacity: firstNode ? 1 : 0,
          y: firstNode ? 0 : 25,
          duration: 1,
          scrub: true,
          ease: "power1",
          scrollTrigger: {
            trigger: el,
            start: "top 75%",
            toggleActions: "play none none none",
            // markers: true,
          },
        });
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <Container ref={comp}>
      <p>
        <span>JLentz Consulting</span> provides your small business with
        solutions for <span>accounting systems and processes</span> that are{" "}
        <span>maintainable, sustainable,</span> and that allow you to{" "}
        <span>trust the financial information</span> that you are looking at so
        that you are able to make <span>more informed decisions</span>.
      </p>
      <p className="par">
        We work with you and your accountant or bookkeeper to{" "}
        <span>assess the systems</span> that you are using and{" "}
        <span>make any changes necessary</span> to{" "}
        <span>improve your workflow</span>.
      </p>
      <p className="par">
        We also provide{" "}
        <span>training for business owners and bookkeepers</span> so that they
        are better informed when it comes to{" "}
        <span>inputting, retrieving, and analyzing</span> their financial data.
        We work one on one with you to determine what the best course of action
        will be, and <span>we stick with you</span> to make sure that these new
        processes continue to <span>work for you in the long-term</span>.
      </p>
      <p className="par">
        <a href="#contact" onClick={() => setAnchor("#contact")}>
          Reach out today
        </a>{" "}
        to find out how we can help you make more informed decisions.
      </p>
    </Container>
  );
}
