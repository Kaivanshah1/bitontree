import React from 'react';

const Card = ({ character }) => {
  return (
    character ? (
      <div className='flex flex-col border-2 border-orange-500 rounded-md transition duration-300 hover:shadow-2xl cursor-pointer h-75 w-52'>
        <img src={character.image} alt={character.name} className='rounded-t-md'/>
        <h3 className='font-bold text-[1b1f230d] text-center mt-2'>{character.name}</h3>
        <div className='p-2'>
          <p className='font-light'>{character.species}</p>
          <p className='font-light'>{character.episode.length}</p>
          <p className='font-light'>{character.location.name}</p>
        </div>
      </div>
    ) : (
      <div>No Characters found</div>
    )
  );
}

export default Card;