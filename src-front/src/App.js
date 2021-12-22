

import React,{useState ,useEffect} from "react";
import { Outlet, Link } from "react-router-dom";
import axios from "axios";


 export default function App() {
 

return(<div>
        <nav>
        <Link to="/Home"><button>HomePage</button></Link>|{" "}
        <Link to="/Login"><button>Login</button></Link>|{" "}
        <Link to="/Events"><button>Event</button></Link>|{" "}
        <Link to="/EventReview"><button>EventReview </button> </Link>{" "}
        <Link to="/Ticket"><button>Ticket </button></Link> |{" "}
</nav><Outlet />
          
      </div>
   
   );
}



 






