import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/product/view-product');
        setProducts(response.data.products);
        console.log(products);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {products.map((product) => (
        <div key={product?.id} className="bg-white border rounded-lg shadow-lg overflow-hidden">
          <img
            src={product?.image}
            alt={product?.productName}
            className="w-full h-64 object-contain"
          />
          <div className="p-4">
            <h5 className="text-xl font-semibold text-white">{product?.productName}</h5>
            <p className="text-sm text-white mt-2">{product?.productDesc}</p>
          </div>
        </div>
      ))}
    </div>
  )
};

export default ViewProduct;
