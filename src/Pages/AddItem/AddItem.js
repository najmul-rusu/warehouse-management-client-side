import React from "react";
import { useForm } from "react-hook-form";

const AddItem = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/additem`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };

  return (
    <div className="container mx-auto m-5">
      <h1 className="text-secondary ms-4">Add Product</h1>
      <form
        className="d-flex flex-column mx-3 shadow p-3 my-5 text-start bg-light"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="text-left ">
          <h6>Product Name</h6>
        </label>
        <input
          className="mb-2 "
          {...register("name")}
        />

        <label className="text-left ">
          <h6>Price</h6>
        </label>
        <input
          className="mb-2"
          type="number"
          {...register("Price")}
        />

        <label className="text-left ">
          <h6>Quantity</h6>
        </label>
        <input
          className="mb-2"
          type="number"
          {...register("quantity")}
        />

        <label className="text-left ">
          <h6>Supplier Name</h6>
        </label>

        <input
          className="mb-2"
          {...register("supplier_name")}
        />

        <label className="text-left ">
          <h6>Description</h6>
        </label>
        <textarea
          className="mb-2"
          {...register("description")}
        />

        <label className="text-left ">
          <h6>Product Image URL</h6>
        </label>
        <input
          className="mb-2"
          type="text"
          {...register("picture")}
        />

        <input
          className="mt-2 btn btn-dark"
          type="submit"
          value="Publish"
        />
      </form>
    </div>
  );
};

export default AddItem;
