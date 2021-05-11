import { Col, Row, Image } from "react-bootstrap";
import { Spinner } from "../spinner";
import { Container } from "../container";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useRouteMatch } from "react-router";
import { Link } from "react-router-dom";

const AlbumContainer = styled(Container)`
  margin-bottom: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const Album = (props) => {
  const [photo, setPhoto] = useState(null);

  let match = useRouteMatch();

  useEffect(() => {
    fetch(
      "https://jsonplaceholder.typicode.com/photos?albumId=" +
        props.id.toString()
    )
      .then((response) => response.json())
      .then((json) => setPhoto(json[0]));
  }, [props.id]);

  return (
    <AlbumContainer>
      <Row>
        <Col>
          {photo === null ? (
            <Spinner animation="border" />
          ) : (
            <Image src={photo.url} thumbnail fluid />
          )}
        </Col>
        <Col xs={10}>
          <Link to={`${match.path}/${props.id}`}>
            <h2>{props.title}</h2>
          </Link>
        </Col>
      </Row>
    </AlbumContainer>
  );
};
