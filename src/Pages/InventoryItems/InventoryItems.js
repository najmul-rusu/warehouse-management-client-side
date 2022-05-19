import React from "react";
import InventoryData from "../../hooks/InventoryData";
import ShowInventoryItems from "./ShowInventoryItems";

const InventoryItems = () => {
  const [inventories] = InventoryData();
  return (
    <div className="container">
      <h3 className="text-center fs-1 bg-light p-3">Inventory Items</h3>
      <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
        {inventories.map((inventory) => (
          <ShowInventoryItems
            key={inventory._id}
            inventory={inventory}
          ></ShowInventoryItems>
        ))}
      </div>
    </div>
  );
};

export default InventoryItems;
