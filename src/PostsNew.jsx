export function PostsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    console.log("handleSubmit");
    props.onCreatePost(params);
  };
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" />
        </label>
        <div id="posts-body">
          <label>
            Body:
            <input type="text" name="body" />
          </label>
          <div id="posts-image">
            <label>
              Image:
              <input type="text" name="image"></input>
            </label>
          </div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
