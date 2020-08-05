import React, { Component } from 'react';

import Thumbnails from './Thumbnails';
import ActiveImage from './ActiveImage';

class GalleryContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeIdx: null
    }
  }
  
  onClick = idx => {
    this.setState({
     activeIdx: idx
   })
 }

 // Changes active img based on the direction & idx
 navigate = (direction, idx) => {
  let newIdx;

  switch (direction) {
    case "previous":
      newIdx = idx === 0 ? this.props.thumbnails.length - 1 : this.state.activeIdx - 1;
      break;
    case "next":
      newIdx = idx === this.props.thumbnails.length - 1 ? 0 : this.state.activeIdx + 1;
      break;
    default:
      break;
  }

  this.setState({
    activeIdx: newIdx
  })
}

  render() {
    return (
      <div>
        <Thumbnails 
          thumbnails={this.props.thumbnails}
          onClick={this.onClick}
          handleBrokenLink={this.props.handleBrokenLink}
        />
        { 
          this.state.activeIdx !== null ? 
          <ActiveImage 
            activeIdx={this.state.activeIdx} 
            thumbnails={this.props.thumbnails}
            navigate={this.navigate}
          /> : 
          null
        }
      </div>
    )
  }
}

export default GalleryContainer;