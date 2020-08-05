import React, { Component } from 'react';
import './App.css';

import NavBar from './components/NavBar';
import GalleryContainer from './components/GalleryContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      imageURL: '',
      thumbnails: [
        // MOCK DATA
        // 'https://picsum.photos/id/454/4403/2476',
        // 'https://picsum.photos/id/404/3264/2176',
        // 'https://picsum.photos/id/1062/5092/3395',
        // 'https://picsum.photos/id/787/5472/3648',
        // 'https://picsum.photos/id/25/5616/3744',
        // 'https://picsum.photos/id/1044/4032/2268',
        // 'https://picsum.photos/id/1053/3596/2393',
        // 'https://picsum.photos/id/108/2000/1333',
        // 'https://picsum.photos/id/152/3888/2592',
        // 'https://picsum.photos/id/244/4288/2848',
        // 'https://picsum.photos/id/305/4928/3264',
        // 'https://picsum.photos/id/365/5616/3744'
      ],
      uploadFailed: false
    };
  }

  onChange = e => {
    this.setState({
      imageURL: e.target.value
    })
  }

  // Add image URL to local storage
  handleSubmit = imageURL => {
    const images = this.state.thumbnails;
    images.push(imageURL)

    this.setState({
      imageURL: '',
      thumbnails: images,
      uploadFailed: false
    })
  }

  // Remove broken link from local storage
  handleBrokenLink = () => {
    const thumbnails = this.state.thumbnails;
    thumbnails.pop();
    
    this.setState({
      thumbnails,
      uploadFailed: true
    })
  }

  render() {
    return (
      <div className='container'>
        <NavBar 
          imageURL={this.state.imageURL}
          onChange={this.onChange}
          handleSubmit={this.handleSubmit}
          uploadFailed={this.state.uploadFailed}
        />
        {
          this.state.thumbnails.length !== 0 ? 
          (
            <GalleryContainer 
              thumbnails={this.state.thumbnails}
              handleBrokenLink={this.handleBrokenLink}
            /> 
          ) :
          (
            <div className='greeting'>
              <h2>Welcome to your Image Gallery</h2>
              <h4>Upload your image URLs to begin</h4>    
            </div>
          )
        }
        
      </div>
    )
  }
}

export default App;