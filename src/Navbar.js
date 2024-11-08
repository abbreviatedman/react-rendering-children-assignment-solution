import "./Navbar.css";

function Navbar(props) {
  return (
    <nav className="navbar">
      <h1>Star Wars Data App</h1>
      <div className="links">
        {props.children}
      </div>
    </nav>
  )
}

export default Navbar;
