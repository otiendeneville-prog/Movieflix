import React, { useEffect,useState } from 'react'
import Search from './components/Search.jsx'

function App() {
  const[searchTerm, setSearchTerm] = useState("");
  const API_BASE_URL='https://www.themoviedb.org/settings/api'
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