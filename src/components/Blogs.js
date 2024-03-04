import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';

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
                <div key={post.id}>
                    <p className='font-bold text-lg '>{post.title}</p>
                    <p className='text-xs mt-[5px]'>By <span className=' italic'>{post.author}</span> on <span className=' underline font-bold'>{post.category}</span></p>
                    <p className='text-xs mt-[4px]'>Posted on {post.date}</p>
                    <p className='text-md mt-2'>{post.content}</p>
                    <div className='flex flex-wrap gap-x-3'>
                        {post.tags.map((tag,index)=>{
                            return <span key={index} className='text-blue-700 underline font-bold text-xs mt-[5px]'>{`#${tag} `}</span>
                        })}
                    </div>
                </div>
                ) ))
         )
      }
    </div>
  )
}

export default Blogs
