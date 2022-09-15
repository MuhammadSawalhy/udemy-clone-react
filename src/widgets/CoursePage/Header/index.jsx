import { Link } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AddToCartSmallScreen from "./AddToCartSmallScreen";
import Details from "./Details";
import Preview from "../Preview";
import SideBarCard from "../SideBarCard";
import useIntersectionObserver from "@hooks/useIntersectionObserver";
import classes from "./index.module.css";
import clsx from "clsx";
import { useRef } from "react";

const ContextInfo = ({ context }) => {
  const { category, subcategory, label } = context;

  return (
    <div className={classes.context}>
      <Link to={category.url}>{category.title}</Link>
      <ChevronRightIcon fontSize="small" />
      {subcategory && (
        <>
          <Link to={subcategory.url}>{subcategory.title}</Link>
          <ChevronRightIcon fontSize="small" />
        </>
      )}
      <Link to={label.url}>{label.display_name}</Link>
    </div>
  );
};

const Header = ({ course }) => {
  const { details } = course;
  const ref = useRef();
  const isIntersecting = useIntersectionObserver(ref);

  return (
    <header ref={ref} className={classes.header}>
      <div>
        <ContextInfo context={details.context_info} />
        <Preview className={clsx(classes.preview, classes.smOnly)} image={details.image_750x422} />
        <Details className={classes.details} details={details} />
        <AddToCartSmallScreen className={clsx(classes.addToCart, classes.smOnly)} />
        <SideBarCard
          course={course}
          float={!isIntersecting}
          className={clsx(classes.sidebar, classes.lgOnly, !isIntersecting && classes.float)}
        />
      </div>
    </header>
  );
};

export default Header;
