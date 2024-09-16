import React from 'react'
import { Link } from 'react-router-dom';

function Menu() {
    function handleMenuItemClick(buttonType){
        switch(buttonType) {
            case 'Home':
                break
            case 'About':
                break
            default:
                break
        }
    }
    
  return (
    <div className="side-panel">
      <Link className="link" to="/contacts">
        <div className="menu-item" onClick={() => handleMenuItemClick('Home')}>
          Contact List
        </div>
      </Link>
      <Link className="link" to="/contacts/form">
        <div className="menu-item" onClick={() => handleMenuItemClick('About')}>
          Add New Contact
        </div>
      </Link>
    </div>
  )
}

export default Menu