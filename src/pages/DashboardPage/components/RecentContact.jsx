import { Link } from "react-router-dom";

export default function RecentContact({lastContactDetails}) {
  if (!lastContactDetails) {return}

  return (
      <div className="dashboard__recent__contact__container">
        <Link to={`/contact-page/${lastContactDetails.id}`} className="dashboard__recent__contact">
          <div className="contact__list__item__icon__container">
            <div className="contact__list__item__icon"></div>
            <div className="center-text">Last Viewed</div>
          </div>
          <div className="dashboard__recent__contact__details">
            <div className="center-text">{lastContactDetails.firstName} {lastContactDetails.lastName}</div>
            <div className="center-text">{lastContactDetails.jobTitle}</div>
          </div>
        </Link>
      </div>
  );
}
