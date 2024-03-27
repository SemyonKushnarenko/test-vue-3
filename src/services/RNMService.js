export default class RNMService {
    _baseUrl = 'https://rickandmortyapi.com/api/character/';

    getCharacters(page = 1, name = '', status = '') {
        return fetch(`${this._baseUrl}?page=${page}&name=${name}&status=${status}`)
            .then(res => res.json());
    }
}