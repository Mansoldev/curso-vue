const API = axios.create({
    baseURL: 'https://ws.audioscrobbler.com/2.0'
});
let parametros = '?api_key=101a4b6e09edbfb5ebefa9cc95b7c154&format=json&method=';

//EXAMPLE
/*API.get('/' + parametros + 'tag.getTopTags')
    .then(function (response) { console.log(response); })
    .catch(function (error) { console.log(error); });
*/