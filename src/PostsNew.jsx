export function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form>
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
              <button>Choose File</button>
            </label>
          </div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
