import React, { Component } from 'react';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render(){
    
    return (
      <React.Fragment>
          <p>Editor</p>
          <textarea name="" id="" cols="36" rows="10" className="textarea">
          </textarea>
      </React.Fragment>
    );
  }
}

export default Editor;