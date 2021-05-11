import { useEffect, useState } from "react";
import FadeIn from "react-fade-in";
import { Spinner } from "../spinner.js";
import { Album } from "./album.js";

function Albums() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((json) => setAlbums(json));
  }, []);

  if (albums.length === 0) {
    return <Spinner animation="border" />;
  } else {
    return (
      <FadeIn>
        {albums.map((album) => {
          return <Album key={album.id} title={album.title} id={album.id} />;
        })}
      </FadeIn>
    );
  }
}

export default Albums;
