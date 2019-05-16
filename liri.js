require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require("node-spotify-api")
var Spotify = new Spotify(keys.spotify);
var axios = require('axios')
var response = process.argv[2];
var input = process.argv.slice(3);

users(response, input)

function users(response, input) {
switch (response) {
    case 'spotify-this-song':
        songChoice(input);
        break;
    case 'movie-this':
        movieChoice(input);
        break;
    case "do-what-it-says":
        doWhat();
        break;
    default:
        console.log("err")
}}
//**********************/
//DO WHAT IT SAYS
//**********************/
function doWhat() {
    fs.readFile("everything.txt", "utf8", function (error, data) {
        if (!error);
        console.log(data.toString());
    });
}
mySwitch(response);
//**********************/
//SPOTIFY
//**********************/
function songChoice(input){
    if (input) {
        input = "space cowboy remix"
    } else
spotify.search({
        type: "track",
        query: response
    },
    function (err, data) {
        if(err) {
            console.log("Error" + err);
            return;
        }
        let song = data.tracks.items;
        for (const i = 0; i < sessionStorage.length; i++) {
            console.log(i);
            console.log("------------------------------------");
            console.log("artist(s): " + song[i].artists);
            console.log("song name: " + song[i].name);
            console.log("album: " + song[i].album.name);
            console.log("-----------------------------------");
        }

    }
})
//**********************/
//mMovie
//**********************/
function movie() {
    const movie = input;
    axios.get(`http://www.omdbapi.com/?t=${movie.join('')}&y=&plot=short&tomatoes=true&apikey=9d90bd1f`)
    .then(({ data: { Title, Released, Plot, Ratings: [, { Value }], imdbRating, Actors } }) => 
    console.log(`
    **********************************
    Title: ${Title}
    Release Year: ${Released}
    Plot: ${Plot}
    RATING: ${imdbRating}
    Rotten Tomatoes: ${Value}
    Actors: ${Actors}
    **********************************
    `))
    .catch(e => console.log(e, "Invalid Title"))
}
