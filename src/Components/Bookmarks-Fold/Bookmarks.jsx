import Bookmark from "../Bookmark-Fold/Bookmark";
import Read from "../Reads-Fold/Read";

const Bookmarks = ({ marks, markRead }) => {
  return (
    <div>
      <div className="border border-[#6047EC] bg-[#6047ab1a] text-center py-5 mb-6">
        <Read markRead={markRead}></Read>
      </div>
      <div className="p-8 bg-[#1111112d] rounded-lg">
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-[#111111]">
            Bookmarked Blogs : {marks.length}
          </h3>

          {marks.map((i, idx) => (
            <Bookmark key={idx} markArg={i}></Bookmark>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;
