import React, { useEffect,useState } from 'react'
import Search from './components/Search.jsx'


 const API_BASE_URL='https://www.themoviedb.org/settings/api'
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
  const fetchMovies= async ()=>{
    try{

    }catch(error){
      console.log(`Error fetching Movies :${error}`)
      setErrorMessage('Error fetching Movies.Please try again later.')
    }
  }
  }
  useEffect(() =>{

  },deps:[]

  );

  }
  return (
    <main>
       <div className="partern"/>
       <div className='wrapper'>
        <img src="./hero.png" alt="Hero Banner"/>
         <header>
          <h1>Find The <span className='text-gradient'>Movies</span> You'll Enjoy Without The Hussle</h1>
         </header>
         <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
         <h1 className='text-white'>{searchTerm}</h1>
       </div>
    </main>
  )
}

export default App