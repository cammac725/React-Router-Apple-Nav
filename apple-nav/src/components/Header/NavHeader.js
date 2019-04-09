import React from 'react';
import { Link } from 'react-router-dom';

const NavHeader = props => {
  return (
    <div>
      <Link to={`${props.name}`}>
        {props.name}
      </Link>
    </div>
  )
}

export default NavHeader;