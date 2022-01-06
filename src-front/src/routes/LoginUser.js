import {  Link } from "react-router-dom";
import axios from "axios";
import React,{useState } from "react";



export default function App() {
    // let [username, setUsername] = useState("")
    // let [password2, setPassword2] = useState("")
    // function handleUser(event) {setUsername((username= event.target.value)); }
    // function handlePassword2(event) {setPassword2((password2= event.target.value));}
    // function handleSubmit(event) {
    //     event.preventDefault();
    //     axios({
    //         method: "get",
    //         url: "api/users/login",
    //         params: { username: username, password: password2 }
    //     })
    //         .then((res => {
    //             console.log(res.data)
    //             if (res.data == "welcome you Authentication") {
    //                 props.handleLogin();
    //             }
    //             else {
    //                 alert(res.data)
    //             }
    //         }))
    //   }

    return (
        <div>
{/* <label>UserName : </label>   
           <input type="text" placeholder="Enter Username" onChange={handleUser} name="username" required/>
           <br></br>  
           <label>Password : </label>   
           <input type="password" placeholder="Enter Password" onChange={handlePassword2} name="password" required/> 
           <br></br> 
           <button type="submit" >Registration</button> 
           
           <button type="submit" onClick={handleSubmit}>Sign in</button> 
            <p>TicketList</p> */}

            <Link to="/EnterTicket"><button>EnterTicket </button></Link> |{" "}

                  {/* <Link to="/Ticket"><button>Ticket </button></Link> |{" "} */}

        </div>
    );
}