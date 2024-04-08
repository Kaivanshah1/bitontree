import React, { useEffect, useState } from 'react';
import getCharacters from '../utils/fetchData';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Filter from '../components/Filter';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [status, setStatus] = useState('');
  const [gender, setGender] = useState('');
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  const api = `https://rickandmortyapi.com/api/character/?page=${page}&status=${status}&gender=${gender}`;
  useEffect(() => {
    getCharacters(api)
      .then(data => {
        setCharacters(data);
      })
      .catch(error => {
        console.error('Error fetching characters:', error);
      });
  }, [api]);

  const filteredCharacters = characters.filter(character =>
    character.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='flex flex-col justify-center'>
      <Navbar setSearch={setSearch} />
      <div className=' flex flex-row flex-wrap mt-4 bg-FAF9F6 gap-16 mx-auto'>
        <div className='flex mx-auto'>
          <Filter setStatus={setStatus} setGender={setGender} />
        </div>
        <div className='mx-auto'>
          {!characters ? (
            <p>No Character Found</p>
          ) : (
            <div className='flex flex-row gap-20 mx-auto '>
              <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto gap-10 md:gap-5'>
                {filteredCharacters.map(character => (
                  <Link to={`/character/${character.id}`} key={character.id}>
                    <Card key={character.id} character={character} />
                  </Link>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className='flex justify-center mt-4'>
        <Footer characters={characters} page={page} setPage={setPage} />
      </div>
    </div>
  );
};

export default Home;
