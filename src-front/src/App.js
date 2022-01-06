import React,{useState ,useEffect} from "react";
import { Outlet, Link } from "react-router-dom";
import axios from "axios";
import Login from "./routes/Login";
import LoginUser from "./routes/LoginUser";

 export default function App(props) {
        let [Confirm, setConfirm] = useState(false)
        let [Confirm2, setConfirm2] = useState(false)
//
        let [id, setId] = useState("")
        let [type, setType] = useState("")
        let [eventName, setEventName] = useState("")
        let [location, setLocation] = useState("")
        let [time, setTime] = useState("")
        let [duration, setDuration] = useState("")
        let [src, setSrc] = useState("")
        let[del,setdel]= useState("")
        
  function handleId(event) {setId((id= event.target.value)); }
  function handleType(event) {setType((type= event.target.value));}
  function handleEventName(event) {setEventName((eventName= event.target.value)); }
  function handleLocation(event) {setLocation((location= event.target.value));}
  function handleTime(event) { setTime((time= event.target.value));}
  function handleDuration(event) {setDuration((duration= event.target.value))}
  function handleSrc(event) {setSrc((src= event.target.value))}

  function handleClickDel3(event) {setdel((del= event.target.value))}
        
        
        //

    let [adminname, setAdminname] = useState("")
    let [password, setPassword] = useState("")

    let [username, setUsername] = useState("")
    let [password2, setPassword2] = useState("")


  function handleAdmin(event) {setAdminname((adminname= event.target.value)); }
  function handlePassword(event) {setPassword((password= event.target.value));}

  function handleUser(event) {setUsername((username= event.target.value)); }
  function handlePassword2(event) {setPassword2((password2= event.target.value));}
/// اساس
  let [Authentication,setAuthentication]= useState(false);
  function handleLogin(){
      setAuthentication(true);
  }
  if(!Authentication){
      return<Login handleLogin = {handleLogin} />
  }
///
// let [Authentication1,setAuthentication1]= useState(false);
//   function handleLogin1(){
//       setAuthentication1(true);
//   }
//   if(!Authentication1){
//       return<Login handleLogin = {handleLogin1} />
//   }




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
let MyAdmin ={
        adminname : adminname ,
        password : password,
      }
     //fun add admin
      function handleClickAdd(){
        console.log("in fun")
        console.log(MyAdmin)
        axios({
        method:'post',
        url:'api/admin/add',
          data: MyAdmin,
        
        });
        }

        let MyEvent ={
          id : id ,
          type : type,
          eventName : eventName,
          location :location,
          time:time,
          duration :duration,
          src:src,
          admins:MyAdmin
        }

        let MyUser ={
                username : username ,
                password : password2,
               // events:MyEvent,
              }
             //fun add user
              function handleClickAdd2(){
                console.log("in fun")
                console.log(MyUser)
                axios({
                method:'post',
                url:'api/users/add',
                  data: MyUser,
                
                });
                }


                
// function handleSubmit1(event) {
//   event.preventDefault();
//   axios({
//       method: "get",
//       url: "api/users/login",
//       params: { username: username, password: password }
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


        return(<div className="home">
        
        <nav>
        {/* <Link to="/Home"><button>HomePage</button></Link>|{" "} */}
        <Link to="/Events"><button>Events</button></Link>|{" "}
        {/* <Link to="/EventReview"><button>EventReview </button> </Link>{" "} */}
        <Link to="/Home"><button>HomePage</button></Link>|{" "}
        {/* <Link to="/Login"><button>Login</button></Link>|{" "} */}
        {/* <Link to="/EnterTicket"><button>EnterTicket </button></Link> |{" "}

        <Link to="/Ticket"><button>Ticket </button></Link> |{" "} */}
        {/* <Link to="/LoginUser"><button>LoginUser </button></Link> |{" "} */}


       </nav><Outlet />

            <br></br> 
            <br></br> 
            <br></br> 
            <br></br> 
            <br></br>
            <br></br> 
            <br></br> 
            <br></br> 
            <br></br> 
            <br></br>
            <button type ="submit" onClick={()=>setConfirm (!Confirm)}>Admin..  </button> 
            {Confirm &&
           <form>
            <label>AdminName : </label>   
            <input type="text" placeholder="Enter Username" onChange={handleAdmin} name="username" required/>
            <br></br>  
            <label>Password : </label>   
            <input type="password" placeholder="Enter Password"  onChange={handlePassword} name="password" required/> 
            <br></br>
            <Link to="/Ticket"><button  >Login</button></Link>|{" "} 
            {/* <button type="submit" >Sign in</button>   */}
            <button type="submit" onClick={handleClickAdd}>Registration</button> 
            <br></br> </form> } 
            
            <button type ="submit" onClick={()=>setConfirm2 (!Confirm2)}>User.. </button>
            {Confirm2 &&
           <form>
           <label>UserName : </label>   
           <input type="text" placeholder="Enter Username" onChange={handleUser} name="username" required/>
           <br></br>  
           <label>Password : </label>   
           <input type="password" placeholder="Enter Password" onChange={handlePassword2} name="password" required/> 
           <br></br> 
           <button type="submit" onClick={handleClickAdd2}>Registration</button> 
           
           <button type="submit">Sign in</button>  
           <br></br> </form> } 

<div>
           <button type ="submit" onClick={()=>setConfirm (!Confirm)}>Add To Event  </button>
      {Confirm &&
      <form>
       <h3>ADD EVENT..</h3>
       
         <label htmlFor="id">ID:</label>
         <br />
         <input type="text" placeholder="ID.." id="id" name="id" onChange={handleId} />
         <br />
         <label htmlFor="name">Event Type: </label>
         <br />
         <input type="text" placeholder="EventType.." id="name" name="name" onChange={handleType} />
         <br />
         <label htmlFor="text">Event Name: </label>
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
         <br />
         <label>Src : </label>  
         <br></br> 
         <input type="text" placeholder="Src.. "  onChange={handleSrc} name="id" required/> 
         <br></br>
         <label>AdminName: </label> 
         <br></br>  
         <input type="text" placeholder="AdminName.." onChange={handleAdmin} name="username" required/>
         <br></br> 
         <br />
         <input type="submit" value="Add" ></input>
         <br></br>
         <br></br>

         <label htmlFor="id">Delete Admin:</label>
         <br />
         <input type="text" placeholder="AdminName.." id="id" name="id" onChange={handleClickDel3} />
         <br />
         {/* <input type="submit" value="Delete" onClick={handleClickDel}></input> */}
         <input type="submit" value="Delete" ></input>

         </form>}
           </div>

           </div>
      
   
   );
}



 