import React, { useEffect, useState } from 'react'
import axios from "axios"
export default function App() {
  const [MyEvent, setMyEvent] = useState({id:"",type:"",eventName:"",location:"",time:"",duration:""})
//  "id": 5,
  //"type": "Sports",
  //"eventName": "Match2",
  //"location": "Aljouf",
  //"time": "12-Des-2021",
  //"duration": "Two hours"
 useEffect(()=>{
   axios.get("/api/event")
    .then(response=>{
      console.log(response.data)
      setMyEvent(response.data[0])
   })
   return()=>{}
 },[])
function handleClick(){
  axios({
    method:'post',
    url:'api/event/add',
      data:{
        id: 5,
        type: "Sports",
        eventName: "Match2",
        location: "Aljouf",
        time: "12-Des-2021",
        duration: "Two hours"
    }
  });
}
function handleClickDel(){
axios({
  method:'delete',
  url:"/api/event/delete/5"
})}
console.log(JSON.parse(JSON.stringify(MyEvent)));
  ///museum..


 /* useEffect(()=>{
    axios.get("/api/museum")
     .then(response=>{
       console.log(response.data)
       setMyMuseum(response.data[0])
    })
    return()=>{}
  },[])
 function handleClick2(){
   axios({
     method:'post',
     url:'api/museum/add',
       data:{
        muesumId:"15",
        location:"Makkah"
     }
   });
 }
 function handleClickDel2(){
 axios({
   method:'delete',
   url:"/api/museum/delete/15"
 })}*/
   

//to this
return (
    <div>
            <br></br>
      <br></br>
      <h2>my Artwork details are:  {JSON.stringify(MyEvent)}</h2>
      <button onClick={handleClick}>ADD </button><br></br><br></br>
      <button onClick={handleClickDel}>DELETE </button>
     
       </div>
  )
}







