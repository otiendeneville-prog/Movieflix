import React, { useEffect } from 'react'
const BASE_URL='https://jasonplaceholder.typicode.com';

interface Posts{
    id:Number;
    title:string;

}

export default function entity() {
    const [posts,setPosts]=useState<Posts[]>([]);

    useEffect(() => {
        const fetchPost = async()=>{
            const response = await fetch(`${BASE_URL}/posts`)
            const posts = (await response.json()) as Posts[];
            setPosts(posts)
        };
        fetchPost()
    },[])
  return (
    <div>
        <h1 className='mb-4 text-2xl'>Data Fetching in React!</h1>
        <ul>
            {posts.map((post)=>{
                return<li key={post.id}>{post.title}</li>
            }
        )}
        </ul>
  </div>
  )
}
