import React from 'react'

function MovieCard({movie :
    {title,vote_average,poster_path,release_date,origin_language}}) 
{
  return (
    <div className='movie-card'>
        <img src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}`:
      '/no-movie.png' 
    } alt={title} />
    <div className='mt-4'>
        <h1>{title}</h1>
        <div className='content'>
            <div className='rating'>
                <img src="star.svg" alt="Star Icon" />
                <p>{vote_average ? vote_average.toFixed(1):'N/A'}</p>
                <span>•</span>
                <p className='lang'>{origin_language}</p>
                 <span>•</span>
                 <p className='year'>
                    {release_date ? release_date.split('-')[0] :'N/A'}
                 </p>
            </div>

        </div>
    </div>
        <p className='text-white'>{title}</p>
    </div>
  )
}

export default MovieCard;