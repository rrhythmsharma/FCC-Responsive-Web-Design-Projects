import React, { Component } from 'react';
import Editor from './Components/Editor';
import MarkDownPreviewer from './Components/Markdownpreviewer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textareaValue:''
    }
  }

  handleOnChange = (value) => {
    this.setState({
      textareaValue: value
    })
  }

  render(){

    return (
      <div className="main-container">
        <div className="heading">
          <a className="fork-me-ribbons" href="https://github.com/rrhythmsharma/freeCodeCamp-all-projects"><img width="149" height="149" src="https://github.blog/wp-content/uploads/2008/12/forkme_left_red_aa0000.png?resize=149%2C149" class="attachment-full size-full" alt="Fork me on GitHub" data-recalc-dims="1" /></a>
          <h2>Markdown Live Preview - convert to MarkDown</h2>
        </div>
        <div className="markdown-editor">
          <div className="editor">
            <Editor textareaValue={this.state.textareaValue} handleOnChange={this.handleOnChange}/>
          </div>
          <div className="markdownpreviewer">
            <MarkDownPreviewer textareaValue={this.state.textareaValue}  />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
