import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
import { AiFillEdit } from 'react-icons/ai';
import swal from 'sweetalert';
import '../../css/Table.css';
import Sidebar from '../common/sidebar/sidebar';

const Inventory = () => {
  const [inventory, setInventory] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get('http://localhost:8081/api/inventory/inventory/getallitems');
    setInventory(result.data.reverse());
  };

  const removeItem = async (id) => {
    await axios.delete(`http://localhost:8081/api/inventory/inventory/removeitem/${id}`);
    swal({
      title: 'Success',
      text: 'Successfully Remove Item !',
      icon: 'success',
      button: 'OK',
    });
    loadUsers();
  };

  return (
    <>
      <Sidebar />
      <div className="section">
        <h2 className="cateTopic">Inventory</h2>
        <div className="btnadd">
          <Link to="/new-item">
            <button type="button" className="btn btn-primary" style={{ marginRight: '15px' }}>
              + Add Item
            </button>
          </Link>
          <div className="btn-group">
            <Link to="/report-view8">
              <button type="button" className="btn btn-warning dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Export Report
              </button>
            </Link>
          </div>
        </div>
        <form>
          <div className="search">
            <div className="col-lg-16 mt-2 mb-2 ml-1">
              <input
                className="form-control"
                type="search"
                placeholder="search here"
                name="searchTerm"
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
              />
            </div>
          </div>
        </form>
        <div className="catetb">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th>ItemName</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>MinStock</th>
                <th>MaxStock</th>
                <th>PurchasePrice</th>
                <th>SellingPrice</th>
                <th>TotalValue</th>
                <th>Supplier</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="tbody">
              {inventory
                .filter((val) => {
                  if (searchTerm === '') {
                    return val;
                  } else if (
                    val.itemName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    val.itemCategory.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    val.sellingPrice.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    val.supplierName.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((itm, index) => (
                  <tr>
                    <td>{itm.itemName}</td>
                    <td>{itm.itemCategory}</td>
                    <td>{itm.quantityOnHand}</td>
                    <td>{itm.minStockLevel}</td>
                    <td>{itm.maxStockLevel}</td>
                    <td>{itm.purchasePrice}</td>
                    <td>{itm.sellingPrice}</td>
                    <td>{itm.totalStockPrice}</td> {/* Calculate Total Value */}
                    <td>{itm.supplierName}</td>

                    <td style={{ display: 'flex', alignItems: 'center' }}>
                      <Link className="btn btn-success mr-2" to={`update-item/${itm._id}`}>
                        <AiFillEdit size="20px" color="white" />
                      </Link>

                      <Link className="btn btn-danger" style={{ marginLeft: '5px' }} onClick={() => removeItem(itm._id)}>
                        <FaTrashAlt size="20px" color="white" />
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Inventory;
