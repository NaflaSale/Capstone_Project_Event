import React,{useState } from "react";
import axios from "axios";
import {  Link } from "react-router-dom";

function EnterTicket() {

    let [username, setUsername] = useState("") //USER

    let [ticketId, setTicketId] = useState("")
    let [name, setName] = useState("")// Ticket
    let [price, setPrice] = useState("")

    let [id, setId] = useState("")
    // let [eventName,setEventName]= useState("") //Event
    // let [location, setLocation] = useState("")
    // let [time, setTime] = useState("")
    // let [duration, setDuration] = useState("")
   


  function handleUserName(event) {setUsername((username= event.target.value)); } //USER


  function handleTicketId(event) {setTicketId((ticketId= event.target.value))} // TICKET
  function handleName(event) {setName((name= event.target.value));} 
  function handlePrice(event) {setPrice((price= event.target.value));}

  function handleId(event) {setId((id= event.target.value)); }
//   function handleEventName(event) {setEventName((eventName= event.target.value)); } //EVENT
//   function handleLocation(event) {setLocation((location= event.target.value));}
//   function handleTime(event) { setTime((time= event.target.value));}
//   function handleDuration(event) {setDuration((duration= event.target.value))}
  
  let MyEvent ={
    id : Number(id) ,
    
    // eventName : eventName,
    // location :location,
    // time:time,
    // duration :duration,
   
  }
  
  let MyUser ={
   
   username:username,
   
  }
  let MyTicket ={

    ticketId:Number(ticketId),
     name:name,
     price:price,
      events:MyEvent,
      users:MyUser,
  }

 function handleClickMyTicket(e){
    
        e.preventDefault();
       console.log("in fun")
       console.log(MyTicket)

        axios({
        method:'post',
        //url:'api/ticket/add',
        url:'api/ticket/add',
          data: MyTicket,
        
        });
        }

return (
    <div>
       
        <form onSubmit={(e)=>{handleClickMyTicket(e)}}>
        <h3>ADD Ticket..</h3>
       
       <label htmlFor="id">User Name:</label>
       <br />
       <input type="text" placeholder="User Name" id="name" name="name" onChange={handleUserName} />
       <br />
       <label htmlFor="name">Ticket id: </label>
       <br />
       <input type="text" placeholder="Ticket Name.." id="name" name="name" onChange={handleTicketId} />
       <br />
       <label htmlFor="name">Ticket Name: </label>
       <br />
       <input type="text" placeholder="Ticket Name.." id="name" name="name" onChange={handleName} />
       <br />
       <label htmlFor="name">Ticket Price: </label>
       <br />
       <input type="text" placeholder="Ticket Price.." id="name" name="name" onChange={handlePrice} />
       <br />
       <label htmlFor="name">Event id: </label>
       <br />
       <input type="text" placeholder="Event id:.." id="name" name="name" onChange={handleId} />
       <br></br>
       {/* <label htmlFor="text">Event Name: </label>
       <br />
       <input type="text" placeholder="EventName.." id="text" name="text" onChange={handleEventName} />
       <br />
       <label htmlFor="text">Location: </label>
       <br />
       <input type="text" placeholder="Location.." id="text" name="text" onChange={handleLocation} />
       <br />
       <label htmlFor="text">Time: </label>
       <br />
       <input type="text" placeholder="Time.." id="text" name="text" onChange={handleTime} />
       <br />
       <label htmlFor="text">Duration: </label>
       <br />
       <input type="text" placeholder="Duration.." id="text" name="text" onChange={handleDuration} />
       <br /> */}
       
       <input type="submit" value="Add"  ></input> 
       <Link to="/Ticket"><td><button >Ticket..</button></td></Link>


       

       <br></br>
       <br></br>

       
       </form>
       

 </div>
 );
}
export default  EnterTicket;





