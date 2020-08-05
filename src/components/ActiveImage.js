import React, { Component } from 'react';

class ActiveImage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: window.innerWidth
    }
  }
  
  // Watch for changes in window size 
  componentDidMount() {
    window.addEventListener("resize", () => {
      this.setState({
        width: window.innerWidth
      });
    });
  }

  render() {
    const breakpoint = 480; 

    const previousBtn =
      <button 
        className={this.props.activeIdx === 0 ? 'navBtn disabled' : 'navBtn'} 
        onClick={() => this.props.navigate("previous", this.props.activeIdx)}
      >&#8249;</button>

    
    const nextBtn =
      <button 
        className={this.props.thumbnails && this.props.activeIdx === this.props.thumbnails.length - 1 ? 'navBtn disabled' : 'navBtn'} 
        onClick={() => this.props.navigate("next", this.props.activeIdx)}
      >&#8250;</button>

    // If on mobile device, display nav btns at the bottom; otherwise, display on the sides of the active img
    const displayPreviousBtn = this.state.width > breakpoint ? previousBtn : null;
    const displayNextBtn = this.state.width > breakpoint ? nextBtn : null;
    const navBtnsMobile = this.state.width <= breakpoint ? 
      (<>
        <div className="nav-btns-mobile">
          {previousBtn}
          {nextBtn}
        </div>
      </>) : null

    return (
      <div className="active-img-container">
        {displayPreviousBtn}
        <img 
          className="active-img" 
          src={this.props.thumbnails ? this.props.thumbnails[this.props.activeIdx] : null} 
          alt=' ' 
          width='500px' 
          height='400px'
        />
        {displayNextBtn}
        {navBtnsMobile}
      </div>
    )
  }
}

export default ActiveImage;