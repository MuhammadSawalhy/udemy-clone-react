import SearchIcon from "@mui/icons-material/Search";
import classes from "./NavSearch.module.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const NavSearch = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const { query: urlQuery } = useParams();
  console.log(urlQuery);
  useEffect(() => {
    setQuery(urlQuery || "");
  }, [urlQuery]);

  return (
    <form
      className={classes.search}
      onSubmit={(e) => {
        e.preventDefault();
        navigate(`/search/${query}`);
      }}
    >
      <button>
        <SearchIcon />
      </button>
      <input
        type="text"
        name="query"
        value={query}
        autoComplete="off"
        placeholder="Search for anything"
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
};

export default NavSearch;
