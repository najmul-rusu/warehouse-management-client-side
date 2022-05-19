import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const InventoryItem = () => {
  const { inventoryId } = useParams();
  const [inventory, setInventory] = useState({});
  const {picture, name, quantity, price, supplier_name, description} = inventory;

  useEffect(() => {
    const url = `http://localhost:5000/inventory/${inventoryId}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setInventory(data));
  }, []);

  return (
    <div className="container d-flex my-5 border border-dark py-5">
      <div className="">
        <img className="w-75" src={picture} alt="iPhone" />
        </div>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Quantity: {quantity}</p>
          <p className="card-text">Price: {price}</p>
          <p className="card-text text-muted">
            Supplier name: {supplier_name}
          </p>
          <p className="card-text pb-4">{description}</p>
      </div>
      <div className="d-grid gap-3 col-3 mx-auto">
  <Button className="btn btn-secondary" type="button">Delivery</Button>
  <Button className="btn btn-secondary" type="button">Restock</Button>
</div>
    </div>
  );
};

export default InventoryItem;
