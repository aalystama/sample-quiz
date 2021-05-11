import { Container } from "../container.js";

function Album(props) {
  return (
    <Container>
      <h2>{props.title}</h2>
    </Container>
  );
}

export default Album;
