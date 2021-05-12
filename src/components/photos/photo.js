import { useState } from "react";
import { Card } from "react-bootstrap";
import { Spinner } from "../spinner";

export const Photo = ({ photo }) => {
  const [loading, setLoading] = useState(true);

  const imageLoaded = () => {
    if (loading !== false) {
      setLoading(false);
    }
  };

  return (
    <Card>
      <Spinner
        animation="border"
        style={{ display: loading ? "block" : "none" }}
      />
      <Card.Img
        variant="top"
        src={photo.url}
        onLoad={imageLoaded}
        style={{ display: !loading ? "block" : "none" }}
      />
      <Card.Body>
        <Card.Title>{photo.title}</Card.Title>
      </Card.Body>
    </Card>
  );
};
