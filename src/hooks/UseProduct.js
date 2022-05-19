import  { useEffect, useState } from 'react';

const UseProduct = () => {
    const [books, setBooks] = useState([]);
  
    useEffect(() => {
      fetch("https://mighty-dusk-49836.herokuapp.com/books")
        .then((res) => res.json())
        .then((data) => setBooks(data));
    }, [books]);
  
    return [books, setBooks];
  };
  

export default UseProduct;