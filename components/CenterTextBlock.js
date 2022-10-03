import styled from "styled-components";

const Container = styled.div`
  min-height: 50vh;
  background: #ffffff;
  color: var(--darkerBlue);
  display: grid;
  place-items: center;

  .textBlock {
    max-width: 90%;
    margin: 4rem 0 2rem;
    padding: 2rem;
    text-align: center;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, -50%);
      border-top: 8px solid #b37359;
      width: 75%;
    }

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, -50%);
      border-bottom: 8px solid #b37359;
      width: 75%;
    }

    p {
      line-height: 1.1;
      font-size: 3rem;
    }
  }
`;

export default function CenterTextBlock({ text }) {
  return (
    <Container>
      <div className="textBlock">
        <p>{text}</p>
      </div>
    </Container>
  );
}
