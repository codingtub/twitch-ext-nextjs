import React, {Component} from 'react';

import './Card.scss';

export default class Card extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Card">
                <div className={'Card__image-container'}>
                    <img className="Card__image" src={this.props.image}/>
                </div>
                <div className="Card__header">
                    <h3 className="Card__subtitle">{this.props.subtitle}</h3>
                    <h2 className="Card__title">{this.props.title}</h2>
                </div>
                <div className="Card__content">
                    <p className="Card__text">{this.props.content}</p>
                </div>
            </div>
        );
    }
}

// <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/"             title="Flaticon">www.flaticon.com</a></div>
