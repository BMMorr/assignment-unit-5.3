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
addToCollection('Demon Days', 'Gorrilaz', '2005');
addToCollection('Man On The Moon', 'Kid Cudi', '2009');
addToCollection('Mister Asylum', 'Highley Suspect', '2015');
addToCollection('-!-', 'Dead Poet Society', '2021');
addToCollection('USB', 'Fred Again..', '2022');
addToCollection('KIDS SEE GHOSTS', 'Kid Cudi', '2009');

console.log(collection);