import React from 'react'

function MovieCard({movie :
    {title,vote_avarage,poster_path,release_date,origin_language}}) 
{
  return (
    <div className='movie-card'>
        <p className='text-white'>{title}</p>
    </div>
  )
}

export default MovieCard;