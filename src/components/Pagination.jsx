import React, { useState } from 'react'

const Pagination = ({page, setPage}) => {
  return(
    <div className='mt-5 text-center'>
      {
        page>0 && (
          <div className='border-2 w-[500px] border-orange-500 rounded-md mb-5'>
             <button disabled={page === 1}><span onClick={() => setPage(page - 1)}>⬅️</span></button>
            {[...Array(20)].map((_, index) => (
              <button key={index} onClick={() => setPage(index + 1)} className="p-1">{index + 1}</button>
            ))}
             <button disabled={page === 20}><span onClick={() => setPage(page + 1)}>➡️</span></button>
          </div>
        )
      }
    </div>
  )
}

export default Pagination;