import React, { Component } from 'react';

import ItemList       from '../item-list/item-list';
import PersonDetails  from '../person-details';
import ErrorIndicator from '../error-indicator';
import Row            from '../row';

import './people-page.css';
import SwapiService   from "../../services/swapi-service";

class ErrorBoundry extends Component {

    state = {
        hasError: false
    };

    componentDidCatch(error, info) {
        this.setState({
            hasError: true
        });
    }

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />
        }
        return this.props.children;
    }
}

export default class PeoplePage extends Component {
    swapiService = new SwapiService();

    state = {
        selectedPerson: 1
    };

    onPersonSelected = (selectedPerson) => {
        this.setState({ selectedPerson });
    };

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />
        }

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
            <PersonDetails personId={ this.state.selectedPerson }/>
        );

        return (
            <ErrorBoundry>
                <Row left={itemList} right={personDetails} />
            </ErrorBoundry>
        );
    }
}
