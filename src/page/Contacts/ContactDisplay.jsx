import { Route, Routes, Link } from 'react-router-dom';
import PropTypes from "prop-types"

function ContactDisplay({info, id}) {
  return (
    <div className='contact-display-item' >
      <span className='text-left'>
        {info.firstName + " " + info.lastName}
      </span>
      <span className='text-right'>
      <Link className='link-blue' to={`/contacts/${id}`}>
        View
      </Link>
      </span>
    </div>
  )
}

ContactDisplay.propTypes = { 
	info: PropTypes.object.isRequired,
}

export default ContactDisplay