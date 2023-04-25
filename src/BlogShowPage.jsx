import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function BlogShowPage() {
  const [post, setPost] = useState({});
  const params = useParams();

  const handleShowBlog = () => {
    axios.get(`http://localhost:3000/posts/${params.id}.json`).then((response) => {
      setPost(response.data);
    });
  };

  useEffect(handleShowBlog, []);

  return (
    <div id="posts-show">
      <h2>{post.title}</h2>
      <p>{post.image}</p>
      <img src={post.image} alt="" />
    </div>
  );
}
