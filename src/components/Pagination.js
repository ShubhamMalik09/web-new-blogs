import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

const Pagination = () => {
  const {page , handlePageChange,totalPages} = useContext(AppContext);
  return (
    <div className=' w-full flex justify-center items-center py-3 border-t-4 shadow-md fixed bottom-0 bg-white '>
      <div className='w-11/12 max-w-[670px] flex justify-between items-center'>
        <div className=' flex gap-x-3'>
        { page>1 &&
          <button className='rounded-md border-2  px-4 py-1' onClick={()=>handlePageChange(page-1)}>Previous</button>
        }
        {page<totalPages &&
          <button className='rounded-md border-2  px-4 py-1' onClick={()=>handlePageChange(page+1)}>Next</button>
        }
        </div>
        <p className='font-bold text-sm'>Page {page} of {totalPages}</p>

      </div>
    </div>
  )
}

export default Pagination
