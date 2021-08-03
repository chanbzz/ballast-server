// write a function to retrieve a blob of json
// make an ajac request with fetch function


async function fetchAlbums() {
    const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums')
    const json = await res.json()
    
    console.log(json);

}