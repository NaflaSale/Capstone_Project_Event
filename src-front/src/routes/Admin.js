import React,{useState ,useEffect} from "react";
import axios from "axios";


function Admin()//  pro
{
  let [id, setId] = useState("")
  let [type, setType] = useState("")
  let [eventName, setEventName] = useState("")
  let [location, setLocation] = useState("")
  let [time, setTime] = useState("")
  let [duration, setDuration] = useState("")
  let [src, setSrc] = useState("")
  let[price,setPrice]=useState("") 

  let [Confirm, setConfirm] = useState(false)
  let[del,setdel]= useState("")

  //new page..2
  let [ConfirmA, setConfirmA] = useState(false)
  let [Confirm2, setConfirm2] = useState(false)
//add admin
let [adminname, setAdminname] = useState("")
let [password, setPassword] = useState("")
const[data , setData]=useState([{adminname:""}]); //fun Display admin name
//new
let [username, setUsername] = useState("")
let [password2, setPassword2] = useState("")

function handleUser(event) {setUsername((username= event.target.value)); }
function handlePassword2(event) {setPassword2((password2= event.target.value));}
//
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
  function handlePrice(event) {setPrice((price= event.target.value))}


  function handleClickDel3(event) {setdel((del= event.target.value))}

  // let [Authentication,setAuthentication]= useState(false);
  // function handleLogin(){
  //     setAuthentication(true);
  // }
  // if(!Authentication){
  //     return<Login handleLogin = {handleLogin} />
  // }
 

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

function handleClick2(){ 
let x=localStorage.getItem("LogIn");
console.log("in fun")
console.log(MyEvent)
if(x=="welcome you Authentication Admin"){


axios({
method:'post',
url:'api/event/add',
  data: MyEvent,

});
}
else alert("You must be admin")

}



  function handleClickAdd(){
    let x=localStorage.getItem("LogIn");
    console.log("in fun")
    console.log(MyEvent)
    if(x=="welcome you Authentication Admin"){
  
  axios({
  method:'post',
  url:'api/admin/add',
    data: MyAdmin,
  
  });
  }
  else alert("You must be admin")

}
  
  function handleClickDel2(){
    let x=localStorage.getItem("LogIn");
    if(x=="welcome you Authentication Admin"){

    axios({
      method:'delete',
      url:`/api/event/delete/${del}`,

      
    });}
    else alert("You must be admin")

  }
    //fun Display admin name
useEffect(()=>{
  let x=localStorage.getItem("LogIn");
    if(x=="welcome you Authentication Admin"){

axios.get("/api/admin")
.then(result=>setData(result.data));
console.log(data);
}},[]);




// function handleSubmit(event) {
//   event.preventDefault();
//   axios({
//       method: "get",
//       url: "api/admin/login",
//       params: { adminname: adminname, password: password }
//   })
//       .then((res => {
//           console.log(res.data)
//           if (res.data == "welcome you Authentication") {
//               props.handleLogin();
//           }
//           else {
//               alert(res.data)
//           }
//       }))
// }
///
// function handleSubmit1(event) {
//   event.preventDefault();
//   axios({
//       method: "get",
//       url: "api/users/login",
//       params: { username: username, password: password2 }
//   })
//       .then((res => {
//           console.log(res.data)
//           if (res.data == "welcome you Authentication") {
//               props.handleLogin1();
//           }
//           else {
//               alert(res.data)
//           }
//       }))
// }

    return (
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
            {/* <label>id event : </label>   
            <input type="id" placeholder="Enter id"  onChange={handleId} name="id" required/>  */}
            <br></br>
            
            
            <button type="submit" onClick={handleClickAdd}>Registration</button> 

            {/* <button type="submit"  onClick={handleSubmit}>Sign in</button>   */}

             </form> } 
            {/* <label>UserName : </label>   
           <input type="text" placeholder="Enter Username" onChange={handleUser} name="username" required/>
           <br></br>  
           <label>Password : </label>   
           <input type="password" placeholder="Enter Password" onChange={handlePassword2} name="password" required/> 
           <br></br> 
           <button type="submit" >Registration</button> 
           
           <button type="submit">Sign in</button>  */}
            <br />
         <div className="AdminCss">
               <h2 ><b><u> ADMIN NAME..</u></b></h2>
               {data.map(adminname=>{
                 return <div>
                   <p>{adminname.adminname}</p>
                 </div>
               })}

       </div>
            
            {/* <button type="submit" onClick={handleClickAdd}>Registration</button>  */}

            {/* <button type="submit" >Sign in</button>      */}
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

         {/* <label htmlFor="id">Delete Event:</label>
         <br />
         <input type="text" placeholder="EventName.." id="id" name="id" onChange={handleClickDel3} />
         <br />
         <input type="submit" value="Delete" onClick={handleClickDel2}></input> */}

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
         {/* <button type="submit" value="Delete" onClick={handleClickDel2}>Delete</button> */}
         </form>}
         <br />
         <br />
         {/* <Link to="/Admin"><button>AdminPage </button></Link> |{" "} */}
</div>
     );
   }
      {/* </div> */}

   export default  Admin;