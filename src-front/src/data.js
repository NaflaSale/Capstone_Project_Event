
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
    src:"https://www.sayidaty.net/sites/default/files/styles/1375_scale/public/2021-10/14843.jpeg?itok=ZY4zyuOe",
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

