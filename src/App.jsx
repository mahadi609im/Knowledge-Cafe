import './index.css';
import profile from './assets/profile.png';
import Bookmarks from './Components/Bookmarks-Fold/Bookmarks';
import { useEffect, useState } from 'react';
import {addToLs, getStoreData, removeToLs} from './Components/utilities/localStore'
import Blogs from './Components/Blogs-Fold/Blogs';
import { addToLs2, getStoreData2 } from './Components/utilities/localStore2';

function App() {
  const [marks, setMarks] = useState([]);
  const [blogs, setBlogs] = useState([])
  const [markRead, setMarkRead] = useState(0);

  const handlemarkRead = (read) => {
    const updatedRead = markRead + read; // Current state + new value
    setMarkRead(updatedRead); // State update
    addToLs2(read); // Local storage update
  };
  
  useEffect(() => {
    fetch('Data.json')
    .then(res => res.json())
    .then(data => setBlogs(data))
  }, [])
  
  useEffect(() => {
    if (blogs.length) {
      const storedData = getStoreData();
      const storeBlog = []
      for (const id of storedData) {
        const blog = blogs.find(i => i.id == id)
        if (blog) {
          storeBlog.push(blog)
        }
      }
      setMarks(storeBlog)
    }
  }, [blogs])

  useEffect(() => {
    if (blogs.length) {
      const storedData2 = getStoreData2();
      setMarkRead(storedData2);
    }
    
  }, [blogs])

  const handleBookmarks = mark => {
    const newMark = [...marks, mark];
    setMarks(newMark);
    addToLs(mark.id)
  };

  const removeMarks = (id) => {
    // ls remove
    removeToLs(id)
  }



  const handleRemoveRead = id => {
    const remaining = marks.filter(i => i.id !== id);
    setMarks(remaining);
  };

  return (
    <div className="container mx-auto">
      <header className="flex justify-between my-8 items-center">
        <h1 className="font-bold text-4xl text-[#111111]">Knowledge Cafe</h1>
        <img className="w-16 h-16" src={profile} alt="" />
      </header>
      <div className="border-b border-[#11111126] mb-10"></div>
      <main className="flex gap-32">
        <div className="w-2/3">
          <Blogs
            handleBookmarks={handleBookmarks}
            handlemarkRead={handlemarkRead}
            handleRemoveRead={handleRemoveRead}
            removeMarks={removeMarks}
          ></Blogs>
        </div>
        <div className="w-1/3">
          <Bookmarks marks={marks} markRead={markRead}></Bookmarks>
        </div>
      </main>
    </div>
  );
}

export default App;
