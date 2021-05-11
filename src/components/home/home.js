import { Col, Container } from "react-bootstrap";

function Home() {
  return (
    <Container>
      <Col>
        <h2>
          Здравствуйте, Агай! Этот проект написан на React и использует
          следующие библиотеки: styled-components, react-bootstrap. Он ипользует
          данные{" "}
          <a href="https://jsonplaceholder.typicode.com/">
            JSONPlaceholder REST API
          </a>
          .
        </h2>
      </Col>
    </Container>
  );
}

export default Home;
