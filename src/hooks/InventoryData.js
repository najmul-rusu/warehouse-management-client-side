import { useEffect, useState } from 'react';

const InventoryData = () => {
    const [inventories , setinventories] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/inventory')
          .then(res => res.json())
          .then(data => setinventories(data))
    },[])
    return [inventories , setinventories]
}

export default InventoryData;