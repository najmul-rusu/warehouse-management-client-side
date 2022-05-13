import { useEffect, useState } from 'react';

const InventoryData = () => {
    const [inventorys , setInventorys] = useState([])
    useEffect(()=>{
        fetch('data.json')
          .then(res => res.json())
          .then(data => setInventorys(data))
    },[])
    return [inventorys , setInventorys]
}

export default InventoryData;