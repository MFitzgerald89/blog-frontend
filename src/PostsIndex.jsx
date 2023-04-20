export function PostsIndex(props) {
  console.log(props);
  return (
    <div id="posts-index">
      <h1>All Posts</h1>
      <div className="row">
        {props.posts.map((post) => (
          <div key={post.id} className="posts col mb-3">
            <div className="card">
              <img src={post.image_url} className="card-img-top" />
              <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p className="card-text">{post.chef}</p>
                <button className="btn btn-primary" onClick={() => props.onShowpost(post)}>
                  More Info!
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
