import { CircularProgress } from "@mui/material";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <h2>Loading</h2>
      <CircularProgress className="loader" />
    </div>
  );
};

export default Loader;
