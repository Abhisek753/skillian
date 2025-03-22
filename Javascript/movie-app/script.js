const API_URL="http://localhost:3000/movies"

async function fetchMovie() {
    let res=await fetch(API_URL);
    let movies=await res.json()
    displayMovies(movies)
};

function displayMovies(movies){
    let movieList=document.getElementById("movie-list");
    let movieCount=document.getElementById("movie-count");
    movieList.innerHTML="";
   
    movieCount.textContent=`Movies: ${movies.length}`
    movies.forEach(movie => {
        let movieCard=document.createElement("div");
        movieCard.classList.add("movie-card") ;
        movieCard.innerHTML=`
        <div class="movie-image-container">
         <img src="${movie.poster}" alt="${movie.title}">
        </div>
        <div class="movie-info">
         <h3>${movie.title}</h3>
         <p>Year: ${movie.year}</p>
         <p>Genre: ${movie.genre}</p>
         
        </div>
        <button >Delete</button>
        `;
        movieList.appendChild(movieCard);
    });

}
// Initial Fetch
fetchMovie()
// intersection observer