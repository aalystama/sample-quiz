import { useParams } from "react-router";

export const Photos = () => {
  let { albumId } = useParams();

  return <h3>Photos of album #{albumId}</h3>;
};
