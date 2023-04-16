function Header() {
  return (
    <div>
      <header>
        <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
      </header>
    </div>
  );
}

function PostsNew() {
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

function PostsIndex(props) {
  console.log(props);
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      {props.posts.map((post) => (
        <div key={post.id} className="posts">
          <h2>{post.title}</h2>
          <img src={post.image} />
          <p>{post.body}</p>
          <button>More Info!</button>
        </div>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>Copyright 2023</p>
    </footer>
  );
}

function Content() {
  let posts = [
    {
      id: 1,
      title: "Cheese!",
      body: "Assorted cheeses that you will find most delightful",
      image: "cheese-fruits-18359800.jpg",
    },
    {
      id: 2,
      title: "Zombies!",
      body: "Brainnnnnsssssssss",
      image: "zombies.webp",
    },
    {
      id: 3,
      title: "Kitties!",
      body: "Adorable cats sleeping peacefully",
      image: "kitties.jpeg",
    },
  ];

  return (
    <div>
      <PostsNew />
      <PostsIndex posts={posts} />
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
