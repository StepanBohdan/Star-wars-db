// import React from 'react';
// import ReactDOM from 'react-dom';


class SwapiService {
    _apiBase = 'https://swapi.co/api/';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res.json();
    }

    async getAllPeople() {
        return this.getResource(`people/`);
    }

    getPerson(id) {
        return this.getResource(`people/${id}/`);
    }

    async getAllPlanet() {
        return this.getResource(`planets/`);
    }

    getPlanet(id) {
        return this.getResource(`planets/${id}/`);
    }

    async getAllStarship() {
        return this.getResource(`starships/`);
    }

    getStarship(id) {
        return this.getResource(`starships/${id}/`);
    }
}

