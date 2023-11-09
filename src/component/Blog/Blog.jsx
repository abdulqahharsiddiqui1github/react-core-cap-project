import PropTypes from "prop-types";
import { BsBookmarksFill } from "react-icons/Bs";


const Blog = ({ blog, handleButton, handleMarkAsRead }) => {
  const { id,title, cover, read_time, author_img, post_date, author, hashtags } =
    blog;
  return (
    <div className="mb-24">
      <img
        className="w-full rounded-lg"
        src={cover}
        alt={`cover picture the title ${title}`}
      />
      <div className="flex items-center justify-between  mt-7">
        <div className="flex gap-4 items-center">
          <img className="w-14" src={author_img} alt="author_img" />
          <div>
            <h2>{author}</h2>
            <p>{post_date}</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <h2 className="text-2xl font-semibold">{read_time}</h2>
          <button 
          onClick={()=>handleButton(blog)}
          className=" text-red-600 text-2xl"
          ><BsBookmarksFill></BsBookmarksFill>
          </button>
        </div>
      </div>
      <h4 className="mt-4 text-3xl font-semibold">{title}</h4>
      <p className="mt-2 text-red-600">
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="">{hash}</a>
          </span>
        ))}
      </p>
      <button onClick={()=>handleMarkAsRead(read_time,id)}>Mark As Read</button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleButton: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired
};

export default Blog;
