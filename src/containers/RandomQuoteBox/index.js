import React from 'react';
import { connect } from 'react-redux';
import './style.css';
import quotes from './quotes.json';
const colors = ['#fe4a49', '#2ab7ca', '#f37736', '#0392cf'];

class RandomQuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: ''
    }
  }
  componentDidMount() {
    this.setState({ color: this.getRandomColor() })
    this.props.dispatch({ type: 'NEW_QUOTE', newQuote: this.getRandomQuote() });
  };
  
  handleChangeQuote = () => {
    const newQuote = this.getRandomQuote();
    this.setState({ color: this.getRandomColor() })
    this.props.dispatch({ type: 'NEW_QUOTE', newQuote })
  };

  getRandomQuote = () => {
    return quotes[Math.floor(Math.random() * quotes.length)]
  };
  getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)]
  };

  render() {
    const color = {
      'color': this.state.color,
      'background-color': this.state.color,
      'opacity': 0.8,
      'transition': '1s'
    };

    return (
      <div className='wrapper' style={color}>
        <div id='quote-box'>
          <p id='text'>"{this.props.quote.content}"</p>
          <p id='author'> - {this.props.quote.author} - </p>
          <div className='button-container'>
            <a id='tweet-quote' href='twitter.com/intent/tweet'>Tweet</a>
            <div id='new-quote' onClick={this.handleChangeQuote}>New quote</div>
          </div>
        </div>
      </div>
    );
  };
};
const mapStateToProps = (state) => {
  return {
    quote: state.randomQuote
  }
};

export default connect(mapStateToProps)(RandomQuoteBox);