
let invoices = [
  {
        id : 1 ,
       // type : "Arts",
        eventName : "Arts",
        //location :"Aljouf",
        //time:"12-12-2020",
        details :"2 Days",
        src:"https://iqraa.com/Media/Blog_Post_Pictures/c9d2fb90-4c95-426a-bf99-60cff60eb5f8.jpg",
  },

  {
    id : 2 ,
    //type : "Sports",
     eventName : "Sports",
    // location :"Tabuk",
    // time:"30-12-2021",
     details :"2:30 H",
    src:"https://cdn1-m.alittihad.ae/store/archive/image/2021/10/27/ece86eb3-49fa-4234-a067-cb29a8a20bd4.jpeg?width=1300",
},


{
  id : 3 ,
  //type : "Shopping",
   eventName : "Shopping",
  // location :"Aljouf",
  // time:"28-12-2021",
   details :"5 H",
  src:"https://pocketstop.com/wp-content/uploads/2021/08/Theme20Based20Decor20from20Geek20Wire.png",
},



];

export function getInvoices() {
  return invoices;
}
export function getInvoice(id) {
  return invoices.find(
    invoice => invoice.id === id
  );
} 



// let invoices = [
//     {
//         id : 12 ,
//         type : "Arts",
//         eventName : "eventName",
//         location :"location",
//         time:"time",
//         duration :"duration",
//     },
//     {
//         id : 11 ,
//         type : "Arts",
//         eventName : "eventName",
//         location :"location",
//         time:"time",
//         duration :"duration",
//     },
    
 
//   ];
  
//   export function getInvoices() { 
//     return invoices;
//   }

//   export function getInvoice(id) {
//     return invoices.find(
//       invoice => invoice.id === id
//     );
//   }
