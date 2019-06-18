import React, { Component } from 'react';

import Header         from '../header';
import RandomPlanet   from '../random-planet';
import ItemDetails    from '../item-details';
import { Record  }    from '../item-details';

import './app.css';
import SwapiService   from '../../services/swapi-service';
import ErrorBoundry   from '../error-boundry';
import Row            from '../row';

export default class App extends Component {
    swapiService = new SwapiService();

    state = {
        showRandomPlanet: true,
    };

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });
    };

    render() {

        const planet = this.state.showRandomPlanet ?
            <RandomPlanet /> : null;

        const { getPerson,
            getStarship,
            getPersonImage,
            getStarshipImage } = this.swapiService;

        const personDetails = (
            <ItemDetails
                itemId={11}
                getData={ getPerson }
                getImageUrl={ getPersonImage }>

                <Record field="gender" label="Gender:" />
                <Record field="eye_color" label="Eye Color:" />
            </ItemDetails>
        );

        const starshipDetails = (
            <ItemDetails
                itemId={5}
                getData={ getStarship }
                getImageUrl={ getStarshipImage }>

                <Record field="model" label="Model:" />
                <Record field="length" label="Length:" />
                <Record field="cost_in_credits" label="Cost:" />
            </ItemDetails>
        );

        return (
            <ErrorBoundry>
                <div className="stardb-app container">
                    <Header />

                    <Row
                        left={personDetails}
                        right={starshipDetails} />
                </div>
            </ErrorBoundry>

        );
    }
};
