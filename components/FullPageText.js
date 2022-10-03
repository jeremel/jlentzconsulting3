import styled from "styled-components";

const Container = styled.main`
  min-height: 100vh;
  background: var(--darkerBlue);
  color: var(--lightBlue);
  font-weight: 300;
  line-height: 1.25;
  padding: 2rem clamp(1rem, -0.5rem + 6.6667vw, 3rem);

  p {
    margin-bottom: 4rem;
    /* font-size: clamp(2.5rem, 1.375rem + 5vw, 4rem); */
    font-size: clamp(2rem, 0.5rem + 6.6667vw, 4rem);

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
  return (
    <Container>
      <p>
        <span>JLentz Consulting</span> provides your small business with
        solutions for <span>accounting systems and processes</span> that are{" "}
        <span>maintainable, sustainable,</span> and that allow you to{" "}
        <span>trust the financial information</span> that you are looking at so
        that you are able to make <span>more informed decisions</span>.
      </p>
      <p>
        We work with you and your accountant or bookkeeper to{" "}
        <span>assess the systems</span> that you are using and{" "}
        <span>make any changes necessary</span> to{" "}
        <span>improve your workflow</span>.
      </p>
      <p>
        We also provide{" "}
        <span>training for business owners and bookkeepers</span> so that they
        are better informed when it comes to <span>inputting</span>,{" "}
        <span>retrieving</span>, and <span>analyzing</span> their financial
        data. We work one on one with you to determine what the best course of
        action will be, and <span>we stick with you</span> to make sure that
        these new processes continue to{" "}
        <span>work for you in the long-term</span>.
      </p>
      <p>
        <a href="#contact" onClick={() => setAnchor("#contact")}>
          Reach out today
        </a>{" "}
        to find out how we can help you make more informed decisions.
      </p>
    </Container>
  );
}
