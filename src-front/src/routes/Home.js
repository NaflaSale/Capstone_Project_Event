import React, { Component } from "react";
import axios, { Axios } from "axios"
import {  Link } from "react-router-dom";

export default class AllEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            EventList: [],
        };
    }
    componentDidMount() {
        axios.get("api/event").then(response => {
            const EventList = response.data
            this.setState({ EventList });
        });
    }
    // deleteSpecialist(id) {
    //     axios.delete(`/api/event/delete/${id}`)
    //         .then(res => {
    //             const EventList = this.state.EventList.filter(item => item.id !== id);
    //             this.setState({ EventList });
    //        })
    // }
    render() {
        return (
            <div>
                <table border="2px" className="table" >
                    <thead>
                        <tr>
                            <th  >id</th>
                            <th c>type</th>
                            <th >eventName</th>
                            <th >location</th>
                            <th >time</th>
                            <th >duration</th>
                            <th >src</th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.state.EventList.map((item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.type}</td>
                                <td>{item.eventName}</td>
                                <td>{item.location}</td>
                                <td>{item.time}</td>
                                <td>{item.duration}</td>
                                <td><img className="imgevent" height="100" width="100" src={item.src} /></td>
                                <Link to="/EnterTicket"><td><button >add..</button></td></Link>
                              {/* <td><button onClick={(e) => this.deleteSpecialist(item.id, e)}>delete..</button></td> */}
                            </tr>
                        )))
                        }
                    </tbody>
                   
                </table>
               
            </div>
            
        )}}
                      

