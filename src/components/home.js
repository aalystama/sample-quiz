import { Col, Container } from "react-bootstrap";
import FadeIn from "react-fade-in";

function Home() {
  return (
    <Container>
      <Col>
        <FadeIn>
          <h3>
            Здравствуйте, Агай! Этот проект написан на React и использует
            следующие библиотеки:
            <ul>
              <li>
                <a href="https://styled-components.com/">styled-components</a>
              </li>
              <li>
                <a href="https://react-bootstrap.github.io/">react-bootstrap</a>
              </li>
              <li>
                <a href="https://www.npmjs.com/package/react-fade-in/">
                  react-fade-in
                </a>
              </li>
              <li>
                <a href="https://reactrouter.com/">react-router</a>
              </li>
            </ul>
            Данные получаются от{" "}
            <a href="https://jsonplaceholder.typicode.com/">
              JSONPlaceholder REST API
            </a>
          </h3>
        </FadeIn>
      </Col>
    </Container>
  );
}

export default Home;
