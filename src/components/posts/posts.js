import { useMemo, useState } from "react";
import FadeIn from "react-fade-in";
import { Spinner } from "../spinner.js";
import Post from "./post.js";

function Posts() {
  const [posts, setPosts] = useState([]);

  useMemo(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  if (posts.length === 0) {
    return <Spinner animation="border" />;
  } else {
    return (
      <FadeIn>
        {posts.map((post) => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </FadeIn>
    );
  }
}

export default Posts;
