import React,{useState } from "react";
import axios from "axios";
import {  Link } from "react-router-dom";


function EnterTicket() {
  
    let [username, setUsername] = useState("") //USER
    let [ticketId, setTicketId] = useState("")
    let [name, setName] = useState("")// Ticket
    let [id, setId] = useState("") //Event


  function handleUserName(event) {setUsername((username= event.target.value)); } //USER
  function handleTicketId(event) {setTicketId((ticketId= event.target.value))} // TICKET
  function handleName(event) {setName((name= event.target.value));} 
  function handleId(event) {setId((id= event.target.value)); }//EVENT


  let x=localStorage.getItem("LogIn"); //View the page if you are a user

  let MyEvent ={
    id : Number(id) ,
  }
  
  let MyUser ={
   
   username:username,
   
  }
  let MyTicket ={

    ticketId:Number(ticketId),
     name:name,
      events:MyEvent,
      users:MyUser,
  }

 function handleClickMyTicket(e){
        e.preventDefault();
       console.log("in fun")
       console.log(MyTicket)
        axios({
        method:'post',
        url:'api/ticket/add',
          data: MyTicket,
        
        });
        
                
      }
return (
    <div className="InterTicket">
      <h3>User Private Page</h3>
            { x == "welcome you Authentication User" &&

       
        <form onSubmit={(e)=>{handleClickMyTicket(e)}}>
        <h3>ADD Ticket..</h3>
       
       <label htmlFor="id">User Name:</label>
       <br />
       <input type="text" placeholder="User Name" id="name" name="name" onChange={handleUserName} required/>
       <br />
       <label htmlFor="name">Ticket id: </label>
       <br />
       <input type="text" placeholder="Ticket Name.." id="name" name="name" onChange={handleTicketId} required/>
       <br />
       <label htmlFor="name">Ticket Name: </label>
       <br />
       <input type="text" placeholder="Ticket Name.." id="name" name="name" onChange={handleName} required/>
       <br />
       <label htmlFor="name">Event id: </label>
       <br />
       <input type="text" placeholder="Event id:.." id="name" name="name" onChange={handleId} required/>
       <br></br>
      
       <button type="submit" value="Add"  >Add</button> 
       <Link to="/Ticket"><td><button >Ticket..</button></td></Link> 


       <br></br>
       <br></br>
       </form> }
 </div>
 );
}
export default  EnterTicket;


