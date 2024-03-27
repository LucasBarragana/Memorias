import "./Navbar.css";

// Components
import { NavLink, Link } from "react-router-dom";
import {
  BsSearch,
  BsHouseDoorFill,
  BsFillPersonFill,
  BsFillCameraFill,
} from "react-icons/bs";

// Hooks
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// Redux
import { logout, reset } from "../slices/authSlice";

const Navbar = () => {
  const { auth } = useAuth();
  const { user } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [query, setQuery] = useState("");

  const handleLogout = () => {
    dispatch(logout());
    dispatch(reset());

    navigate("/login");
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if (query) {
      return navigate(`/search?q=${query}`);
    }
  };

  return (
    <nav id="nav">
      <div className="logo">
        <img src="logo.png" alt="logo"/>
          <Link to="/">        
          <h2>Memórias</h2>
          </Link>
      </div>

      <ul id="nav-links">
        {auth ? (
          <>
          <div className="forms">
            <form id="search-form" onSubmit={handleSearch}>
              <BsSearch />
              <input
                type="text"
                placeholder="Pesquisar"
                onChange={(e) => setQuery(e.target.value)}
              />
            </form>
          </div>
          
            <li>
              <NavLink to="/">
                <BsHouseDoorFill />
              </NavLink>
            </li>
            {user && (
              <li>
                <NavLink to={`/users/${user._id}`}>
                  <BsFillCameraFill />
                </NavLink>
              </li>
            )}
            <li>
              <NavLink to="/profile">
                <BsFillPersonFill />
              </NavLink>
            </li>
            
            <li>
              <span onClick={handleLogout}>Sair</span>
            </li>
          </>
        ) : (
          <>
            {" "}
            <li>
              <NavLink to="/login"><span>Entrar</span></NavLink>
            </li>
            <li>
              <NavLink to="/register"><span>Cadastrar</span></NavLink>
            </li>
            <li>
              <NavLink to="/about"><span>Sobre o Projeto</span></NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
