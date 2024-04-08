import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';


const CharacterDetails = () => {
  const { characterId } = useParams();
  const [character, setCharacter] = useState();

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/character/${characterId}`;
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setCharacter(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, [characterId]);

  if (!character) {
    return <p className='text-center'>Loading...</p>;
  }

  return (
    <>
      <Navbar/>  
    <div className='flex justify-center'>
    <div className='flex flex-col'>
    <h2 className='font-extrabold text-xl ml-20 mb-4'>{character.name}</h2>
      <img src={character.image} alt={character.name} className='w-72 ml-5'/>
      <div className='p-5 space-y-3'>
      <p className='font-light' >Status: {character.status}</p>
      <p className='font-light' >Gender : {character.gender}</p>
      <p className='font-light'>Location: {character.location.name}</p>
      <p className='font-light'>Episodes: 
        <select>
          {character.episode.map((episode, index) => (
            <option key={index} value={episode}>{episode}</option>
          ))}
        </select>
      </p>
      <p className='font-light'>Species: {character.species}</p>
      </div>
    </div>
    </div>
    </>
  );
};

export default CharacterDetails;