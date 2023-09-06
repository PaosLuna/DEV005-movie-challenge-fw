import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div>
        <Link to="/">HOME</Link>
        <Link to="/estrenos">ESTRENOS</Link>
        <Link to="/top">TOP 10</Link>
      </div>
    </div>
  );
};

export default Navbar;
