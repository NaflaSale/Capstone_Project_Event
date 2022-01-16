import React,{useState } from "react";
import axios from "axios";
import {  Link } from "react-router-dom";


function EnterTicket() {
  
    let [username, setUsername] = useState("") //USER

    let [ticketId, setTicketId] = useState("")
    let [name, setName] = useState("")// Ticket
    let [price, setPrice] = useState("")

    let [id, setId] = useState("") //Event
    


  function handleUserName(event) {setUsername((username= event.target.value)); } //USER


  function handleTicketId(event) {setTicketId((ticketId= event.target.value))} // TICKET
  function handleName(event) {setName((name= event.target.value));} 
  function handlePrice(event) {setPrice((price= event.target.value));}

  function handleId(event) {setId((id= event.target.value)); }//EVENT



  let MyEvent ={
    id : Number(id) ,
    
    
   
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
  let x=localStorage.getItem("LogIn");
  
  
        e.preventDefault();
       console.log("in fun")
       console.log(MyTicket)
       if(x=="welcome you Authentication User"){
        axios({
        method:'post',
        //url:'api/ticket/add',
        url:'api/ticket/add',
          data: MyTicket,
        
        });
        
        }
        else alert("no you are admin")
        
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
       {/* <label htmlFor="name">Ticket Price: </label>
       <br />
       <input type="text" placeholder="Ticket Price.." id="name" name="name" onChange={handlePrice} />
       <br /> */}
       <label htmlFor="name">Event id: </label>
       <br />
       <input type="text" placeholder="Event id:.." id="name" name="name" onChange={handleId} />
       <br></br>
      
       <button type="submit" value="Add"  >Add</button> 
       <Link to="/Ticket"><td><button >Ticket..</button></td></Link>


       

       <br></br>
       <br></br>

       
       </form>
       

 </div>
 );
}
export default  EnterTicket;


