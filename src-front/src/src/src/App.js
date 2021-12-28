import React,{useState ,useEffect} from "react";
import { Outlet, Link } from "react-router-dom";
import axios from "axios";
//import './App.css';


 export default function App() {
       // let [Confirm, setConfirm] = useState(false)
        let [Confirm2, setConfirm2] = useState(false)
//add admin
//     let [adminname, setAdminname] = useState("")
//     let [password, setPassword] = useState("")
//     let [id, setEvent_id] = useState("") //nwe add

//     function handleAdmin(event) {setAdminname((adminname= event.target.value)); }
//   function handlePassword(event) {setPassword((password= event.target.value));}
//   function handleIdEvent(event) {setEvent_id((id= event.target.value));} //new add
// let NewEvent={
//         "id": id ,
//         type : type,
//         eventName : eventName,
//         location :location,
//         time:time,
//         duration :duration}
//   function handleClickAdd(){
//         let MyAdmin ={
//                 adminname : adminname ,
//                 password : password,
//                 id :id, //new add
           
//         }
//         console.log("in fun")
//         console.log(MyAdmin)
//         axios({
//         method:'post',
//         url:'api/admin/add',
//           data: MyAdmin,
        
//         });
//         }


//
return(<div>
        
        <nav>
        {/* <Link to="/Home"><button>HomePage</button></Link>|{" "} */}
        <Link to="/Events"><button>Events</button></Link>|{" "}
        {/* <Link to="/EventReview"><button>EventReview </button> </Link>{" "} */}
        <Link to="/Home"><button>HomePage</button></Link>|{" "}
        <Link to="/Login"><button>Login</button></Link>|{" "}

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
            {/* <button type ="submit" onClick={()=>setConfirm (!Confirm)}>Admin..  </button> 
            
            {Confirm &&
           <form>
            <label>AdminName : </label>   
            <input type="text" placeholder="Enter Username" onChange={handleAdmin} name="username" required/>
            <br></br>  
            <label>Password : </label>   
            <input type="password" placeholder="Enter Password"  onChange={handlePassword} name="password" required/> 
            <br></br> 
            <label>id event : </label>   
            <input type="id" placeholder="Enter id"  onChange={handleIdEvent} name="id" required/> 
            <br></br> 
            <button type="submit" onClick={handleClickAdd}>Registration</button> 

            <button type="submit" >Sign in</button>  

            <br></br> </form> }  */}
            
            <button type ="submit" onClick={()=>setConfirm2 (!Confirm2)}>User.. </button>
            {Confirm2 &&
           <form>
           <label>UserName : </label>   
           <input type="text" placeholder="Enter Username" name="username" required/>
           <br></br>  
           <label>Password : </label>   
           <input type="password" placeholder="Enter Password" name="password" required/> 
           <br></br> 
           <button type="submit">Registration</button> 
           <button type="submit">Sign in</button>  
           <br></br> </form> } 
           </div>
      
   
   );
}



 