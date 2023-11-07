import "./style.css";

const MainHeader = () => {
    return (
        <div className="header">
            <h2 className="header__title">Dashboard</h2>
            <button className="header__add">
                <span>+</span>
            </button>
        </div>
    );
};

export default MainHeader;
