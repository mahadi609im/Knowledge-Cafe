const getStoreData2 = () => {
  const getStrData2 = localStorage.getItem('markRead');
   if (getStrData2) {
      return parseInt(getStrData2)
   }
   else {
      return 0
   }
};

const saveToLs2 = markRead => {
  const markReadStringified = JSON.stringify(markRead);
  localStorage.setItem('markRead', markReadStringified);
};

const addToLs2 = markTime => {
  const markRead = getStoreData2();
  const newMarksRead = markRead + markTime;
  saveToLs2(newMarksRead);
};

export { addToLs2, getStoreData2 };
