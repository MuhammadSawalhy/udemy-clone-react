import classes from "./NavigationBar.module.css";
import SearchIcon from "@mui/icons-material/Search";

const NavSearch = () => {
  return (
    <form className={classes.search}>
      <button>
        <SearchIcon />
      </button>
      <input type="text" autoComplete="off" name="query" placeholder="Search for anything" />
    </form>
  );
};

export default NavSearch;
