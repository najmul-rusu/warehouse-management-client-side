import { useEffect, useState } from 'react';

const InventoryData = () => {
    const [inventories , setinventories] = useState([])
    useEffect(()=>{
        fetch('https://salty-lowlands-35134.herokuapp.com/inventory')
          .then(res => res.json())
          .then(data => setinventories(data))
    },[])
    return [inventories , setinventories]
}

export default InventoryData;