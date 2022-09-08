import React from "react";
import Button from "../../components/Button";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
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
        <a href={process.env.ROOT_URL ?? "/"}>
          <img src="./assets/logo-udemy.svg" alt="udemy logo" />
        </a>
      </div>
      <button className={clsx(classes.navLink)}>Categories</button>
      <form className={classes.search}>
        <button>
          <SearchIcon />
        </button>
        <input type="text" autoComplete="off" name="query" placeholder="Search for anything" />
      </form>
      <ul className={classes.links}>
        <li>
          <a className={classes.navLink} href="/udemy-business">
            Udemy Business
          </a>
        </li>
        <li>
          <a className={classes.navLink} href="/teach-on-udemy">
            Teach on Udemy
          </a>
        </li>
        <li>
          <a className={clsx(classes.btn, classes.navLink)} href="/cart">
            <ShoppingCartOutlinedIcon />
          </a>
        </li>
      </ul>
      <a href="/login">
        <Button varient="secondary">Log in</Button>
      </a>
      <a href="/signup">
        <Button>Sign up</Button>
      </a>
      <Button varient="secondary" icon>
        <LanguageIcon />
      </Button>
      <button className={clsx(classes.btn, classes.smOnly)}>
        <SearchIcon />
      </button>
      <a className={clsx(classes.btn, classes.smOnly)} href="/cart">
        <ShoppingCartOutlinedIcon />
      </a>
    </nav>
  );
};

export default NavigationBar;
