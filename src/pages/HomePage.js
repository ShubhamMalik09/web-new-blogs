import React from 'react'
import Blogs from '../components/Blogs';
import Header from '../components/Header';
import Pagination from '../components/Pagination';

const HomePage = () => {
  return (
    <div className='w-full h-full flex flex-col gap-y-1 items-center '>
      <Header/>
      <Blogs/>
      <Pagination/>
    </div>
  )
}

export default HomePage
