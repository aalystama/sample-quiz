import { Col } from "react-bootstrap";
import { Container } from "../container";

function Post(props) {
  return (
    <Container>
      <Col>
        <h3>{props.title}</h3>
        <p>{props.body}</p>
      </Col>
    </Container>
  );
}

export default Post;
