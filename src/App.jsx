import { useState } from "react";
import "./App.css";
import Blogs from "./component/Blogs/Blogs";
import Header from "./component/Header/Header";
import BookMarks from "./component/BookMarks/BookMarks";


function App() {
  const [bookMarks, setBookMark] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleButton = (blog) => {
    const newBookMarks = [...bookMarks, blog];
    setBookMark(newBookMarks);
  };
  /*  console.log(typeof readingTime) */
  const handleMarkAsRead = (id,time) => {
    const newReading = readingTime + time;
    setReadingTime(newReading);
    /* remove item */
  /*   console.log('remove item ' , id) */
    const remove = bookMarks.filter(bookmark=> console.log(bookmark.id))
   /*  console.log(remove) */
    setBookMark(remove);
  };

  return (
    <>
      <div className="max-w-5xl mx-auto my-6">
        <Header></Header>
        <hr className="my-4" />
        <div className="md:flex gap-4">
          <Blogs
            handleButton={handleButton}
            handleMarkAsRead={handleMarkAsRead}
          ></Blogs>
          <BookMarks
            bookMarks={bookMarks}
            readingTime={readingTime}
          ></BookMarks>
        </div>
      
      </div>
    </>
  );
}

export default App;
