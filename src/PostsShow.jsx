export function PostsShow(props) {
  return (
    <div>
      <h2>Name: {props.post.title}</h2>
      <p>Description: {props.post.description}</p>
      <p>Price: {props.post.price}</p>
    </div>
  );
}
