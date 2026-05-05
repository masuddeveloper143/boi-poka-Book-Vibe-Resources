const getStoredBook = () => {
    const storedBookSTR = localStorage.getItem("readList");


    if(storedBookSTR){
        const StoredBookData = JSON.parse(storedBookSTR)
        return StoredBookData;
    }
}

const addToStoredDB = () => {

}