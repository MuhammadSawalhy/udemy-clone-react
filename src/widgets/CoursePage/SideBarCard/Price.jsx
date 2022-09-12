import clsx from "clsx";
import classes from "./Price.module.css";

const getPercent = ({ list_price, discount_price }) => {
  const discountAmount = list_price.amount - discount_price.amount;
  return Math.round((discountAmount / list_price.amount) * 100) + "%";
};

const Price = ({ price, className }) => {
  const { discount_price, list_price } = price;
  if (discount_price)
    return (
      <div className={clsx(classes.container, className)}>
        <span className={classes.price}>{discount_price.price_string}</span>
        <span className={classes.oldPrice}>{list_price.price_string}</span>
        <span className={classes.percent}>{getPercent(price)}</span>
      </div>
    );

  return (
    <div className={clsx(className)}>
      <span className={classes.price}>{list_price.price_string}</span>
    </div>
  );
};

export default Price;
