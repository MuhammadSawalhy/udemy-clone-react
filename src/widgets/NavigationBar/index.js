import React from "react";
import Button from "../../components/Button";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import NavSearch from "./NavSearch";
import { NavLink } from "react-router-dom";
import logoSrc from "./logo-udemy.svg";
import classes from "./NavigationBar.module.css";
import clsx from "clsx";

const NavigationBar = () => {
  return (
    <nav>
      <button className={clsx(classes.btn, classes.smOnly)}>
        <MenuIcon />
      </button>
      <div className={clsx(classes.placeholder, classes.smOnly)}></div>
      <div className={clsx(classes.logo, classes.sm)}>
        <NavLink to={process.env.ROOT_URL ?? "/"}>
          <img src={logoSrc} alt="udemy logo" />
        </NavLink>
      </div>
      <button className={clsx(classes.navLink)}>Categories</button>
      <NavSearch />
      <ul className={classes.links}>
        <li>
          <NavLink className={classes.navLink} to="/udemy-business">
            Udemy Business
          </NavLink>
        </li>
        <li>
          <NavLink className={classes.navLink} to="/teach-on-udemy">
            Teach on Udemy
          </NavLink>
        </li>
        <li>
          <NavLink className={clsx(classes.btn, classes.navLink)} to="/cart">
            <ShoppingCartOutlinedIcon />
          </NavLink>
        </li>
      </ul>
      <NavLink to="/login">
        <Button varient="secondary">Log in</Button>
      </NavLink>
      <NavLink to="/signup">
        <Button>Sign up</Button>
      </NavLink>
      <Button varient="secondary" icon>
        <LanguageIcon />
      </Button>
      <button className={clsx(classes.btn, classes.smOnly)}>
        <SearchIcon />
      </button>
      <NavLink className={clsx(classes.btn, classes.smOnly)} to="/cart">
        <ShoppingCartOutlinedIcon />
      </NavLink>
    </nav>
  );
};

export default NavigationBar;
