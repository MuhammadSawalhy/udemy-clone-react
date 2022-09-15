import classes from "./WhatYouWillLearn.module.css";
import CheckIcon from "@mui/icons-material/Check";

const WhatYouWillLearn = ({ objectives }) => {
  return (
    <div className={classes.objectives}>
      <h2>What you'll learn</h2>
      <ul>
        {objectives.map((obj) => {
          return (
            <li key={obj}>
              <span>
                <CheckIcon fontSize="small" />
              </span>
              <span>{obj}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WhatYouWillLearn;
