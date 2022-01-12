import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import axios from "axios";
import Login from "./routes/Login";
import Event from "./routes/img/Event.png";

export default function App() {

  /// اساس
  // let [Authentication, setAuthentication] = useState(false);
  // function handleLogin(msg) {
  //   //   setAuthentication(true);
  //   if (msg == "welcome you Authentication Admin") {
  //     setAuthentication("welcome you Authentication Admin")
  //     // console.log(Authentication)
  //   }
  //   else if (msg == "welcome you Authentication User") {
  //     setAuthentication("welcome you Authentication User")
  //   }
  // }
  // if (!Authentication) {
  //   return <Login handleLogin={handleLogin} />
  // }

  // else if (Authentication == "welcome you Authentication User") {

  //   console.log("insid user")

    return (


      <div className="home">



        <nav>

          <Link to="/Events"><button>Events</button></Link>|{" "}

          <Link to="/Home"><button>HomePage</button></Link>|{" "}
          <Link to="/Login"><button>Login</button></Link>|{" "} 
          <Link to="/EnterTicket"><button>EnterTicket </button></Link> |{" "}

        {/* <Link to="/Ticket"><button>Ticket </button></Link> |{" "} */}
           <Link to="/Admin"><button>Admin </button></Link> |{" "}

<button onClick={()=>{localStorage.setItem("LogIn","")}}> log out </button>
        </nav><Outlet />
      </div>


    );
  //}
  // else if (Authentication == "welcome you Authentication Admin") {
  //   console.log("insid Admin")


    // return (<div className="home">

    //   <nav>

    //     <Link to="/Events"><button>Events</button></Link>|{" "}

    //     <Link to="/Home"><button>HomePage</button></Link>|{" "}
    //     {/* <Link to="/Login"><button>Login</button></Link>|{" "} */}
    //     {/* <Link to="/EnterTicket"><button>EnterTicket </button></Link> |{" "}

    // <Link to="/Ticket"><button>Ticket </button></Link> |{" "} */}
    //     <Link to="/Admin"><button>Admin </button></Link> |{" "}

        // <img src={Event} alt="Event" className="imgEvent" />
      // </nav>  <Outlet />
    // </div>


   // );
 // }
}



