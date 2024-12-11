import { FaRegBookmark } from "react-icons/fa6";

const Blog = ({ blogArg, handleBookmarks, handlemarkRead,handleRemoveRead,removeMarks }) => {
  const { id, cover, auth_name, auth_img, posted_date, reading_time, title, hashtags } = blogArg;


  return (
    <div className="pb-7 mb-5">
      <img className="w-full h-[450px]" src={cover} alt="" />

      <div className="flex justify-between mt-8 items-center">
        <div className="flex gap-6 items-center">
          <img className="w-16 h-16" src={auth_img} alt="" />
          <div>
            <h3 className="font-bold text-2xl text-[#111111]">{auth_name}</h3>
            <p className="font-semibold text-base text-[#11111199]">
              {posted_date}
            </p>
          </div>
        </div>
        <div className="font-medium text-xl text-[#11111199] flex gap-2">
          <span>{reading_time} min read</span>
          <button className="" onClick={() => handleBookmarks(blogArg)}>
            <FaRegBookmark />
          </button>
        </div>
      </div>

      <h1 className="max-w-[537px] font-bold text-4xl my-4">{title}</h1>

      {hashtags.map((i, idx) => (
        <span key={idx} className="font-medium text-xl text-[#11111199] mr-2">
          {i}
        </span>
      ))}

      <button
        className="block mt-6 font-semibold text-[#6047EC] underline"
        onClick={() => {
          handlemarkRead(reading_time);
          handleRemoveRead(id)
          removeMarks(id)
        }}
      >
        Mark as read
      </button>
    </div>
  );
};

export default Blog;
