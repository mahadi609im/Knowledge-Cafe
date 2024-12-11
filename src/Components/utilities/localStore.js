const getStoreData = () => {
   const getStrData = localStorage.getItem('marks')

   if (getStrData) {
      return JSON.parse(getStrData)
   }
   return []
}

function saveToLs(marks) {
   const marksStringified = JSON.stringify(marks)
   localStorage.setItem('marks', marksStringified);
}

function addToLs(id) {
   const marks = getStoreData()
   marks.push(id)
   saveToLs(marks)
}

function removeToLs(id) {
   const marks = getStoreData()
   const remaining = marks.filter(i => i !== id)
   saveToLs(remaining)
}

export { addToLs, getStoreData, removeToLs };