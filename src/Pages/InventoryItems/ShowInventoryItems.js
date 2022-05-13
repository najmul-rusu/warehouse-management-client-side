import React from "react";
import { useNavigate } from "react-router-dom";

const ShowInventoryItems = ({ inventory }) => {
  const {_id, picture, name, description, price, quantity, supplier_name } =
    inventory;
    const navigate =useNavigate();
    const handlenavigateToUpdateStock =id =>{
        navigate(`/inventory/${id}`)
    }

  return (
    <div className="col">
      <div className="card h-100">
      <img className="w-75" src={picture} alt="iPhone" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Quantity: {quantity}</p>
          <p className="card-text">Price: {price}</p>
          <p className="card-text text-muted">Supplier name: {supplier_name}</p>
          <p className="card-text pb-4">{description}</p>
        </div>
        <div className="footer">
          <button className="btn btn-secondary w-100 rounded-0" onClick={()=>handlenavigateToUpdateStock(_id)}>Update Stock</button>
        </div>
      </div>
    </div>
  );
};

export default ShowInventoryItems;
