import { FC, useState } from "react";

//import "./style.scss";
import ComponentProps from "./types";

const ProgressBar: FC<ComponentProps> = ({ classes, value: maxValue }) => {
  const [value, setValue] = useState<number>(0);

  const progress = () => {
    if (value < maxValue) {
      setTimeout(() => {
        setValue(value + 0.1);
      }, 200);
    }
  };

  progress();

  return (
    <div className="container">
      <div
        style={{
          width: `${value * 150}px`,
          minWidth: "60px",
        }}
        className="progress"
      >
        {value !== 0 && `${Math.round((value * 100) / maxValue)} %`}
      </div>
    </div>
  );
};

export default ProgressBar;
