import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";
import Posts from "./components/posts/posts.js";
import Home from "./components/home.js";
import Albums from "./components/albums/albums.js";
import { Photos } from "./components/photos/photos.js";
import Todos from "./components/todos/todos.js";

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Link to="/">
          <Navbar.Brand as="Link" to="/">
            JSONPlaceholder
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavItem href="/posts">
              <Nav.Link as={Link} to="/posts">
                Posts
              </Nav.Link>
            </NavItem>
            <NavItem href="/albums">
              <Nav.Link as={Link} to="/albums">
                Albums
              </Nav.Link>
            </NavItem>
            <NavItem href="/todos">
              <Nav.Link as={Link} to="/todos">
                Todos
              </Nav.Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/albums" component={Albums} />
        <Route exact path="/albums/:albumId" component={Photos} />
        <Route exact path="/todos" component={Todos} />
      </Switch>
    </div>
  );
}

export default App;
