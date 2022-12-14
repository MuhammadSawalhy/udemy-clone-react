import React from "react";
import clsx from "clsx";
import classes from "./Button.module.css";

const Button = ({ children, varient = "primary", icon = false, ...extra }) => {
  return (
    <button
      {...extra}
      className={clsx(classes.button, classes[varient], icon && classes.icon, extra?.className)}
    >
      {children}
    </button>
  );
};

export default Button;
