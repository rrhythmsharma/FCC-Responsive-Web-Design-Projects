import React, { Component } from 'react';
import Editor from './Components/Editor';
import MarkDownPreviewer from './Components/Markdownpreviewer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render(){
    
    return (
      <div className="main-container">
        <h3>Markdown Live Preview</h3>
        <div className="markdown-editor">
          <div className="editor">
            <Editor />
          </div>
          <div className="markdownpreviewer">
            <MarkDownPreviewer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
