import React, { useEffect, useState } from "react";
import InventoryData from "../../../hooks/InventoryData";
import ShowInventoryItems from "../../InventoryItems/ShowInventoryItems";

const HomeInventory = () => {
    
  const [inventorys] = InventoryData();
  return (
    <div className="container my-5">
      <h3 className="text-center fs-1 bg-light p-3">Inventory Items</h3>
      <div className="row row-cols-1 row-cols-md-3 g-4">
          {inventorys.slice(0, 6).map((inventory) => (
            <ShowInventoryItems
              inventory={inventory}
              key={inventory._id}
            ></ShowInventoryItems>
          ))}
      </div>
    </div>
  );
};

export default HomeInventory;
