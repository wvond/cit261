import { getJSON } from '../quakes/script/utilities.js';
import { key } from './keys.js';

const baseUrl = 'https://api.nal.usda.gov/fdc/v1/';

async function searchFoods(url, query) {
    url = url + '?api_key=' + key;
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            generalSearchInput: query,
            includeDataTypes: {
                "Survey (FNDDS)": true,
                Foundation: true,
                Branded: false
            },
            requiredAllWords: "true"
        })
    };
    return await getJSON(url, options);
}

console.log(searchFoods(baseUrl + "search", "apple"));