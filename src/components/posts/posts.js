import { useEffect, useState } from "react";
import Spinner from "../spinner.js";
import Post from "./post.js";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  if (posts.length === 0) {
    return <Spinner animation="border" />;
  } else {
    return posts.map((post) => <Post title={post.title} body={post.body} />);
  }
}

export default Posts;
