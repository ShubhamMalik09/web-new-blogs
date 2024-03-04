import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { baseUrl2 } from '../baseUrl';
import Header from '../components/Header';
import BlogDetails from '../components/BlogDetails';

const BlogPage = () => { 
  const [blog,setBlog] = useState(null);
  const [relatedBlogs,setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigation = useNavigate(); 
  const {setLoading,loading} = useContext(AppContext);

  const blogId = location.pathname.split("/").at(-1);

  async function fetchRelatedBlogs(){
    setLoading(true);
    let url = `${baseUrl2}?blogId=${blogId}`;

    try{
      const res= await fetch(url);
      const data = await res.json();
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    }
    catch(error){
      console.log("error");
      setBlog(null);
      setRelatedBlogs([]);
    }
    setLoading(false);
  }

  useEffect(()=>{
    if(blogId){
      fetchRelatedBlogs();
    }

  },[location.pathname])
  return ( 
    <div className='w-full h-full flex flex-col gap-y-1 items-center '>
      <Header/>
      <div className='w-11/12 max-w-[670px] h-full min-h-screen pt-20 flex flex-col gap-y-3 pb-20 justify-center items-center'>
        <button onClick={()=> navigation(-1)}>Back</button>
      </div>
      {
        loading ?
         (<div>
          <p>Loading</p>
        </div>): 
        blog ?
         (<div>
          <BlogDetails post={blog}/>
          <h2>Related Blogs</h2>
          {
            relatedBlogs.map((post)=>(
              <div key={post.id}>
                <BlogDetails post={post}/>
              </div>
            ))
          }
         </div>): 
        (<div>
          <p>No Blog Found</p>
        </div>)
      }
    </div>
  )
}

export default BlogPage
