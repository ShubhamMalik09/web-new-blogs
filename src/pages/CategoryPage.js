import React from 'react'
import { useLocation, useNavigate} from 'react-router-dom'
import Header from '../components/Header';
import Blogs from '../components/Blogs';

const CategoryPage = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const category = location.pathname.split("/").at(-1);
  return (
    <div className='w-full h-full flex flex-col gap-y-1 items-center '>
      <Header/>
      <div className='w-11/12 max-w-[670px] h-full min-h-screen pt-20 flex flex-col gap-y-3 pb-20 justify-center items-center'>
        <button onClick={()=>navigation(-1)}>back</button>
        <h2>
          Blogs on <span>{category}</span>
        </h2>
      </div>
      <Blogs/>
    </div>
  )
}

export default CategoryPage
