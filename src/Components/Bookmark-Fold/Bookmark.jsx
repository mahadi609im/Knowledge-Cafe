const Bookmark = ({markArg}) => {
   const {title} = markArg
   return (
      <div>
         <div className="p-5 font-semibold text-lg bg-white rounded-lg text-[#111111] my-4">
            <h3>{title}</h3>
        </div>
      </div>
   );
};

export default Bookmark;