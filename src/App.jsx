import React, { useEffect,useState } from 'react'
import Search from './components/Search.jsx'


const API_BASE_URL = 'https://api.themoviedb.org/3/'
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const API_OPTIONS={
    method:'GET',
    headers:{
      accept:'application/json',
      Authorization:`Bearer ${API_KEY}`
    }
  }

function App() {
  const[searchTerm, setSearchTerm] = useState("");
  const[errorMessage, setErrorMessage] =useState("")
  const[movielist,setMovieList]= useState([]);
  const fetchMovies= async ()=>{
    try{
      const endpoint=`${API_BASE_URL}/discover/movie?sort_by=popularity.desc`
      const response = await fetch('endpoint,API_OPTIONS');
     
      if(!response.ok){
        throw new Error('Failed to fetch movies')
              const data = await response.json();
      if (data.Response ==='False'){
        setErrorMessage(data.Error || 'Failed to fetch movies');
      }
      }
    }catch(error){
      console.log(`Error fetching movies :${error}`)
      setErrorMessage('Erro searching movies.Please Try Again Later.')
    }
  }
 
  useEffect(() =>{
      fetchMovies()
  },[]
  );

  
  return (
    <main>
       <div className="parttern"/>
       <div className='wrapper'>
        <img className='text-center w-100 h-100 ml-100'  src="./hero.png" alt="Hero Banner"/>
         <header>
          <h1>Find The <span className='text-gradient'>Movies</span> You'll Enjoy Without The Hussle</h1>
           <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
         <h1 className='text-white'>{searchTerm}</h1>
         </header>
        <section className='all-movies'>
          <h1>All Movies</h1>
          {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
        </section>
       </div>
    </main>
  ) 
 }

export default App