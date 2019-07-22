import React, { Component } from 'react';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render(){
    
    return (
          <textarea
            id="markdownEditor"
            value={this.props.textareaValue}
            placeholder="type something..... for markdown converter :)"
            onChange={(event) => this.props.handleOnChange(event.target.value)}
            cols="32" rows="35" className="textarea">
          </textarea>
      );
  }
}

export default Editor;