import { useNavigate } from "react-router-dom";
import "./style.css";

const MainHeader = () => {
    const navigate = useNavigate();

    return (
        <div className="header">
            <h2 className="header__title">Dashboard</h2>
            <button
                onClick={() => navigate("/new-contact")}
                className="header__add"
            >
                <span>+</span>
            </button>
        </div>
    );
};

export default MainHeader;
