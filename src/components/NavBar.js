import React from 'react';

import Header from './Header';
import AddImageURL from './AddImageURL';

const NavBar = props => {
  return (
    <div className='navbar'>
      <Header />
      <AddImageURL 
        imageURL={props.imageURL}
        onChange={props.onChange}
        handleSubmit={props.handleSubmit}
        uploadFailed={props.uploadFailed}
      />
    </div>
  )
}

export default NavBar;