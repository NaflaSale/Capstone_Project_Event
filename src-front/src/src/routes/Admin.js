import React,{useState ,useEffect} from "react";
import axios from "axios";


function Admin()
{
  let [id, setId] = useState()
  let [type, setType] = useState("")
  let [eventName, setEventName] = useState("")
  let [location, setLocation] = useState("")
  let [time, setTime] = useState("")
  let [duration, setDuration] = useState("")
  let [src, setSrc] = useState("")
  let[price,setPrice]=useState("") 
  let[del,setdel]= useState("")
  let [Confirm, setConfirm] = useState(false)
  let [ConfirmA, setConfirmA] = useState(false)
  let [Confirm2, setConfirm2] = useState(false)


let [adminname, setAdminname] = useState()
let [password, setPassword] = useState()
const[data , setData]=useState([{adminname:""}]); //fun Display admin name

  function handleAdmin(event) {setAdminname((adminname= event.target.value)); }
  function handlePassword(event) {setPassword((password= event.target.value));}
  function handleId(event) {setId((id= event.target.value)); }
  function handleType(event) {setType((type= event.target.value));}
  function handleEventName(event) {setEventName((eventName= event.target.value)); }
  function handleLocation(event) {setLocation((location= event.target.value));}
  function handleTime(event) { setTime((time= event.target.value));}
  function handleDuration(event) {setDuration((duration= event.target.value))}
  function handleSrc(event) {setSrc((src= event.target.value))}
  function handlePrice(event) {setPrice((price= event.target.value))}
  function handleClickDel3(event) {setdel((del= event.target.value))}

  

let MyAdmin ={
  adminname : adminname ,
  password : password,
}
let MyEvent ={
  id : id ,
  type : type,
  eventName : eventName,
  location :location,
  time:time,
  duration :duration,
  src:src,
  price:price,
  admins:MyAdmin
}
let x=localStorage.getItem("LogIn");

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
    console.log(MyEvent)
    if(adminname!=null && password!=null){
    
      alert("Add Admin")

  axios({
  method:'post',
  url:'api/admin/add',
    data: MyAdmin,
  
  });}
  

}
  
  function handleClickDel2(){
    axios({
      method:'delete',
      url:`/api/event/delete/${del}`,

      
    });
 

  }
 //fun Display admin name
useEffect(()=>{
axios.get("/api/admin")
.then(result=>setData(result.data));
console.log(data);
//}
},[]);




    return ( <div >
      <h3>Admin Private Page</h3>
      { x == "welcome you Authentication Admin" &&
   <div >
           
           <button type ="submit" onClick={()=>setConfirmA (!ConfirmA)}>Admin..  </button> 
            
            {ConfirmA &&
           <form >
            <label>AdminName : </label>   
            <input type="text" placeholder="Enter Username" onChange={handleAdmin} name="username" required/>
            <br></br>  
            <label>Password : </label>   
            <input type="password" placeholder="Enter Password"  onChange={handlePassword} name="password" required/> 
            <br></br> 
            <br></br> 
            <button type="submit" onClick={handleClickAdd}>Registration</button> 
             </form> } 
            <br />
            
        
     <br></br><br></br>
     <button type ="submit" onClick={()=>setConfirm (!Confirm)}>Add To Event  </button>
      {Confirm &&
      <form>
       <h3>ADD EVENT..</h3>
       
         <label htmlFor="id">ID:</label>
         <br />
         <input type="text" placeholder="ID.." id="id" name="id" onChange={handleId} required/>
         <br />
         <label htmlFor="name">Event Type: </label>
         <br />
         <input type="text" placeholder="EventType.." id="name" name="name" onChange={handleType} required/>
         <br />
         <label htmlFor="text">Event Name: </label>
         <br />
         <input type="text" placeholder="EventName.." id="text" name="text" onChange={handleEventName} required/>
         <br />
         <label htmlFor="text">Location: </label>
         <br />
         <input type="text" placeholder="Location.." id="text" name="text" onChange={handleLocation} required/>
         <br />
         <label htmlFor="text">Time: </label>
         <br />
         <input type="date" placeholder="Time.." id="text" name="text" onChange={handleTime} required />
         <br />
         <label htmlFor="text">Duration: </label>
         <br />
         <input type="text" placeholder="Duration.." id="text" name="text" onChange={handleDuration} required/>
         <br />
         <label>Src : </label>  
         <br></br> 
         <input type="text" placeholder="Src.. "  onChange={handleSrc} name="id" required/> 
         <br></br>
         <label>price : </label>  
         <br></br> 
         <input name="price" placeholder="price.. "  onChange={handlePrice} name="id" required/> 
         <br></br>
         <label>AdminName: </label> 
         <br></br>  
         <input type="text" placeholder="AdminName.." onChange={handleAdmin} name="username" required/>
         <br></br> 
         <br />
         <input type="submit" value="Add" onClick={handleClick2}></input>
         <br></br>
         <br></br>
         </form>}
         <br />
         <button onClick={()=>setConfirm2 (!Confirm2)}>Delete</button>
         {Confirm2 &&
         <form>
         <label htmlFor="id">Delete Event:</label>
         <br />
         <input type="text" placeholder="EventName.." id="id" name="id" onChange={handleClickDel3} required />
         <br />
         <input type="submit" value="Delete" onClick={handleClickDel2}></input>
         </form>}
         <br />
         <br />
         <div className="AdminCss">
               <h2 ><b><u> ADMIN NAME..</u></b></h2>
               {data.map(adminname=>{
                 return <div>
                   <p>{adminname.adminname}</p>
                 </div>
               })}
       </div>
</div>}


            </div> );
   }

   export default  Admin;