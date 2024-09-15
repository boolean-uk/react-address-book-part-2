import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();
  return (
    <img
      className="nav-button"
      src="https://uxwing.com/wp-content/themes/uxwing/download/arrow-direction/angle-circle-left-icon.png"
      onClick={() => navigate("../")}
    />
  );
}

export default BackButton;
