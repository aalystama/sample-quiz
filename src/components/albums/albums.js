import { useEffect, useState } from "react";
import FadeIn from "react-fade-in";
import { Spinner } from "../spinner.js";
import Album from "./album.js";

function Albums() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((json) => setAlbums(json));

    // TODO: Доделать это
    albums.map((album) =>
      fetch("https://jsonplaceholder.typicode.com/photos?albumId=" + album.id)
        .then((response) => response.json())
        .then((json) => setAlbums())
    );
  }, [albums]);

  if (albums.length === 0) {
    return <Spinner animation="border" />;
  } else {
    return (
      <FadeIn>
        {albums.map((album) => (
          <Album title={album.title} />
        ))}
      </FadeIn>
    );
  }
}

export default Albums;
