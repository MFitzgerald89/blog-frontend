import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function BlogShowPage(props) {
  const [post, setPost] = useState({});
  const params = useParams();
  const [isBlogShowVisible, setIsBlogShowVisible] = useState(false);

  const handleShowBlog = () => {
    axios.get(`http://localhost:3000/posts/${params.id}.json`).then((response) => {
      setPost(response.data);
      setIsBlogShowVisible(useState(true));
    });
  };

  useEffect(handleShowBlog, []);

  return (
    <div id="posts-show">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <img src={post.image} alt="" />
      <p>
        <a href="/posts" onclick="history.back();return false">
          Back To Posts
        </a>
      </p>
    </div>
  );
}
