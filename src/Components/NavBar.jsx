import "../Styles/NavBar.css";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <nav>
      <div>
        <img src="icon.png" alt="" className="navbar-ico" />
      </div>
      <SearchBar />
      <div></div>
    </nav>
  );
};

export default NavBar;
