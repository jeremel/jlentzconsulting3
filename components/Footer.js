import styled from "styled-components";

const Container = styled.footer`
  padding: 1rem 2rem 3rem 2rem;
  width: 100%;
  background: var(--darkerBlue);
  color: var(--lightBlue);
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1;
  position: relative;

  p {
    font-size: clamp(2.75rem, 1.0642rem + 7.7064vw, 8rem);
    line-height: 0.925;
    margin-top: 1rem;

    &:last-of-type {
      position: absolute;
      top: 32px;
      right: 32px;
      font-size: clamp(1.5rem, 1.1789rem + 1.4679vw, 2.5rem);
      writing-mode: vertical-rl;
      text-orientation: upright;
      color: var(--lighterBlue);
    }
  }

  a {
    width: max-content;
    font-size: clamp(1rem, 0.6789rem + 1.4679vw, 2rem);
    color: var(--lighterBlue);
    margin: 2rem 0;
    padding: 0 0 0 0.5rem;
    text-underline-offset: 12px;
    text-decoration-skip-ink: none;
    text-decoration-color: var(--lightBlue);
    transition: all 0.25s ease-in-out;

    &:hover {
      color: var(--lightBlue);
      text-decoration-style: dotted;
      text-decoration-color: var(--lighterBlue);
    }
  }
`;

export default function Footer() {
  return (
    <Container>
      <p>JLentz</p>
      <p>Consulting</p>
      <a href="mailto:jlentzconsulting@gmail.com">jlentzconsulting@gmail.com</a>
      <p>&copy;2022</p>
    </Container>
  );
}
