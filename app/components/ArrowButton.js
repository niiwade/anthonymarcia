import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Gallery/Gallery.module.scss";

const ArrowButton = ({ direction, onClick }) => {
  const icon = direction === "up" ? "arrow-up" : "arrow-down";

  return (
    <button onClick={onClick}>
      <FontAwesomeIcon icon={["fas", icon]} />
    </button>
  );
};

export default ArrowButton;
