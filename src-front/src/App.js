

import React,{useState ,useEffect} from "react";
import { Outlet, Link } from "react-router-dom";
import axios from "axios";
//import './App.css';

 export default function App() {
        let [Confirm, setConfirm] = useState(false)
        let [Confirm2, setConfirm2] = useState(false)
//add admin
    let [adminname, setAdminname] = useState("")
    let [password, setPassword] = useState("")
    function handleAdmin(event) {setAdminname((adminname= event.target.value)); }
  function handlePassword(event) {setPassword((password= event.target.value));}

  function handleClickAdd(){
        let MyAdmin ={
                adminname : adminname ,
                password : password,
        
           
        }
        console.log("in fun")
        console.log(MyAdmin)
        axios({
        method:'post',
        url:'api/admin/add',
          data: MyAdmin,
        
        });
        }


//
return(<div>
        <nav>
        <Link to="/Home"><button>HomePage</button></Link>|{" "}
        <Link to="/Login"><button>Login</button></Link>|{" "}
        <Link to="/Events"><button>Event</button></Link>|{" "}
        <Link to="/EventReview"><button>EventReview </button> </Link>{" "}
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
            <button type ="submit" onClick={()=>setConfirm (!Confirm)}>Admin Login  </button>
            {Confirm &&
           <form>
            <label>AdminName : </label>   
            <input type="text" placeholder="Enter Username" onChange={handleAdmin} name="username" required/>
            <br></br>  
            <label>Password : </label>   
            <input type="password" placeholder="Enter Password"  onChange={handlePassword} name="password" required/> 
            <br></br> 
            <button type="submit" onClick={handleClickAdd}>Login</button>  
            <br></br> </form> } 
            <button type ="submit" onClick={()=>setConfirm2 (!Confirm)}>User Login  </button>
            {Confirm2 &&
           <form>
           <label>UserName : </label>   
           <input type="text" placeholder="Enter Username" name="username" required/>
           <br></br>  
           <label>Password : </label>   
           <input type="password" placeholder="Enter Password" name="password" required/> 
           <br></br> 
           <button type="submit">Login</button>  
           <br></br> </form> } 
           </div>
      
   
   );
}



 






