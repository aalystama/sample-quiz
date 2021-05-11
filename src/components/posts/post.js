import { Col, Container } from "react-bootstrap";
import styled from "styled-components";

const StyledContainer = styled(Container)`
  background-color: #f5f5f5;
  border-radius: 5px;
`;

function Post(props) {
  return (
    <StyledContainer>
      <Col>
        <h3>{props.title}</h3>
        <p>{props.body}</p>
      </Col>
    </StyledContainer>
  );
}

export default Post;
