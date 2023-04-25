import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/" style={{ color: "darkred" }} to="/">
            Bloggr
          </Link>
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
                <Link className="nav-link active" aria-current="page" href="#" style={{ color: "darkred" }} to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  href="/posts"
                  style={{ color: "darkred" }}
                  to="/posts"
                >
                  Posts
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  href="/posts/new"
                  style={{ color: "darkred" }}
                  to="/posts/new"
                >
                  New Post
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                  style={{ color: "darkred" }}
                  to="/signup"
                >
                  Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="#" style={{ color: "darkred" }} to="/login">
                  Sign In
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
