import PropTypes from "prop-types";
import BookMark from "../BookMark/BookMark";

const BookMarks = ({ bookMarks, readingTime }) => {
  return (
    <div className="bg-gray-400 w-2/5 rounded-lg p-4 ml-4 text-center">
      <div>
        <h3 className="text-4xl font-bold">Reading Time: {readingTime}</h3>
      </div>
      {bookMarks.map((bookMark, idx) => (
        <BookMark
          key={idx}
          bookMark={bookMark}
        ></BookMark>
      ))}
    </div>
  );
};

BookMarks.propTypes = {
  bookMarks: PropTypes.array,
  readingTime: PropTypes.number,
};

export default BookMarks;
