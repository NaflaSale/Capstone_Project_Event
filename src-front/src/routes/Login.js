import React,{useState ,useEffect} from "react";
import axios from "axios";

function Login() {
  let [id, setId] = useState("")
  let [type, setType] = useState("")
  let [eventName, setEventName] = useState("")
  let [location, setLocation] = useState("")
  let [time, setTime] = useState("")
  let [duration, setDuration] = useState("")
  let [Confirm, setConfirm] = useState(false)//

  //let[del,setdel]= useState("")//

  function handleId(event) {setId((id= event.target.value)); }
  function handleType(event) {setType((type= event.target.value));}
  function handleEventName(event) {setEventName((eventName= event.target.value)); }
  function handleLocation(event) {setLocation((location= event.target.value));}
  function handleTime(event) { setTime((time= event.target.value));}
  function handleDuration(event) {setDuration((duration= event.target.value))}
  //function handleClickDel(event) {setdel((del= event.target.value))}//
function handleClick2(){
let MyEvent ={
  id : id ,
  type : type,
  eventName : eventName,
  location :location,
  time:time,
  duration :duration,
   
}
console.log("in fun")
console.log(MyEvent)
axios({
method:'post',
url:'api/event/add',
  data: MyEvent,

});
}

function handleClickDel(){
  axios({
    method:'delete',
    url:"/api/event/delete/2",

  })}
 // console.log(JSON.parse(JSON.stringify(MyEvent)));
  

    return (
   <div>
            <br></br> 
            <br></br> 
            <br></br> 
            <br></br> 
           <form>
            <label>Username : </label>   
            <input type="text" placeholder="Enter Username" name="username" required/>
            <br></br>  
            <label>Password : </label>   
            <input type="password" placeholder="Enter Password" name="password" required/> 
            <br></br> 
            <button type="submit">Login</button>  
            <br></br> 
            
            <br></br>   
                  
            </form>
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
         <br />
         <input type="submit" value="Submit" onClick={handleClick2}></input>
         <input type="submit" value="Delete" onClick={handleClickDel}></input>
         </form>}
         <br />
         <br />
         <br />
         <br />
         
   </div>
     );
   }
   export default  Login;