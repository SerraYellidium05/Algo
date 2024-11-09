
/*in the above input filed we write to grab the input while user is writing andput it into the state onChange={ e=> setQuery(e.target.value )} in this 
on change is like when something changes in {} when somebody types something in () grab the event and setquery on based on user types and direct the value i.e  e.target.value to the query 

to get the info from the database we use const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`;
there is a query in the url comes from the const query which we gave. this url is used to get the information from the api database 
e.preventDefault(); -> when we click search button in default we get to refresh the page so it should not happen
    const result= await fetch(url);->we are fetching url http to send the request to get the api database
    we use async to prevent the errors
const data= await result.json(); -> it returns the objects of the search
input->usestate(query)->url(query)->fetch

{}-> this is something that we want to write code.



movies.filter(movie => movie.poster_path).map(movie =>
            <MovieInfo movie={movie } key={movie.id} />
 here we use filter to filter the movie array that if no path then we don't want it if there is a path the take it into the map function 
movieinfo is used to render each movie

*/



import React,{ useState } from 'react'


import { MovieInfo } from './MovieInfo';



const SearchMovie = () => {
  const[ query, setQuery]=useState(' ');// used in input and They allow components to keep track of changing data and re-render when that data changes.
  const[movies, setMovies]=useState([]);// stores the objects of movies in array 
  const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`;
  const getMovies= async(e)=>{
    try{
    e.preventDefault();
    const result= await fetch(url);
    const data= await result.json();
    setMovies(data.results);// these results are the ones in the given data of output when we search for a particular movie

    console.log("pranathi's first web development ",query,movies)
    }
    catch(error){
      console.log('fetch error',error.message)
    }
  }


return (
  <div id='content' className='section'> 
      <form  className='form-control' onSubmit={getMovies}>
         

          <label className='form-label'>Movie Name</label>
          <input className='form-input' type='text' name='query' required
            onChange={ e=> setQuery(e.target.value )}  /> 
                
          <button  className="form-button"  type='submit'>Search </button>
       
      </form>
      <div className='card-list'>
        { 
        movies.filter(movie => movie.poster_path).map(movie =>
          <MovieInfo movie={movie } key={movie.id} />
        )
        
        } 
        
      </div>

  </div>
)
}
export default SearchMovie
/*



import React, { useState } from 'react';

import MovieInfo from './MovieInfo'; 




const SearchMovie = () => {

    const [ query, setQuery ] = useState('');
    const [ movies, setMovies ] = useState( [] );


    const url = https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false;

    const getMovies = async ( e ) => {

        try {
            
            e.preventDefault();

            const result = await fetch( url ); 

            const data = await result.json(); 

            setMovies( data.results  );

            console.log('my states ', query, movies );

        } catch (error) {
            console.log('fetch error', error.message)
        }

    }

    return (

        <>
        <div  id='content' className='section'   >

            <form  className='form-control'  onSubmit={ getMovies }>

                <label className='form-label'>MOVIE NAME</label>
                <input className='form-input' type='text' name='query' required 
                       onChange={ e => setQuery( e.target.value )   } />
                <button className='form-button' type='submit'  >Search</button>

            </form>

          <div className='card-list'>


            { 

              movies.filter( movie => movie.poster_path ).map( movie => 
                <MovieInfo movie={ movie } key={ movie.id } />
                )
            
            }



          </div>


        </div>

        </>
    )
}
    */
/*
export default SearchMovie

{popularity: 27.488, vote_count: 2488, video: false, poster_path: "/vPG2zEKPXhovPW9S91SRnwr5JM1.j

*/