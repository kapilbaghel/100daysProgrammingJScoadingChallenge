const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

getMovies(API_URL)

async function getMovies(url){
    const res = await fetch(url)
    const data = await res.json()
    showMovies(data.results)
}

function showMovies(movies){
    movies.forEach((movie)=>{
        const {title,poster_path,vote_average,overview} = movie
        const movieEl = document.createElement ('div');
        movieEl.innerHTML = (`document.createElement ('div')`)
        
    })
}
