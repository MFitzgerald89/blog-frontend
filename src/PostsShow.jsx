import axios from "axios";

export function PostsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios.patch(`http://localhost:3000/posts/${props.post.id}.json`, params).then((response) => {
      console.log(response.data);
      event.target.reset();
    });
  };
  return (
    <div>
      <h2>{props.post.title}</h2>
      <p>Body: {props.post.body}</p>
      <p>Image: {props.post.image}</p>

      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input defaultValue={props.post.title} type="text" name="title" />
        </label>
        <div id="posts-body">
          <label>
            Body:
            <input defaultValue={props.post.body} type="text" name="body" />
          </label>
          <div id="posts-image">
            <label>
              Image:
              <input defaultValue={props.post.image} type="text" name="image"></input>
            </label>
          </div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
