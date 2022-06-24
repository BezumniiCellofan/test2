const numberOfFilm = +prompt("сколько фильмов вы уже посмотрели?",'');
const personalMovieDb = {
    count: numberOfFilm,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt ('Один из последних просмотренных фильмов', '');
const b = prompt ('на сколько оцените его', '');
const c = prompt ('Один из последних просмотренных фильмов', '');
const d = prompt ('на сколько оцените его', '');

personalMovieDb.movies [a] = b;
personalMovieDb.movies [c] = d;

console.log(personalMovieDb);