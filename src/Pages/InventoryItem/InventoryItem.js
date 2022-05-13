import React from 'react';
import { useParams } from 'react-router-dom';

const InventoryItem = () => {

    
  const { inventoryId } = useParams();
    return (
        <div>
            <p>{inventoryId}</p>
        </div>
    );
};

export default InventoryItem;