import React from 'react';

const Thumbnails = props => {
  const thumbnails = props.thumbnails && props.thumbnails.length ? props.thumbnails.map((url, idx) => (
    <img 
      className='image' 
      key={idx} 
      src={url} 
      alt=''
      onClick={() => props.onClick(idx)}
      onError={props.handleBrokenLink}
    />
  )) : null;
  
  return (
    <div className='gallery-grid'>
      { thumbnails }
    </div>
  )
}

export default Thumbnails;