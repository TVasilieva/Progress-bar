import { FC } from "react";
import ProgressBar from "./ProgressBar";

const value = 3;

const App: FC = () => {
  return <ProgressBar value={value} />;
};

export default App;
