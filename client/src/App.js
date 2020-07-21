//libraries
import React, { useState, useEffect } from 'react';
import axios from 'axios';

//components
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie'

//React Router imports
import { Switch, Link, Route} from 'react-router-dom'
const App = () => {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />
      
      <Switch>
        <Route path='/movies/:movieID'>
          <Movie />
        </Route>
        <Route path='/'>
          <MovieList movies={movieList}/>
        </Route>
      </Switch>
    </div>
  );
};

export default App;
