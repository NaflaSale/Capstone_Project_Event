import React,{useState ,useEffect} from "react";
import { Outlet, Link } from "react-router-dom";
import axios from "axios";



 export default function App() {
        let [Confirm, setConfirm] = useState(false)
        let [Confirm2, setConfirm2] = useState(false)
        // let [id, setId] = useState("")
        // let [type, setType] = useState("")
        // let [eventName, setEventName] = useState("")
        // let [location, setLocation] = useState("")
        // let [time, setTime] = useState("")
        // let [duration, setDuration] = useState("")
        // let [src, setSrc] = useState("")//

    let [adminname, setAdminname] = useState("")
    let [password, setPassword] = useState("")

    let [username, setUsername] = useState("")
    let [password2, setPassword2] = useState("")


  function handleAdmin(event) {setAdminname((adminname= event.target.value)); }
  function handlePassword(event) {setPassword((password= event.target.value));}

  function handleUser(event) {setUsername((username= event.target.value)); }
  function handlePassword2(event) {setPassword2((password2= event.target.value));}



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

        // let MyEvent ={
        //   id : id ,
        //   type : type,
        //   eventName : eventName,
        //   location :location,
        //   time:time,
        //   duration :duration,
        //   src:src,
        //   admins:MyAdmin
        // }

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



        return(<div className="home">
        
        <nav>
        {/* <Link to="/Home"><button>HomePage</button></Link>|{" "} */}
        <Link to="/Events"><button>Events</button></Link>|{" "}
        {/* <Link to="/EventReview"><button>EventReview </button> </Link>{" "} */}
        <Link to="/Home"><button>HomePage</button></Link>|{" "}
        <Link to="/Login"><button>Login</button></Link>|{" "}
        <Link to="/EnterTicket"><button>EnterTicket </button></Link> |{" "}

        <Link to="/Ticket"><button>Ticket </button></Link> |{" "}

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
            <button type="submit" >Sign in</button>  
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
           </div>
      
   
   );
}



 