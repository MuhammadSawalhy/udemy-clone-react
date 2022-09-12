import classes from "./index.module.css";
import Button from "@components/Button";
import Includes from "./Includes";
import Price from "./Price";
import Preview from "../Preview";
import clsx from "clsx";

const SideBarCard = ({ course, className }) => {
  console.log(course);
  const {
    details: { price, image_750x422 },
  } = course;

  return (
    <div className={clsx(classes.container, className)}>
      <Preview image={image_750x422} />
      <div className={classes.details}>
        <Price className="mb-2" price={price} />
        <Button className="d-block mb-3 w-100" size="large" varient="florish">
          Add to cart
        </Button>
        <Button className="d-block w-100" size="large" varient="secondary">
          Buy now
        </Button>
        <span className={classes.moneyGuarantee}>30-Day Money-Back Guarantee</span>
        <Includes course={course} />
      </div>
    </div>
  );
};

export default SideBarCard;
