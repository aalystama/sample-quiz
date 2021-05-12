import { useMemo, useState } from "react";
import { CardDeck, Col, Container } from "react-bootstrap";
import FadeIn from "react-fade-in";
import { useParams } from "react-router";
import { Spinner } from "../spinner";
import { Photo } from "./photo";

export const Photos = () => {
  const [photos, setPhotos] = useState([]);
  let { albumId } = useParams();

  useMemo(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`
    ).then((response) =>
      response.json().then((json) => {
        console.log(json);
        setPhotos([...json]);
      })
    );
  }, [albumId]);

  if (photos.length === 0) {
    return <Spinner animation="border" />;
  } else {
    return (
      <Container>
        <FadeIn>
          {photos.zdl_chunk(4).map((composit) => (
            <Col>
              <CardDeck>
                {composit.map((photo) => (
                  <Photo photo={photo} key={photo.id} />
                ))}
              </CardDeck>
            </Col>
          ))}
        </FadeIn>
      </Container>
    );
  }
};
