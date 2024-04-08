import React from 'react'

const Filter = ({setStatus, setGender}) => {
  const handleChange = (e) => {
   setStatus(e.target.value);
  }

  const handleChangeGender = (e) => {
    setGender(e.target.value);
  };
  
  const handleClearFilter = () => {
   setStatus('');
   setGender('');
 }

 return (
  <div className='text-center'>
    <h2 className='font-extrabold mb-3'>Filter</h2>
    <div className='ml-0 border-2 h-56 flex flex-col p-8 gap-5 border-orange-500 rounded-md'>
        <form className='flex flex-col space-y-2'>
        <p className='font-semibold'>Status</p>
        <select onChange={handleChange} className='border border-orange-400'>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
        <p className='font-semibold'>Gender</p>
        <select onChange={handleChangeGender} className='border border-orange-400'>
        <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
        </form>
        <button onClick={handleClearFilter} className='bg-orange-300 rounded-sm p-1'>Clear Filter</button>
    </div>
    </div>
  )
}

export default Filter