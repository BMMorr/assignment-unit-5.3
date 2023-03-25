console.log('***** Music Collection *****')

collection = [];
function addToCollection(title, artists, yearPublished) {
    album = {
        title: title,
        artists: artists,
        yearPublished: yearPublished
    };
    collection.push(album)
    return console.log(album);
}
addToCollection('Demon Days', 'Gorillaz', '2005');
addToCollection('Man On The Moon', 'Kid Cudi', '2009');
addToCollection('Mister Asylum', 'Highley Suspect', '2015');
addToCollection('-!-', 'Dead Poet Society', '2021');
addToCollection('USB', 'Fred Again..', '2022');
addToCollection('KIDS SEE GHOSTS', 'Kid Cudi', '2009');

console.log(collection);

function showCollection(array) {
    console.log('Number of items in the array ', array.length);
    for (let i = 0; i < array.length; i++) {
        console.log(`${array[i].title} by ${array[i].artists}, published in ${array[i].yearPublished}`);
        
    }
}
showCollection(collection);

function findByArtist(artist) {
    foundArtist = [];
    for (let i = 0; i < collection.length; i++) {
        if (collection[i].artists === artist) {
            foundArtist.push(collection[i])
        }
    } 
    return foundArtist; 
}
console.log(findByArtist('Kid Cudi'));
console.log(findByArtist('Fleetwood Mac'));
console.log(findByArtist('Gorillaz'));