import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '../Card';

function  Fetch  () {
    const [data,setData]=useState(null);
    const[isLoading,setIsLoading]=useState(true);
    const getProducts = async ()=>{
      const res= await axios.get("http://localhost:3000/atribute");
      setData(res.data);
      setIsLoading(false);
    };
useEffect(() => {

  
  getProducts();
}, []);

return (
    <div>
      <h1>Fake Api</h1>
      {isLoading ? (
      <h1>Loading...</h1>
      
      ):(
        data.map((x)=>(
        <Card {...x}/>
        ))
      ) }
   
    </div>
  );
}

export default Fetch;






  
