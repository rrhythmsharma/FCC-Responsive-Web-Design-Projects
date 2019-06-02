import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
     super(props)
     this.state = {
        quote: '',
        author: '',
        fade: false
     }
  }

  componentDidMount() {
     this.getQuote()
  }

  getQuote() {
    const colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
     fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
     .then(response => response.json())
        .then(res => {
           let data = res.quotes
           let quoteNum = Math.floor(Math.random() * data.length)
           let randomQuote = data[quoteNum]
           let randomColor = colors[Math.floor(Math.random() * colors.length)];
           document.documentElement.style.setProperty('--main-bg-color',`${randomColor}`);
           // let randomQuote = data[Math.floor(Math.random() * data.length)]
           this.setState({
              quote: randomQuote['quote'],
              author: randomQuote['author']
           })
        })
  }

  getNewQuote = () => {
     this.getQuote()
  }

  render() {
     const { quote, author, fade } = this.state
     return (
        <div id='wrapper'>
         {/* <h1 className='title'>Random Quote App</h1> */}

           <div id='quote-box'>
            <div id='text'><p
               onAnimationEnd={() => this.setState({fade: false})}
               className={fade ? 'fade' : ''}
            ><i className="fa fa-quote-left"></i> {quote}</p></div>

            <div id='author'><h5
               onAnimationEnd={() => this.setState({fade: false})}
               className={fade ? 'fade' : ''}
            >- {author}</h5></div>

              <div id='buttons'>
                  <a href={`https://twitter.com/intent/tweet?text= ${quote} ${author}`} target="blank" title="Post this quote on twitter!" id='tweet-quote'>
                     <i className="fa fa-twitter twitter-icon" />
                  </a>
                  <button 
                  onClick={() => {
                     this.getNewQuote()
                     this.setState({fade: true})
                  }} 
                  className='button' id='new-quote'>New Quote</button>
              </div>
           </div>
        </div>
     )
  }
}

export default App;
