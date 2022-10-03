import styled from "styled-components";

const Container = styled.section`
  background: var(--darkerBlue);
  min-height: 100vh;
  display: grid;
  place-items: center;

  .content {
    margin: 4rem;
    width: 60%;

    p {
      font-size: 4rem;
      margin-bottom: 0.25rem;
    }

    details {
      border-bottom: 2px solid var(--lighterBlue);

      &:first-of-type {
        border-top: 2px solid var(--lighterBlue);
      }

      p {
        font-size: 1.5rem;
        font-weight: 300;
        line-height: 1.75;
      }

      summary {
        font-size: 2.5rem;
        list-style: none;
        display: flex;
        align-items: center;

        &::webkit-details-marker {
          display: none;
        }
      }
    }

    svg {
      margin-bottom: -0.5rem;
      vertical-align: middle;
    }
  }
`;

export default function ServicesList() {
  return (
    <Container>
      <div className="content">
        <p>Consulting Services:</p>
        <details>
          <summary>
            <svg
              width="36px"
              height="36px"
              strokeWidth="5"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="var(--lighterBlue)"
            >
              <path
                d="M6 12h6m6 0h-6m0 0V6m0 6v6"
                stroke="var(--lighterBlue)"
                strokeWidth="5"
                strokeLinecap="square"
                strokeLinejoin="square"
              ></path>
            </svg>
            Accounting
          </summary>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            venenatis turpis elit, sed iaculis leo laoreet non. Integer sapien
            nisl, porttitor et lectus in, dapibus dignissim tellus. Sed ac nisi
            nunc. Curabitur bibendum eros eget sem aliquet, quis pellentesque
            purus bibendum. Sed placerat ut lectus at iaculis. Praesent
            fermentum turpis.
          </p>
        </details>
        <details>
          <summary>
            <svg
              width="36px"
              height="36px"
              strokeWidth="5"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="var(--lighterBlue)"
            >
              <path
                d="M6 12h6m6 0h-6m0 0V6m0 6v6"
                stroke="var(--lighterBlue)"
                strokeWidth="5"
                strokeLinecap="square"
                strokeLinejoin="square"
              ></path>
            </svg>
            Operations
          </summary>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            venenatis turpis elit, sed iaculis leo laoreet non. Integer sapien
            nisl, porttitor et lectus in, dapibus dignissim tellus. Sed ac nisi
            nunc. Curabitur bibendum eros eget sem aliquet, quis pellentesque
            purus bibendum. Sed placerat ut lectus at iaculis. Praesent
            fermentum turpis.
          </p>
        </details>
        <details>
          <summary>
            <svg
              width="36px"
              height="36px"
              strokeWidth="5"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="var(--lighterBlue)"
            >
              <path
                d="M6 12h6m6 0h-6m0 0V6m0 6v6"
                stroke="var(--lighterBlue)"
                strokeWidth="5"
                strokeLinecap="square"
                strokeLinejoin="square"
              ></path>
            </svg>
            Project Management
          </summary>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            venenatis turpis elit, sed iaculis leo laoreet non. Integer sapien
            nisl, porttitor et lectus in, dapibus dignissim tellus. Sed ac nisi
            nunc. Curabitur bibendum eros eget sem aliquet, quis pellentesque
            purus bibendum. Sed placerat ut lectus at iaculis. Praesent
            fermentum turpis.
          </p>
        </details>
        <details>
          <summary>
            <svg
              width="36px"
              height="36px"
              strokeWidth="5"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="var(--lighterBlue)"
            >
              <path
                d="M6 12h6m6 0h-6m0 0V6m0 6v6"
                stroke="var(--lighterBlue)"
                strokeWidth="5"
                strokeLinecap="square"
                strokeLinejoin="square"
              ></path>
            </svg>
            Technology
          </summary>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            venenatis turpis elit, sed iaculis leo laoreet non. Integer sapien
            nisl, porttitor et lectus in, dapibus dignissim tellus. Sed ac nisi
            nunc. Curabitur bibendum eros eget sem aliquet, quis pellentesque
            purus bibendum. Sed placerat ut lectus at iaculis. Praesent
            fermentum turpis.
          </p>
        </details>
      </div>
    </Container>
  );
}
