console.log('***** Music Collection *****')

collection = [];
function addToCollection(title, artists, yearPublished) {
    album = {
        title: title,
        artists: artists,
        yearPublished: yearPublished
    };
    collection.push(album)
    return album;
}