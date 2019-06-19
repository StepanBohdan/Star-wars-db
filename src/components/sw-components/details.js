import React                   from 'react';
import ItemDetails, { Record } from '../item-details';
import SwapiService            from '../../services/swapi-service';

const swapiService = new SwapiService();

const {
    getPerson,
    getPlanet,
    getStarship,
    getPersonImage,
    getPlanetImage,
    getStarshipImage
} = swapiService;


const PersonDetails = ({ itemId }) => {
    return (
        <ItemDetails
            itemId={ itemId }
            getData={ getPerson }
            getImageUrl={ getPersonImage }>

            <Record field="gender" label="Gender:" />
            <Record field="eye_color" label="Eye Color:" />
        </ItemDetails>
    )
};
const PlanetDetails = () => {
    return (
        <ItemDetails
            itemId={5}
            getData={ getPlanet }
            getImageUrl={ getPlanetImage }>

            <Record field="population" label="Population:" />
            <Record field="rotation_period" label="Rotation Period:" />
            <Record field="diameter" label="Diameter:" />
        </ItemDetails>
    )
};
const StarshipDetails = () => {
    return (
        <ItemDetails
            itemId={5}
            getData={ getStarship }
            getImageUrl={ getStarshipImage }>

            <Record field="model" label="Model:" />
            <Record field="length" label="Length:" />
            <Record field="cost_in_credits" label="Cost:" />
        </ItemDetails>
    )
};

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
};
