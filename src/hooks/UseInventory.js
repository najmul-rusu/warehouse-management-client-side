import { useEffect, useState } from 'react';

const UseInventory = () => {
    const [inventory, setInventory] = useState([]);
  
    useEffect(() => {
        fetch('https://salty-lowlands-35134.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setInventory(data));
    }, []);
    return [inventory, setInventory]
  };

export default UseInventory;