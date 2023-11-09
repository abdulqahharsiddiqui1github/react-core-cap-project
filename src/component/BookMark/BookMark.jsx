import PropTypes from "prop-types";

const BookMark = ({ bookMark }) => {
  const { title } = bookMark;
  return (
    <>
      <div className="text-2xl  bg-slate-200 m-4 p-4 rounded-xl">
        <h3>{title}</h3>
      </div>
    </>
  );
};

BookMark.propTypes = {
  bookMark: PropTypes.object.isRequired
};

export default BookMark;
