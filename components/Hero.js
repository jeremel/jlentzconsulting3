import styled from "styled-components";
import Image from "next/future/image";

const Container = styled.section`
  height: 70vh;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background: var(--darkerBlue);

  .heroContainer {
    width: 50%;
    justify-self: center;
    align-self: center;

    p {
      padding: 1rem 2rem 1rem 1rem;
      font-size: 3rem;
      font-weight: 300;
      font-style: italic;
      line-height: 1.25;
    }
  }

  .imageContainer {
    width: 50%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      border-radius: 2px;
      object-fit: cover;
    }
  }
`;

export default function Hero() {
  return (
    <Container>
      <div className="heroContainer">
        <p>
          We work with small businesses to create and implement strategies that
          will help them grow for years to come.
        </p>
      </div>
      <div className="imageContainer">
        <img
          src="/jlentzConsulting.jpg"
          alt="JLentz Consulting"
          aria-hidden="true"
        />
      </div>
    </Container>
  );
}
