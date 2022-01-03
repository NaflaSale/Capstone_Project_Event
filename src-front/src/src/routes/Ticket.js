
    

import React, { Component } from "react";
import axios, { Axios } from "axios"

export default class AllTicket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            TicketList: [],
        };
    }
    componentDidMount() {
        axios.get("api/ticket").then(response => {
            const TicketList = response.data
            this.setState({ TicketList });
        });
    }
    deleteSpecialist(ticketId) {
        axios.delete(`/api/ticket/delete/${ticketId}`)
            .then(res => {
                const TicketList = this.state.TicketList.filter(item => item.ticketId !== ticketId);
                this.setState({ TicketList });
           })
    }
    render() {
        return (
            <div>
                <table >
                    <thead>
                        <tr>
                            <th >Ticket:</th>
                            <th >Name</th>
                            <th >price</th>
                            <th >event</th>
                         </tr>
                    </thead>
                    <tbody>
                        {this.state.TicketList.map((item => (
                            <tr key={item.ticketId}>
                                <td>{item.ticketId}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.events.eventName}</td>
                                 <td><button >add..</button></td>
                                <td><button onClick={(e) => this.deleteSpecialist(item.ticketId, e)}>delete..</button></td>
                            </tr>
                        )))
                        }
                    </tbody>
                </table>
                
            </div>
        )}}
                      





{/* 

// function Ticket() {


  

//     return (
   
//       <div>
//         <h1>Ticket</h1>
//        <div class="tixContainer">

// <a class="tix" href="#">
//   <div class="tixInner">
//     <span><strong>BUY</strong> Ticket</span>
//   </div>
// </a>
  
// </div>

//       </div>
//      );
//    }
//    export default  Ticket; */}