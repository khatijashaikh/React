import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FakeProducts=()=>{
    const router= useNavigate()
    const [products, setProducts]=useState([]);
    const [loading, setLoading]=useState(true)
    console.log(products,"products")
  async  function apiCalltogetProducts(){
    try{
       const response = await axios.get("https://fakestoreapi.com/products");  //it take 1 sec
       console.log(response.data)
       setProducts(response.data)
    }
    catch(error){
        console.log(error)
    }
    finally{
        setLoading(false)
    }
  }

  async function handleSelection(event){
  if(event.target.value){
    try{
        setLoading(true)
        const response = await axios.get(`https://fakestoreapi.com/products?limit=${event.target.value}`);  //it take 1 sec
        
        setProducts(response.data)
     }
     catch(error){
         console.log(error)
     }
     finally{
         setLoading(false)
     }
  }
  }

useEffect(()=>{
    apiCalltogetProducts();
},[]);

return (
    <div>
      {loading ? (
        <div>
          <h1>Loading...</h1>
        </div>
      ) : (
        <div>
            <select onChange={handleSelection}>
                <option>Select</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
            </select>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            border: "1px solid red",
          }}
        >
          {products.map((product) => (
            <div
              style={{
                height: "350px",
                width: "18%",
                border: "1px solid black",
                marginBottom: "20px",
                cursor:"pointer"
              }}
              onClick={() => router(`/singlefakeproduct/${product.id}`)}
             
            >
              <img
                style={{ height: "50%", width: "100%" }}
                src={product.image}
            
              />
              <h2>Name: {product.title}</h2>
              <h4>Price: ${product.price}</h4>
            </div>
          ))}
        </div>
        </div>
      )}
    </div>
  );
};

export default FakeProducts;