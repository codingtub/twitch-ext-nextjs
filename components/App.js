import React from 'react';
import Authentication from '../helpers/Authentication';
import Card from './Card';
import './App.scss';

export default class App extends React.Component {
    state = {
        finishedLoading: false,
        theme: 'dark',
        isVisible: true,
    };

    constructor(props) {
        super(props);
        this.Authentication = new Authentication();
    }

    contextUpdate(context, delta) {
        if (delta.includes('theme')) {
            this.setState(() => {
                return {theme: context.theme};
            });
        }
    }

    visibilityChanged(isVisible) {
        this.setState(() => {
            return {
                isVisible,
            };
        });
    }

    componentDidMount() {
        this.twitch = window.Twitch ? window.Twitch.ext : null;


        if (this.twitch) {
            this.twitch.onAuthorized(async auth => {
                this.Authentication.setToken(auth.token, auth.userId);

                if (!this.state.finishedLoading) {
                    // Do some init work...

                    this.setState({
                        finishedLoading: true,
                        cards: [
                            {
                                id: 0,
                                title: 'Make it rain!',
                                subtitle: 'Weather Condition',
                                content: 'Lorem ipsum dolor sit amet',
                                image: '/assets/icons/rain.svg',
                            },
                            {
                                id: 1,
                                title: 'Sunny side up!',
                                subtitle: 'Weather Condition',
                                content: 'Lorem ipsum dolor sit amet',
                                image: '/assets/icons/sun.svg',
                            },
                            {
                                id: 2,
                                title: 'Raise Temperature',
                                subtitle: 'Weather Condition',
                                content: 'Lorem ipsum dolor sit amet',
                                image: '/assets/icons/raise-temp.svg',
                            },
                            {
                                id: 3,
                                title: 'Lower Temperature',
                                subtitle: 'Weather Condition',
                                content: 'Lorem ipsum dolor sit amet',
                                image: '/assets/icons/lower-temp.svg',
                            },
                            {
                                id: 4,
                                title: 'Lower Temperature',
                                subtitle: 'Weather Condition',
                                content: 'Lorem ipsum dolor sit amet',
                                image: '/assets/icons/lower-temp.svg',
                            }
                        ],
                    });
                }
            });

            this.twitch.listen('broadcast', (target, contentType, body) => {
                console.debug(
                    `Message received for ${target} (${contentType}): ${body}`,
                );
                // Do some more work...
            });

            this.twitch.onVisibilityChanged((isVisible, _c) => {
                this.visibilityChanged(isVisible);
            });

            this.twitch.onContext((context, delta) => {
                this.contextUpdate(context, delta);
            });
        }
    }

    componentWillUnmount() {
        if (this.twitch) {
            this.twitch.unlisten('broadcast', () =>
                console.debug('Successfully unlistened'),
            );
        }
    }

    render() {
        if (this.state.finishedLoading && this.state.isVisible) {
            return (
                <div className="App">
                    <div className="Cards">
                        {this.renderCards()}
                    </div>
                </div>
            );
        } else {
            return <div className="App"></div>;
        }
    }

    renderCards() {
        return this.state.cards.map((card, index) => {
            return <Card key={card.id}
                         title={card.title}
                         subtitle={card.subtitle}
                         content={card.content}
                         image={card.image}
                        onClick={() => this.handleCardClick(card)}/>;
        });
    }

    handleCardClick(card) {
        this.twitch.rig.log('Clicked on card: ' + card);
        console.log('Clicked on card: ' + card);
    }
}
