import React, { Component } from 'react';
import marked from 'marked';

class MarkDownPreviewer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  getMarkdownText() {
    let rawMarkup = marked(this.props.textareaValue, {sanitize: true});
    return { __html: rawMarkup };
  }

  render(){
    
    return (
      <React.Fragment>
          <div className="previewer" dangerouslySetInnerHTML={this.getMarkdownText()} />
      </React.Fragment>
    );
  }
}

export default MarkDownPreviewer;