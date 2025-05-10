import React, { useEffect, useState } from 'react';
import axios from 'axios';



const StockPage = () => {
     const[stockData,setStockData] = useState('');
     const[hasError,setHasError] = useState(false);
     const[time,setTime] = useState();

    //Get the data when the page loads for the first time.
    useEffect(()=>{
      axios.get('http://20.244.56.144/evaluation-service/stocks',{
              headers:{
                Authorization:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ2ODY5NTM2LCJpYXQiOjE3NDY4NjkyMzYsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjJkOTMwMGQ4LWIzZTgtNGMxYy05ZTU3LWQ0Yjc1M2FiNTVmNSIsInN1YiI6IjIyYTA1LmFkaXRpQHNqZWMuYWMuaW4ifSwiZW1haWwiOiIyMmEwNS5hZGl0aUBzamVjLmFjLmluIiwibmFtZSI6ImFkaXRpIG5haWsiLCJyb2xsTm8iOiI0c28yMmNzMDA1IiwiYWNjZXNzQ29kZSI6IktqSkF4UCIsImNsaWVudElEIjoiMmQ5MzAwZDgtYjNlOC00YzFjLTllNTctZDRiNzUzYWI1NWY1IiwiY2xpZW50U2VjcmV0IjoiVXluRHROWnFTeGJIV01DRyJ9.lR0POA6zqlCVtjz5a_oykUpLZr_rGpH9LsI6kMzwh80'
              }
            })
            .then(res=>{
              console.log(res);
              setHasError(false);
              setStockData(res.stockData);
            })
            .catch(err=>{
              console.log(err)
              setHasError(true)
            })

    },[]);
  return (
    <div>
        <h1> Know Details Related to Stocks</h1>
        <from>
          Enter the time : <input type="number" onChange={(e)=>{setTime(e.target.value)}}></input>
        </from>
        {stockData?.map(data=> <Row stockDetail= {data}/>)}
    </div>
  )
}

//With the help of the Row Component I am trying to display the details after get in the row format.
//That is {props.stockDetail.AttributeValueOfData}
const Row = (props)=>{
    return(
      <tr>
        <td>{props.stockDetail}</td> 
      </tr>
      
    )
}

export default StockPage;