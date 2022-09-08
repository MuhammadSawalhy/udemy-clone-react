import React from "react";
import clsx from "clsx";
import classes from "./Button.module.css";

const Button = ({ children, varient = "primary", icon = false, ...extra }) => {
  return (
    <button className={clsx(classes.button, classes[varient], icon && classes.icon)} {...extra}>
      {children}
    </button>
  );
};

export default Button;
