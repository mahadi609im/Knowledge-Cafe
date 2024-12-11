import { useEffect, useState } from 'react';
import Blog from '../Blog-Fold/Blog';

const Blogs = ({ handleBookmarks, handlemarkRead, handleRemoveRead, removeMarks }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('Data.json')
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);

  return (
    <div>
      {blogs.map((i, idx) => (
        <Blog
          key={idx}
          blogArg={i}
          handleBookmarks={handleBookmarks}
          handlemarkRead={handlemarkRead}
          handleRemoveRead={handleRemoveRead}
          removeMarks={removeMarks}
        ></Blog>
      ))}
    </div>
  );
};

export default Blogs;
