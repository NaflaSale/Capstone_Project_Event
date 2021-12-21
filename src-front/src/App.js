

import React,{useState ,useEffect} from "react";
import { Outlet, Link } from "react-router-dom";
import axios from "axios";


 export default function App() {
  //const [MyEvent, setMyEvent] = useState({id:"",type:"",eventName:"",location:"",time:"",duration:""})
//FROM PROJ2
    let [id, setId] = useState("")
    let [type, setType] = useState("")
    let [eventName, setEventName] = useState("")
    let [location, setLocation] = useState("")
    let [time, setTime] = useState("")
    let [duration, setDuration] = useState("")
    

    function handleId(event) {setId((id= event.target.value)); }
    function handleType(event) {setType((type= event.target.value));}
    function handleEventName(event) {setEventName((eventName= event.target.value)); }
    function handleLocation(event) {setLocation((location= event.target.value));}
    function handleTime(event) { setTime((time= event.target.value));}
    function handleDuration(event) {setDuration((duration= event.target.value))}

 function handleClick2(){
  let MyEvent ={
    id : id ,
    type : type,
    eventName : eventName,
    location :location,
    time:time,
    duration :duration

}
console.log("in fun")
console.log(MyEvent)
axios({
  method:'post',
  url:'api/event/add',
    data: MyEvent,
  
});
 }


return(<div>
        <nav>
        <Link to="/Home"><button>HomePage</button></Link>|{" "}
        <Link to="/Login"><button>Login</button></Link>|{" "}
        <Link to="/Events"><button>Event</button></Link>|{" "}
        <Link to="/EventReview"><button>EventReview </button> </Link>{" "}
        <Link to="/Ticket"><button>Ticket </button></Link> |{" "}
</nav><Outlet />
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
         <br />
         <br />
         <br />
         <br />
         
      </div>
   
   );
}



 






