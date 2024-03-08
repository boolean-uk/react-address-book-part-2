import PropTypes from "prop-types";

function Datapoint({ label, value }) {
  return (
    <div className="data-point">
      <p className="label">{label}</p>
      <p className="value">{value}</p>
    </div>
  );
}

Datapoint.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
};

export default Datapoint;
