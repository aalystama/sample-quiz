import { Form } from "react-bootstrap";
import styled from "styled-components";
import { Container } from "../container";

const Todo = ({ todo, className: a }) => {
  return (
    <Container className={a}>
      <Form.Check type="checkbox" label={todo.title} value={todo.completed} />
    </Container>
  );
};

export default styled(Todo)`
  margin-bottom: 10px;
  border-radius: 2px;
  padding: 10px;
  align-items: center;
`;
