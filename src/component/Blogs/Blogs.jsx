import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    console.log(blogs)
    console.log(setBlogs)
    useEffect(()=>{
        fetch('blog.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Blogs;