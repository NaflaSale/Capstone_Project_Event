import { Outlet, Link } from "react-router-dom";
import Event from "./routes/img/Event.png";
import T from "./routes/img/T.png";
import F from "./routes/img/F.png";
import In from "./routes/img/In.png";
import Y from "./routes/img/Y.png";
import G from "./routes/img/G.png";

export default function App() {
 return (
      <div className="home">
      <img src={Event} alt="A"  width={340} />
        <nav>
          <Link to="/Events"><button>Events</button></Link>|{" "}
          <Link to="/Home"><button>HomePage</button></Link>|{" "}
          <Link to="/Login"><button>Login</button></Link>|{" "} 
          <Link to="/EnterTicket"><button >EnterTicket </button></Link> |{" "}
          <Link to="/Admin"><button>Admin </button></Link> |{" "}
          <button onClick={()=>{localStorage.setItem("LogIn","")}}> Log Out </button> 
        </nav><Outlet />
       <a href="https://mobile.twitter.com/Graduated__2017" ><img src={T} alt="A" className="bacground" width={50}/></a>
       <a href="https://www.facebook.com/campaign/landing.php"> <img src={F} alt="A" className="bacground" width={50}/></a>
       <a href="https://www.instagram.com/" ><img src={In} alt="A" className="bacground"width={50}/></a>
       <a href="https://youtube.com/channel/UCI8LHsDLtmGZLmZggQR7Rpg"><img src={Y} alt="A" className="bacground" width={50}/></a> 
      <a href="https://github.com/NaflaSale" > <img src={G} alt="A" className="bacground" width={50}/></a>

      <marquee> Events Management System .. Nafla Al-anazi ..2022</marquee>
      </div>
    ); 
}



