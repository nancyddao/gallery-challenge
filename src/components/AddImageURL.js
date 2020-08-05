import React from 'react';

const AddImageURL = props => {
  return (
    <div className="add-img-container">
      <input 
        className="add-img-textbox"
        placeholder="Enter image URL"
        type='text' 
        value={props.imageURL} 
        onChange={e => props.onChange(e)}
      />
      <button 
        className="add-btn" 
        data-testid="add-img-button"
        type='submit'
        onClick={() => props.handleSubmit(props.imageURL)}
      >&#43; ADD IMAGE</button>
      { props.uploadFailed ? <p className="error-msg">Upload failed, please enter a valid URL</p> : null }
    </div>
  )
}

export default AddImageURL;