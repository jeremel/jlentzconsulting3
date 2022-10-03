import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  overflow-x: hidden;
  background: yellow;

  ul {
    display: flex;
    gap: 1rem;
    color: black;
    animation: marquee 10s linear infinite;
  }

  @keyframes marquee {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }
`;

export default function Marquee() {
  return (
    <Container>
      <ul>
        <li>Marquee 1</li>
        <li>Marquee 2</li>
        <li>Marquee 3</li>
        <li>Marquee 4</li>
        <li>Marquee 5</li>
        <li>Marquee 6</li>
        <li>Marquee 7</li>
        <li>Marquee 8</li>
        <li>Marquee 9</li>
        <li>Marquee 10</li>
        <li>Marquee 1</li>
        <li>Marquee 2</li>
        <li>Marquee 3</li>
        <li>Marquee 4</li>
        <li>Marquee 5</li>
        <li>Marquee 6</li>
        <li>Marquee 7</li>
        <li>Marquee 8</li>
        <li>Marquee 9</li>
        <li>Marquee 10</li>
        <li>Marquee 1</li>
        <li>Marquee 2</li>
        <li>Marquee 3</li>
        <li>Marquee 4</li>
        <li>Marquee 5</li>
        <li>Marquee 6</li>
        <li>Marquee 7</li>
        <li>Marquee 8</li>
        <li>Marquee 9</li>
        <li>Marquee 10</li>
      </ul>
    </Container>
  );
}
