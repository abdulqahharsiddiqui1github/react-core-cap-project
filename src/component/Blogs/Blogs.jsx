import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';
const Blogs = ({handleButton,handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([])
   /*  console.log(blogs) */
    useEffect(()=>{
        fetch('blog.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className="w-3/5 max-h-screen">
            {
                blogs.map(blog=><Blog 
                    handleButton={handleButton}
                    handleMarkAsRead={handleMarkAsRead}
                    key={blog.id} 
                    blog={blog}
                ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleButton: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}

export default Blogs;