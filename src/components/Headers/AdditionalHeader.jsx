import { useNavigate } from "react-router-dom";

import arrowBack from "../../assets/images/arrow-back.png";

// styles
import "./style.css";

const AdditionalHeader = () => {
    const navigate = useNavigate();

    return (
        <div className="header">
            <button className="header__back" onClick={() => navigate(-1)}>
                <img src={arrowBack} />
            </button>
        </div>
    );
};

export default AdditionalHeader;
