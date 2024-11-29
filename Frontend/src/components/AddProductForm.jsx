import React, { useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';

const AddProductForm = () => {

  const[productName,setProductName]= useState('')
  const[productDesc,setProductDesc]= useState('')
  const[formData,setFormData]=useState({
    image:null,
    productName:'',
    productDesc:'',
  })


  const formSubmitHandler= async(e)=>{
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('image',formData.image);
      formDataToSend.append('productName',formData.productName);
      formDataToSend.append('productDesc',formData.productDesc);

      const { data } = await axios.post(
        'http://localhost:8000/api/product/add-product',
        formDataToSend)

        if (data.success) {
          toast.success(data.message);
          setFormData({
            image:null,
            productName:'',
            productDesc:'',
          })
        }
        else{
          toast.error(data.message);
        }


    } catch (error) {
      console.error('Error adding Product:', error);
      toast.error('An error occurred while adding the Product');
    }
  }






    return (
      <div className=" flex items-center justify-center text-white">
        <form className="w-full max-w-lg p-6  rounded-lg shadow-xl border border-white" onSubmit={(e)=>formSubmitHandler(e)} >
          <h2 className="text-2xl font-bold mb-6 text-center text-blue-400">Add Product</h2>
          <div className="mb-5">
            <label htmlFor="file" className="block text-sm font-medium mb-2">
              Upload File
            </label>
            <input
              type="file"
              id="file"
              
              onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
              className="block w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-500 file:text-white hover:file:bg-blue-400 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="productName" className="block text-sm font-medium mb-2">
              Product Name
            </label>
            <input
              type="text"
              id="productName"
              name="productName"
              value={formData.productName}
              onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
              className="w-full p-3 bg-gray-800 text-gray-300 rounded-lg placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter product name"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="productDescription" className="block text-sm font-medium mb-2">
              Product Description
            </label>
            <textarea
              id="productDescription"
              rows="4"
              name="productDescription"
              value={formData.productDesc}
              onChange={(e) => setFormData({ ...formData, productDesc: e.target.value })}
              className="w-full p-3 bg-gray-800 text-gray-300 rounded-lg placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter product description"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 hover:bg-blue-400 text-white rounded-lg font-semibold text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            Submit
          </button>
        </form>
      </div>
    );
  };
  
  export default AddProductForm;
  