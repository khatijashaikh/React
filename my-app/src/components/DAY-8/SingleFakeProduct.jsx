import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleFakeProduct=()=>{
    const {productId}=useParams();
    const [productData, setproductData]=useState({})
    const [loading, setLoading]=useState(true)
    console.log(productData,"productData")
    async function getSingleProductData(){
        try{
            const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
            setproductData(response.data);
        }
        catch(error){
            console.log(error)
        }
         finally{
        setLoading(false)
    }
    }
    useEffect(()=>{
        if(productId){
            getSingleProductData();
        }
    }, [productId]);
    return (
        <div>
            {loading ? (
                <div>
                    <h1>Loading...</h1>
                </div>
            ):(
                  <div
              style={{
                height: "350px",
                width: "18%",
                margin:"auto",
                border: "1px solid black",
                marginBottom: "20px",
                cursor:"pointer"
              }}
             
            >
              <img
                style={{ height: "50%", width: "100%" }}
                src={productData.image}
            
              />
              <h2>Name: {productData.title}</h2>
              <h4>Price: ${productData.price}</h4>
            </div>
            )}
        </div>
    )
}

export default SingleFakeProduct;