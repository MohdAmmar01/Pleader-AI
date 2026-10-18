import React, { useContext } from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import context from "context/context";

export default function Verify(){
  const [data,setData]=useState('')
  const { id } = useParams();
  
  //verify email
  const verifyEmail = async (data) => {

    const host = "http://localhost:5000"
    // const host = "http://localhost:5000"

    const response = await fetch(`${host}/api/user/verify`, {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET",
        "Content-Type": "application/json",
        "authentication": localStorage.getItem("pleader-login-token"),
      },
      body: JSON.stringify(
        {
          "code": data
        }
      )
    })
    const json = await response.json();
    setData(json)
    if (!json.success) {
      setTimeout(()=>{
        window.location.href = `/signin`
      },[2000])
    }else{
      setTimeout(()=>{
        window.location.href = `/signin`
      },[2000])
    }
  }
  
  useEffect(() => {
    verifyEmail(id)
  }, []);

  return (
    <div className="container">
      <div className="flex justify-center mt-16">
      
      </div>
      <div className="flex justify-center mt-8">

        {data?data.success?<h2 className="text-1xl text-base text-white ">Email Verified Successfully...</h2>:<h2 className="text-1xl text-base text-white ">Invalid Token Provided...</h2>:<h2 className="text-1xl text-base text-white ">Verifying Email...</h2>}
      </div>
    </div>
  );
};
