import React,{useState ,useEffect} from "react";
import axios from "axios";

function Login()
{
  let [ConfirmA, setConfirmA] = useState(false)
  let [Confirm2, setConfirm2] = useState(false)
  let [adminname, setAdminname] = useState()
  let [password, setPassword] = useState()
  let [username, setUsername] = useState()
  let [password2, setPassword2] = useState()


function handleUser(event) {setUsername((username= event.target.value)); }
function handlePassword2(event) {setPassword2((password2= event.target.value));}
function handleAdmin(event) {setAdminname((adminname= event.target.value)); }
function handlePassword(event) {setPassword((password= event.target.value));}


let MyUser ={
  username : username ,
  password : password2,
 
}
//fun add user
function handleClickAdd2(){
  console.log("in fun")
  console.log(MyUser)
  if(username!=null && password2!=null){
  axios({
  method:'post',
  url:'api/users/add',
    data: MyUser,
  
  });}
  alert("Add user")
  }
//admin log in
function handleSubmit(event) {
  event.preventDefault();
  axios({
      method: "get",
      url: "api/admin/login",
      params: { adminname: adminname, password: password }
  })
      .then((res => {
          console.log(res.data)
          if (res.data == "welcome you Authentication Admin") {
             localStorage.setItem("LogIn","welcome you Authentication Admin") 

          }

          else {
              alert(res.data)
          }
      }))
}
// user log in
function handleSubmitUser(event) {
  event.preventDefault();
  axios({
      method: "get",
      url: "api/users/login",
      params: { username: username, password: password2 }
  })
      .then((res => {
          console.log(res.data)
          if (res.data == "welcome you Authentication User") {
             localStorage.setItem("LogIn", "welcome you Authentication User") 
          }
          else {
              alert(res.data)
          }
      }))
}

    return (
   <div>
     
     <br></br>
           <div class="greenButton">
             <a href="#"  onClick={()=>setConfirmA (!ConfirmA)}>ADMIN..</a>
            </div>
            {ConfirmA &&
            <main style={{  padding: "5em" ,width:" 20%" , margin: " auto",background: "#FFFFF ", }}>
           <div style={{  margin: "0;", }}>
           <h1 style={{fontFamily:"cursive"}}>Log in</h1>
            <label style={{fontFamily:"cursive"}}>AdminName : </label> <br></br>  
            <input type="text" placeholder="Enter AdminName" onChange={handleAdmin} name="username" required/>
            <br></br>  
            <label style={{fontFamily:"cursive"}}>Password : </label>  <br></br> 
            <input type="password" placeholder="Enter Password"  onChange={handlePassword} name="password" required/> 
            <br></br> 
           <br></br>
            
            <button type="submit"  onClick={handleSubmit}style={{  color:'black' , }}><span style={{fontFamily:"cursive" , color:"black"}}>LogIn </span></button>  

            <br></br> </div></main> } 

         <br></br>
         <div class="greenButton">
  <a href="#" onClick={()=>setConfirm2 (!Confirm2)}>User..</a>
</div>
         {Confirm2 &&
         <main style={{  padding: "5em" ,width:" 20%" , margin: " auto",background: "#FFFFF ", }}>

            <div style={{  margin: "0;", }}>

                <h1 style={{fontFamily:"cursive"}}>Log in</h1>
                <form >
                    <label style={{fontFamily:"cursive"}}>User Name</label><br />
                    <input  type="text" placeholder="Enter Username" onChange={handleUser} name="username" required/>
                    <br></br>
                    <label  style={{fontFamily:"cursive"}}>password</label><br />
                    <input type="password" placeholder="Enter Password" onChange={handlePassword2} name="password" required/> 
                     <br></br><br></br>
                      <button type="submit"  onClick={handleSubmitUser} style={{  color:'black' , }}><span style={{fontFamily:"cursive" , color:"black"}}>LogIn </span></button>
                    <button type="submit" onClick={handleClickAdd2} style={{  color:'black' , }}> <span style={{fontFamily:"cursive" , color:"black"}}>Registration</span></button>
                </form>
            </div>
            
        </main>}
   </div>
     );
   }
   export default  Login;