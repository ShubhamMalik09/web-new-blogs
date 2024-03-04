import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'; 
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';

const TagPage = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const tag =location.pathname.split("/").at(-1);
  return (
    <div className='w-full h-full flex flex-col gap-y-1 items-center '>
      <Header/>
      <div className='w-11/12 max-w-[670px] h-full min-h-screen pt-20 flex flex-col gap-y-3 pb-20 justify-center items-center'>
        <button onClick={()=>navigation(-1)}>
          back
        </button>
        <h2>Blogs Tagged<span>#{tag}</span></h2>
      </div>
      <Blogs/>
      <Pagination/>
    </div>

  )
}

export default TagPage
