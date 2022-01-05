import {  Link } from "react-router-dom";



export default function App() {


    return (
        <div>

            <p>TicketList</p>

            <Link to="/EnterTicket"><button>EnterTicket </button></Link> |{" "}

                  {/* <Link to="/Ticket"><button>Ticket </button></Link> |{" "} */}

        </div>
    );
}