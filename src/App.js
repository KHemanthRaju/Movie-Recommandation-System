import React, { useState } from "react";
import "./styles.css";

const moviesDictionary = {
  Action: [
    { Movie: "Black Panther", Year: "2018" },
    { Movie: "Fast and Furious Six", Year: "2015" },
    { Movie: "Avengers End Game", Year: "2017" }
  ],
  Horror: [
    { Movie: "The Evil Dead", Year: "2000" },
    { Movie: "Sinister", Year: "2018" },
    { Movie: "Conjuring", Year: "1981" }
  ],
  Comedy: [
    { Movie: "Once Upon a Time In Hollywood", Year: "2019" },
    { Movie: "Zootopia", Year: "2016" },
    { Movie: "Monty Python and the Holy Grail", Year: "1975" }
  ],
  Romance: [
    { Movie: "It Happened One Night", Year: "1934" },
    { Movie: "The Shape of Water", Year: "2017" },
    { Movie: "Slumdog Millionaire", Year: "2008" }
  ],
  Thriller: [
    { Movie: "Don't Breathe", Year: "2016" },
    { Movie: "The Purge", Year: "2013" },
    { Movie: "Source Code", Year: "2011" }
  ]
};

var moviesWeKnow = Object.keys(moviesDictionary);

export default function App() {
  const [genreList, setGenreList] = useState("Action");

  function genreClickHandler(genreSelected) {
    setGenreList(genreSelected);
  }
  return (
    <div className="App">
      <h1>Movie Recommendation System</h1>
      <p>Listed here are some of my favourite movies in the Genre</p>
      <hr />
      {moviesWeKnow.map((genreSelected) => {
        return (
          <button onClick={() => genreClickHandler(genreSelected)}>
            {genreSelected}
          </button>
        );
      })}
      <ul>
        {moviesDictionary[genreList].map((genre) => {
          return (
            <li className="movieList" key={genre.Movie}>
              <div className="songDet">
                <span className="spanText">Movie - </span>
                {genre.Movie}
              </div>

              <div className="songDet">
                <span className="spanText">Year - </span>
                {genre.Year}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
