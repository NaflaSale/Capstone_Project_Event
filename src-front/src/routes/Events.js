import React, { useEffect, useState } from 'react'
import axios from "axios"

export default function Events() {
    const [MyEvent, setMyEvent] = useState({id:"",type:"",eventName:"",location:"",time:"",duration:""})
   

  useEffect(()=>{
    //for(let i =0 ; i<length-1; i++){}
    axios.get("/api/event")
     .then(response=>{
       console.log(response.data)
       setMyEvent(response.data[0])
    })
    return()=>{}
    },[])
  
//stringify
   return (
    <div>
            <br></br>
      <br></br>
      <h2>MY EVENT DETAILS ARE:  {JSON.stringify(MyEvent)}</h2>
     
     
       </div>
  ) }
   
   

