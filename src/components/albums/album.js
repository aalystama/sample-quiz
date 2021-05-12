import { Col, Row, Image } from "react-bootstrap";
import { Spinner } from "../spinner";
import { Container } from "../container";
import { useMemo, useState } from "react";
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
  const [loading, setLoading] = useState(true);

  let match = useRouteMatch();

  useMemo(() => {
    fetch(
      "https://jsonplaceholder.typicode.com/photos?albumId=" +
        props.id.toString()
    )
      .then((response) => response.json())
      .then((json) => {
        setPhoto(json[0]);
      });
  }, [props.id]);

  function imageLoaded() {
    if (loading !== false) {
      setLoading(false);
    }
  }

  return (
    <AlbumContainer>
      <Row>
        <Col>
          {photo === null ? (
            <Spinner animation="border" />
          ) : (
            <span>
              <Spinner
                animation="border"
                style={{ display: loading ? "block" : "none" }}
              />
              <Image
                src={photo.thumbnailUrl}
                onLoad={imageLoaded}
                style={{ display: !loading ? "block" : "none" }}
                thumbnail
                fluid
              />
            </span>
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
