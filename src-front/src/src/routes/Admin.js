// import React, { Component } from "react";
// import axios, { Axios } from "axios"

// export default class AllAdmin extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             AdminList: [],
//         };
//     }
//     componentDidMount() {
//         axios.get("api/admin").then(response => {
//             const AdminList = response.data
//             this.setState({ AdminList });
//         });
//     }
//     // deleteSpecialist(adminname) {
//     //     axios.delete(`/api/admin/delete/${adminname}`)
//     //         .then(res => {
//     //             const AdminList = this.state.AdminList.filter(item => item.adminname !== adminname);
//     //             this.setState({ AdminList });
//     //        })
//     // }
//     render() {
//         return (
//             <div>
//                 <table >
//                     <thead>
//                         <tr>
//                             <th >Admin Name:</th>
                            
                            

//                         </tr>
//                     </thead>
//                     <tbody>
//                         {this.state.AdminList.map((item => (
//                             <tr key={item.adminname}>
//                                 <td>{item.adminname}</td>
//                                 {/* <td><button >add..</button></td> */}
//                                 {/* <td><button onClick={(e) => this.deleteSpecialist(item.id, e)}>delete..</button></td> */}
//                             </tr>
//                         )))
//                         }
//                     </tbody>
//                 </table>
                
//             </div>
//         )}}
                      
