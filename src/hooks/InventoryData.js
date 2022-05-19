import { useEffect, useState } from 'react';

const InventoryData = () => {
    const [inventorys , setInventorys] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/inventory-items')
          .then(res => res.json())
          .then(data => setInventorys(data))
    },[])
    return [inventorys , setInventorys]
}

export default InventoryData;