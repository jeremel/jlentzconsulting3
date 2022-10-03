import styled from "styled-components";

const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--darkerBlue);
  flex-direction: column;
  gap: 1rem;
  border-bottom: 0.55rem solid #b2fff3;
`;

const Title = styled.div`
  padding: 1.5rem 0 0.5rem 0;

  h1 {
    cursor: default;
    font-size: 10vw;
    font-weight: 500;
    line-height: 1;
  }
`;

const Nav = styled.nav`
  width: 100%;

  ul {
    padding: 0;
    display: flex;
    /* justify-content: center;
    gap: 8rem; */
    justify-content: space-around;
    list-style: none;

    li {
      font-size: 1.2rem;
      padding-bottom: 1.25rem;
    }

    li a {
      text-decoration: none;
      color: #b2fff3;

      &:hover {
        text-decoration: underline;
        text-decoration-style: dashed;
        text-decoration-thickness: 1.5px;
        text-decoration-skip-ink: none;
        text-underline-offset: 6px;
      }
    }
  }
`;

export default function Header() {
  return (
    <Container>
      <Title>
        <h1>JLentz Consulting</h1>
      </Title>
      <Nav>
        <ul>
          <li>
            <a href="/">Services</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </Nav>
    </Container>
  );
}
