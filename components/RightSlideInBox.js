import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background: var(--white);
  display: grid;
  align-content: center;
  justify-items: right;

  .box {
    background: var(--lighterBlue);
    min-height: 25vh;
    width: 65%;
    padding: 4rem 1.5rem;
    margin: 2rem 0;
    display: flex;
    justify-content: flex-end;

    .innerBox {
      max-width: 90%;

      p {
        margin-left: auto;
        line-height: 1.25;
        font-size: 2rem;
        color: var(--darkerBlue);
      }
    }
  }
`;

export default function RightSlideInBox({ text }) {
  return (
    <Container>
      <div className="box">
        <div className="innerBox">
          <p>{text}</p>
        </div>
      </div>
    </Container>
  );
}
