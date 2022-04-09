var RadioBrowser =
{
    GetTags: async () => {
        const response = await fetch('https://de1.api.radio-browser.info/json/tags', {
            method: 'GET',
            headers: {
                accept: 'application/json'
            },
        });

        if (!response.ok) {
            throw 'Error on retreive data from server';
        }
        return await response.json();
    },

    GetStations: async (tag) => {
        let link = 'https://de1.api.radio-browser.info/json/stations/bytagexact/' + tag;
        const response = await fetch(link, {
            method: 'GET',
            headers: {
                accept: 'application/json'
            },
        });

        if (!response.ok) {
            throw 'Error on retreive data from server';
        }
        return await response.json();
    },
    Search: async (name) => {
        let link = 'https://de1.api.radio-browser.info/json/stations/search?name=' + name;
        const response = await fetch(link, {
            method: 'GET',
            headers: {
                accept: 'application/json'
            },
        });

        if (!response.ok) {
            throw 'Error on retreive data from server';
        }
        return await response.json();
    },

}

export default RadioBrowser;