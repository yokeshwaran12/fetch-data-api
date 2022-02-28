import React, { useState } from "react";
import "../App.css"
import UserData from "./Userdata";

const FetchData=()=>{


   const[result,setResult] = useState({user_data:[],loading : false});



 const fetchData = ()=>{
            fetch("https://reqres.in/api/users?page=1").then(res =>{
            return res.json();
            }).then(Data =>{
            const html = Data.data

            setResult({user_data:html,loading:false});
            console.log(html);
            }).catch((error) => {
                console.error(error)
              })
        }
    return(<>
       <div className="navBar">
        <h1>LetsGrowMore</h1>
        <button onClick={fetchData}>Get Users</button>
    </div>
    <div className="Card">
    <UserData loading={result.loading} users={result.user_data} />
    </div>
    </>);
}
export default FetchData;