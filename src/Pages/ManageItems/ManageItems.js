import React from 'react';
import { useNavigate } from 'react-router-dom';
import UseInventory from '../../hooks/UseInventory';

const ManageItems = () => {
    const [inventories, setInventories] = UseInventory();
    const navigate = useNavigate();
        
        const handleDelete = id => {
            console.log(id)
    ;
            const proceed = window.confirm('Are you Sure?');
            if (proceed) {
                const url = `http://localhost:5000/inventory/${id}`;
                fetch(url, {
                    method: 'DELETE'
                })

                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                        const remaining = inventories.filter(inventory => inventory._id !== id)
                        setInventories(remaining)
                    })

            }
    }
    return (
        <div className='container text-start my-5'>
      <h1 className="text-secondary mb-4">Manage Items</h1>
      <button onClick={() => navigate('/add-item')}  className='btn btn-dark p-2 my-2 w-100'>Add New Item</button>
            {
                inventories.map(inventory => <div key={inventory._id}>
                    
                    
                    <div className="card mb-3" >
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={inventory.picture} className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div className="col-md-8 p-5">
                                <div className="card-body">
                                    <h5 className="card-title">{inventory.name}</h5>
                                    <p><b>Price: </b>{inventory.price}</p>
                                    <p className="card-text">{inventory.description}</p>
                                    <p><b>Quantity: </b>{inventory.quantity}</p>
                                    <p><b>Suplier Name: </b>{inventory.supplier_name}</p>
                                   <div className='d-grid mt-2 w-50'>
                                       <button onClick={() => handleDelete(inventory._id)} className='btn btn-danger p-2  my-2'>Delete Item</button>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)

            }

        </div>
    );
};

export default ManageItems;