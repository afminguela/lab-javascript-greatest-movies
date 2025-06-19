

// Iteration 1: All directors? - Get the array of all directors.

//    STRUCTURE OF THE DATA Objects.  movies[i].clave
//     title: 'The Shawshank Redemption',
//     year: 1994,
//     director: 'Frank Darabont',
//     duration: '2h 22min',
//     genre: ['Crime', 'Drama'],
//     score: 9.3
//  



// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors =moviesArray.map(moviesArray => moviesArray.director)
    return allDirectors
}
   
console.log(getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

  return moviesArray.filter(
    movie =>
      movie.director === "Steven Spielberg" &&
      movie.genre.includes("Drama")
  ).length;
}
lo
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) return 0;
    const total = moviesArray.reduce((sum, movie) => sum + (movie.score || 0), 0);
  const media= total / moviesArray.length;

  return parseFloat(media.toFixed(2))
 

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

const dramas= moviesArray.filter(elemento => elemento.genre.includes("Drama"))

return scoresAverage(dramas)

}
console.log("iteration 5");

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const arraycopy= [...moviesArray]
const moviesOrdered = arraycopy.sort((a,b) => {
    a.year - b.year
})

return moviesOrdered
}




console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
