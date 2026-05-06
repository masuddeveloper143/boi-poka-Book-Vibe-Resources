const getStoredBook = () => {
  const storedBookSTR = localStorage.getItem("readList");

  if (storedBookSTR) {
    return JSON.parse(storedBookSTR);
  }

  return [];
};

const addToStoredDB = (id) => {
  const storedBookData = getStoredBook();

  if (storedBookData.includes(id)) {
    alert("bhai ei id already exist");
  } else {
    storedBookData.push(id);
    localStorage.setItem("readList", JSON.stringify(storedBookData));
    console.log(storedBookData);
  }
};

export { addToStoredDB };