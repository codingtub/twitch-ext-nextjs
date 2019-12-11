import React, { Component } from 'react';

export default class Card extends Component {


  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Card">
        <div className={ 'Card__image-container' }>
          <img className="Card__image" src={ this.props.image }/>
        </div>
        <div className="Card__header">
          <h3 className="Card__subtitle">{ this.props.subtitle }</h3>
          <h2 className="Card__title">{ this.props.title }</h2>
        </div>
        <div className="Card__content">
          <p className="Card__text">{ this.props.content }</p>
        </div>
        <style jsx>{ `
          .Card {
            min-width: 200px;
            width: 225px;
            min-height: 300px;
            margin: 16px;
          
            background: #00051a;
            border-radius: 12px;
            -moz-border-radius: 12px;
            -webkit-border-radius: 12px;
            box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.1);
          
            transform-origin: center;
            transform: scale(1) translateZ(0);
            transition: filter 150ms linear, transform 150ms linear;
            -webkit-transition: filter 150ms linear, transform 150ms linear;
            -moz-transition: filter 150ms linear, transform 150ms linear;
          }
          
          .Card:hover {
            transform: scale(1.10) translateZ(0);
          }
          
          .Card__image-container {
            padding-top: 24px;
            display: flex;
            justify-content: center;
          }
          
          .Card__image {
            height: 45px;
            width: 45px;
          }
          
          .Card__header {
            padding: 16px;
            margin: 0;
          }
          
          .Card__title {
            font-size: 25px;
            color: #f0f0f0;
            font-weight: bold;
          }
          
          .Card__subtitle {
            font-size: 15px;
            color: #ACACAC;
          }
          
          .Card__content {
            padding: 16px;
          }
          
          .Card__text {
            color: #f0f0f0;
          }
        ` }
        </style>
      </div>
    );
  }
}

// <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
