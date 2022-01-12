

import React, { Component } from "react";
import axios from "axios"




export default class MyTicket extends Component {


    constructor(props) {
        super(props);

        this.state = {

            TicketList: [],

        };
    }






    componentDidMount() {
        let x=localStorage.getItem("LogIn");
        if(x=="welcome you Authentication User"){

        axios.get("api/ticket").then(response => {
            const TicketList = response.data
            this.setState({ TicketList });
        });
    }}

    deleteUseGarden(ticketId) {
        console.log("Delete after Entering")
        axios.delete(`api/ticket/delete/${ticketId}`)
            .then(res => {
                const TicketList = this.state.TicketList.filter(item => item.ticketId !== ticketId);
                this.setState({ TicketList });
            })
    }



    





render() {
    return (


        <div className="ticket" >
            <div >
               <p></p>
                    {this.state.TicketList.map((item => (
                        <tr key={item.ticketId}>


                       <div >
                        
                         <div >
                           <div >
                         </div>
                        </div>
                      <div >
                      </div>
                        <div className="event">
                        <img height="200" width="200" src={item.events.src} />
                        <p>Name :{item.name} </p>
                        <p> Price : {item.price}</p>
                        <p>Event Name :{item.events.eventName} </p>
                        <p>User Name :{item.users.username} </p>
                        <td><button button class="nnn" onClick={(e) => this.deleteUseGarden(item.ticketId, e)}>delete</button></td>

                        </div>
                       <div >

</div>
</div>

                 {/* <td><button button class="bubbly" onClick={(e) => this.deleteUseGarden(item.ticketId, e)}>delete</button></td> */}

                        </tr>
                    )))
                    }
        
        </div>
        </div>
       
  )
}
}
