export function Header() {
  return (
    <header>
      <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ color: "darkred" }}>
            Bloggr
          </a>
          <button
            style={{ backgroundColor: "darkred" }}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" style={{ color: "darkred" }}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#recipes-index" style={{ color: "darkred" }}>
                  All Posts
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#recipes-new" style={{ color: "darkred" }}>
                  New Post
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
