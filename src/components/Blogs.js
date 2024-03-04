import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import BlogDetails from './BlogDetails';

const Blogs = () => {
    const {posts,loading} = useContext(AppContext);
  return (
    <div className='w-11/12 max-w-[670px] h-full min-h-screen pt-20 flex flex-col gap-y-3 pb-20 justify-center items-center'>
      {
        loading ?(<Spinner/>):(
            posts.length ===0 ?
                ( 
                <div><p>Not post found</p></div>
                ) : (posts.map((post)=>(
                  <BlogDetails key={post.id} post={post}/>
                ) ))
         )
      }
    </div>
  )
}

export default Blogs
