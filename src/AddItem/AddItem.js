import React from "react";
import { useForm } from "react-hook-form";
import "./AddItem.css";

const AddItem = () => {
  const { register } = useForm();

  return (
    <div className="add-items container">
      <form className="mx-3 shadow p-3 my-5">
        <h1 className="text-center text-secondary">Add Product</h1>
        <div className="my-3">
          <label htmlFor="Productname" className="form-label">
            Product Name
          </label>
          <input
            className="form-control"
            {...register("ProductName")}
            placeholder="Product Name"
            id="Productname"
            required
          />
        </div>
        <div className="my-3">
          <label htmlFor="supplier-name" className="form-label">
            Supplier Name
          </label>
          <input
            className="form-control"
            {...register("supplier-name")}
            placeholder="supplier-name"
            id="supplier-name"
            required
          />
        </div>

        <div className="my-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            {...register("description")}
            placeholder="Description"
            id="description"
            required
          />
        </div>
        <div className="d-flex">
          <div className="my-3 w-75">
            <label htmlFor="brand" className="form-label">
              Brand
            </label>
            <input
              className="form-control"
              {...register("brand")}
              placeholder="brand"
              id="brand"
              required
            />
          </div>
          <div className="my-3 w-25">
            <label htmlFor="stockQuantity" className="form-label">
              Stock Quantity
            </label>
            <input
              type="number"
              className="form-control"
              {...register("stockQuantity")}
              placeholder="Stock Quantity"
              id="stockQuantity"
              required
            />
          </div>
        </div>
        <div className="d-flex">
          <div className="my-3 w-75">
            <label htmlFor="photo" className="form-label">
              Plase Photo URL
            </label>
            <input
              className="form-control"
              {...register("photo")}
              placeholder="Photo URL"
              id="photo"
              required
            />
          </div>
          <div className="my-3 w-25">
            <label htmlFor="price" className="form-label">
              Price
            </label>
            <input
              type="number"
              className="form-control"
              {...register("price")}
              placeholder="Price"
              id="price"
              required
            />
          </div>
        </div>
        <input type="submit" value="Add Item" />
      </form>
    </div>
  );
};

export default AddItem;
