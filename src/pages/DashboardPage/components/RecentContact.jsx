import { Link } from "react-router-dom";

export default function RecentContact() {
  return (
    <div className="dashboard__recent__contact__container">
      <Link to="/" className="dashboard__recent__contact">
        <div className="contact__list__item__icon__container">
          <div className="contact__list__item__icon"></div>
          <div className="center-text">Last Viewed</div>
        </div>
        <div className="dashboard__recent__contact__details">
          <div className="center-text">I need last viewed state</div>
          <div className="center-text">from contact-page to work :)</div>
        </div>
      </Link>
    </div>
  );
}
