import React,{useState ,useEffect} from "react";
import axios from "axios";
import {  Link } from "react-router-dom";

function Login() {
  let [id, setId] = useState("")
  let [type, setType] = useState("")
  let [eventName, setEventName] = useState("")
  let [location, setLocation] = useState("")
  let [time, setTime] = useState("")
  let [duration, setDuration] = useState("")
  let [src, setSrc] = useState("")//

  let [Confirm, setConfirm] = useState(false)//
  let[del,setdel]= useState("")// del
  //let[dell,setdell]=useState("") //new

  //new page..2
  let [ConfirmA, setConfirmA] = useState(false)
  //let [Confirm2, setConfirm2] = useState(false)
//add admin
let [adminname, setAdminname] = useState("")
let [password, setPassword] = useState("")

function handleAdmin(event) {setAdminname((adminname= event.target.value)); }
function handlePassword(event) {setPassword((password= event.target.value));}
///to this


  function handleId(event) {setId((id= event.target.value)); }
  function handleType(event) {setType((type= event.target.value));}
  function handleEventName(event) {setEventName((eventName= event.target.value)); }
  function handleLocation(event) {setLocation((location= event.target.value));}
  function handleTime(event) { setTime((time= event.target.value));}
  function handleDuration(event) {setDuration((duration= event.target.value))}
  function handleSrc(event) {setSrc((src= event.target.value))}

  function handleClickDel3(event) {setdel((del= event.target.value))}//del TADAY
  //function deleteEventt(event) {setdel((dell= event.target.value))}//del


 
let MyEvent ={
  id : id ,
  type : type,
  eventName : eventName,
  location :location,
  time:time,
  duration :duration,
  src:src,
}
let MyAdmin ={
  adminname : adminname ,
  password : password,
  events :MyEvent

}

function handleClick2(){

console.log("in fun")
console.log(MyEvent)
axios({
method:'post',
url:'api/event/add',
  data: MyEvent,

});
}



  function handleClickAdd(){

  console.log("in fun")
  console.log(MyAdmin)
  axios({
  method:'post',
  url:'api/admin/add',
    data: MyAdmin,
  
  });
  }
  

// function handleClickDel(){
//   // let MyEvent2 ={
//   //   id : id}
//   axios({
//     method:'delete',
//     url:"/api/event/delete/3",
//     //data:MyEvent2 ,
//   });}
//delete today
  function handleClickDel2(){
    // let MyEvent ={
    //   id : id}
    axios({
      method:'delete',
      url:`/api/event/delete/${del}`,

      //data:MyEvent2 ,
    });}

//to add admin

// function handleClickAdd(){
//   let MyAdmin ={
//           adminname : adminname ,
//           password : password,
//           id :id, //new add
     
//   }
//   console.log("in fun")
//   console.log(MyAdmin)
//   axios({
//   method:'post',
//   url:'api/admin/add',
//     data: MyAdmin,
  
//   });
//   }
  //to this ..
    return (
   <div>
           

           <button type ="submit" onClick={()=>setConfirmA (!ConfirmA)}>Admin..  </button> 
            
            {ConfirmA &&
           <form>
            <label>AdminName : </label>   
            <input type="text" placeholder="Enter Username" onChange={handleAdmin} name="username" required/>
            <br></br>  
            <label>Password : </label>   
            <input type="password" placeholder="Enter Password"  onChange={handlePassword} name="password" required/> 
            <br></br> 
            <label>id event : </label>   
            <input type="id" placeholder="Enter id"  onChange={handleId} name="id" required/> 
            <br></br>
            
            <button type="submit" onClick={handleClickAdd}>Registration</button> 

            <button type="submit" >Sign in</button>  

            <br></br> </form> } 


            
            {/* <button type="submit" onClick={handleClickAdd}>Registration</button>  */}

            {/* <button type="submit" >Sign in</button>      */}
     <br></br><br></br>
     <button type ="submit" onClick={()=>setConfirm (!Confirm)}>Add To Event  </button>
      {Confirm &&
      <form>
       <h3>ADD EVENT..</h3>
       
         <label htmlFor="id">ID:</label>
         <br />
         <input type="text" id="id" name="id" onChange={handleId} />
         <br />
         <label htmlFor="name">Event Type: </label>
         <br />
         <input type="text" id="name" name="name" onChange={handleType} />
         <br />
         <label htmlFor="text">Event Name: </label>
         <br />
         <input type="text" id="text" name="text" onChange={handleEventName} />
         <br />
         <label htmlFor="text">Location: </label>
         <br />
         <input type="text" id="text" name="text" onChange={handleLocation} />
         <br />
         <label htmlFor="text">Time: </label>
         <br />
         <input type="text" id="text" name="text" onChange={handleTime} />
         <br />
         <label htmlFor="text">Duration: </label>
         <br />
         <input type="text" id="text" name="text" onChange={handleDuration} />
         <br />
         <label>src : </label>  
         <br></br> 
         <input type="text" placeholder="src "  onChange={handleSrc} name="id" required/> 
         <br></br>
         <br />
         <input type="submit" value="Add" onClick={handleClick2}></input>
         <br></br>

         <label htmlFor="id">ID:</label>
         <br />
         <input type="text" id="id" name="id" onChange={handleClickDel3} />
         <br />
         {/* <input type="submit" value="Delete" onClick={handleClickDel}></input> */}
         <input type="submit" value="Delete" onClick={handleClickDel2}></input>

         </form>}
         <br />
         <br />
         <br />
         <br />
         <Link to="/Ticket"><button>Ticket </button></Link> |{" "}

   </div>
     );
   }
   export default  Login;