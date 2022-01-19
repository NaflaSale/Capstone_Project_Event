import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import axios from "axios";
import Login from "./routes/Login";
import Event from "./routes/img/Event.png";
// import Event1 from "./routes/img/Event1.png";
import T from "./routes/img/T.png";
import F from "./routes/img/F.png";
import In from "./routes/img/In.png";
import Y from "./routes/img/Y.png";
import G from "./routes/img/G.png";

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

<img src={Event} alt="A"  width={340} />
        <nav>




          <Link to="/Events"><button>Events</button></Link>|{" "}

          <Link to="/Home"><button>HomePage</button></Link>|{" "}
          <Link to="/Login"><button>Login</button></Link>|{" "} 
          <Link to="/EnterTicket"><button >EnterTicket </button></Link> |{" "}

        {/* <Link to="/Ticket"><button>Ticket </button></Link> |{" "} */}
           <Link to="/Admin"><button>Admin </button></Link> |{" "}

       <button onClick={()=>{localStorage.setItem("LogIn","")}}> Log Out </button>
       
        {/* <img src={Event1} alt="A" className="bacground3" width={1100} /> */}
        </nav><Outlet />
       <a href="https://mobile.twitter.com/" ><img src={T} alt="A" className="bacground" width={50}/></a>
       <a href="https://www.facebook.com/campaign/landing.php"> <img src={F} alt="A" className="bacground" width={50}/></a>
       <a href="https://www.instagram.com/" ><img src={In} alt="A" className="bacground"width={50}/></a>
       <a href="https://www.youtube.com/index?hl=ar"><img src={Y} alt="A" className="bacground" width={50}/></a> 
      <a href="https://github.com/NaflaSale" > <img src={G} alt="A" className="bacground" width={50}/></a>

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



