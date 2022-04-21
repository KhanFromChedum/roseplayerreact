class RadioBrowser{
    static offset=0;
    static limit=50;
    static type='';
    static SearchVar='';


    IsLastSearch(searchNature, searchTerm)
    {
        return searchNature === RadioBrowser.type && searchTerm === RadioBrowser.SearchVar; 
    }

    configureSearch(searchNature, searchTerm)
    {
        RadioBrowser.offset = 0;
        RadioBrowser.type = searchNature;
        RadioBrowser.SearchVar = searchTerm;
    }

    static async GetTags()  {
        const response = await fetch('https://nl1.api.radio-browser.info/json/tags', {
            method: 'GET',
            headers: {
                accept: 'application/json'
            },
        });
        if (!response.ok) {
            throw 'Error on retreive data from server';
        }
        return await response.json();
    }

    async ByTags(tag) {
        this.limit = 50;
        let link = 'https://nl1.api.radio-browser.info/json/stations/bytagexact/' + tag + "?offset=" + RadioBrowser.offset + "&limit=" + RadioBrowser.limit;
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
    }

    async Search(name) {
        this.limit = 50;
        let link = 'https://nl1.api.radio-browser.info/json/stations/search?name=' + name + "&offset=" + RadioBrowser.offset + "&limit=" + RadioBrowser.limit;
        console.log(link);
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
    }

    async Next()
    {
        let json = [];
        switch (RadioBrowser.type)
        {
            case 'tags':
                json = await this.ByTags(RadioBrowser.SearchVar);
                break;
            case 'search':
                json = await this.Search(RadioBrowser.SearchVar);
                break;             
            default:
                json = [];
                break;
        }
        RadioBrowser.offset = RadioBrowser.limit + RadioBrowser.offset;
        return json;
        
    }   
}


export default RadioBrowser;






// var RadioBrowser =
// {
//     offset : 0,
//     limit: 50,
//     type: '',
//     search: '',

//     configureSearch: (searchNature, searchTerm)=>
//     {
//         RadioBrowser.offset = 0;
//         RadioBrowser.type = searchNature;
//         RadioBrowser.search = searchTerm;
//     },

//     GetTags: async () => {
//         const response = await fetch('https://nl1.api.radio-browser.info/json/tags', {
//             method: 'GET',
//             headers: {
//                 accept: 'application/json'
//             },
//         });
//         if (!response.ok) {
//             throw 'Error on retreive data from server';
//         }
//         return await response.json();
//     },

//     ByTags: async (tag) => {
//         RadioBrowser.offset = 0;
//         let link = 'https://nl1.api.radio-browser.info/json/stations/bytagexact/' + tag + "?offset=" + RadioBrowser.offset + "&limit=" + RadioBrowser.limit;
//         const response = await fetch(link, {
//             method: 'GET',
//             headers: {
//                 accept: 'application/json'
//             },
//         });

//         if (!response.ok) {
//             throw 'Error on retreive data from server';
//         }
//         return await response.json();
//     },
//     Search: async (name) => {
        
//         let link = 'https://nl1.api.radio-browser.info/json/stations/search?name=' + name + "&offset=" + RadioBrowser.offset + "&limit=" + RadioBrowser.limit;;
//         const response = await fetch(link, {
//             method: 'GET',
//             headers: {
//                 accept: 'application/json'
//             },
//         });

//         if (!response.ok) {
//             throw 'Error on retreive data from server';
//         }
//         return await response.json();
//     },
//     Next :async()=>
//     {
//         let json = [];
//         RadioBrowser.offset = RadioBrowser.limit + RadioBrowser.offset;
//         console.log(RadioBrowser.type);
//         switch (RadioBrowser.type)
//         {
//             case 'byTags':
//                 json = await RadioBrowser.ByTags(RadioBrowser.search);
//                 break;
//             case 'search':
//                 json = await RadioBrowser.Search(RadioBrowser.search);
//                 break;             
//             default:
//                 json = [];
//                 break;
//         }
//         return json;
//     }
//     //http://nl1.api.radio-browser.info/json/url/stationuuid

// }