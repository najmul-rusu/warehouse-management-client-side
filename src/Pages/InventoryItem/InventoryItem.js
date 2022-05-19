import React from 'react';
import { useParams } from 'react-router-dom';

const InventoryItem = () => {

    // const {picture} =inventory;

    
  const { inventoryId, picture, name, description, quantity, price, supplier_name } = useParams();
    return (
        <div>
            <p>{inventoryId}</p>
            <img className="w-75" src={picture} alt="iPhone" />
            <h5 className="card-title">{name}</h5>
          <p className="card-text">Quantity: {quantity}</p>
          <p className="card-text">Price: {price}</p>
          <p className="card-text text-muted">Supplier name: {supplier_name}</p>
          <p className="card-text pb-4">{description}</p>
        </div>
    );
};

export default InventoryItem;