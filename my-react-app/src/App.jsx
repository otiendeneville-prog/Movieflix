import React from 'react'
import Search from './components/Search.jsx'

function App() {
  return (
    <main>
       <div className="partern"/>
       <div className='wrapper'>
        <img src="./hero.png" alt="Hero Banner"/>
         <header>
          <h1>Find The <span className='text-gradient'>Movies</span> You'll Enjoy Without The Hussle</h1>
         </header>
         <Search/>
       </div>
    </main>
  )
}

export default App