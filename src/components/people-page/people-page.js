import React, { Component } from 'react';

import ItemList       from '../item-list/item-list';
import ItemDetails    from '../item-details';
import ErrorIndicator from '../error-indicator';
import Row            from '../row';

import './people-page.css';
import SwapiService   from '../../services/swapi-service';
import ErrorBoundry   from '../error-boundry';

export default class PeoplePage extends Component {
    swapiService = new SwapiService();

    state = {
        selectedPerson: 1
    };

    onPersonSelected = (selectedPerson) => {
        this.setState({ selectedPerson });
    };

    render() {

        const itemList = (
            <ItemList onItemSelected={this.onPersonSelected}
                      getData={this.swapiService.getAllPeople}
                      renderItem={({name, gender, birth_year}) =>
                          `${name} (${gender}, ${birth_year})`} />

        // {(i) => (
        //     `${i.name} (${i.birth_year})`
        // )}
        );

        const personDetails = (
            <ItemDetails itemId={ this.state.selectedPerson }/>
        );

        return (
            <ErrorBoundry>
                <Row left={itemList} right={personDetails} />
            </ErrorBoundry>
        );
    }
}
