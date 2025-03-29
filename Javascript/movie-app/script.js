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
        <button onClick="deleteMovie(${movie.id})" >Delete</button>
        `;
        movieList.appendChild(movieCard);
    });

}
// Initial Fetch
fetchMovie()
// intersection observer

async function deleteMovie(id){
     await fetch(`${API_URL}/${id}`,{
       method:"DELETE" 
    });
    
    fetchMovie()
}

async function sortMovies(){
    let sortBy=document.getElementById("sort").value;
    console.log(sortBy);
    let res=await fetch(API_URL);
    let movies=await res.json();
    if(sortBy=="asc"){
        movies.sort((a,b)=>a.year-b.year);
    }else if(sortBy==="desc"){
        movies.sort((a,b)=>b.year-a.year);

    }
   displayMovies(movies)
}
// Search movies

async function searchMovies() {
    let searchValue=document.getElementById("search").value.toLowerCase();
    // console.log(searchValue)
    let res=await fetch(API_URL);
    let movies=await res.json();
    let filterMovies=movies.filter(
        movie=>movie.title.toLowerCase().includes(searchValue)

    );
  displayMovies(filterMovies);
};

function showModal(){
    document.getElementById("movie-model").style.display="flex";
}
function hideModal(){
    document.getElementById("movie-model").style.display="none";

}

document.getElementById("movie-form").addEventListener("submit",async function(e){
    e.preventDefault();
    let newMovie={
        title:document.getElementById("movie-title").value,
        year:document.getElementById("movie-year").value,
        genre:document.getElementById("movie-genre").value,
        poster:document.getElementById("movie-poster").value,
        
    }
    let res=await fetch(API_URL,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(newMovie)
    })
    console.log(res)
    console.log(newMovie,"movie value 1111")
})