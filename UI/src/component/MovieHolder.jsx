import React from 'react'
import DecryptedText from '../../ReactBits/DecryptedText/DecryptedText'

const MovieHolder = ({
    image_path = "",
    movie_name = "Title not found",
    overview = "Overview not find",
    rate = "--",
}) => {

    const url = "https://image.tmdb.org/t/p/w500" + image_path;

  return (
    <div className="w-4xl bg-gray-950/80 border border-white/50 h-60 rounded-2xl my-5 flex items-center px-3 relative">
        <div className="poster w-36">
        <img src={url} alt="poster" className='w-auto h-52 rounded-xl'/>
        </div>

        <div className="info ml-4 w-lg h-full py-4.5">
        <div className="title text-2xl text-left font-extrabold">
            <DecryptedText
            text={movie_name}
            animateOn="view"
            revealDirection="start"
            speed={30}
            sequential="True"
            />
        </div>
        <div className="overview h-40 overflow-hidden text-s mt-2.5">
            {overview}
        </div>
        </div>

        <div className="review h-full py-4 absolute right-4">
        <div className="rate h-8 w-20 bg-emerald-800/50 border border-emerald-700 rounded-2xl flex justify-center items-center">
            {rate}/10
        </div>
        </div>
        
    </div>
  )
}

export default MovieHolder
