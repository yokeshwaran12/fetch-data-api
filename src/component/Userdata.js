import React from "react";
import "../App.css";

const UserData=({loading,users})=>{
    return(<>
       {loading?(<div className="main"></div>):(<div className="main">
       {users.map(user =>
                      <div className="">
                        {
                          console.log(user)
                        }
                        <div className="fetchUsers">
                          <img src={user.avatar} alt={user.avatar} className="avatar"></img>
                          <h1 className="name">{user.first_name} {user.last_name}</h1>
                          <p className="email">{user.email}</p>
                          <p>User_ID: {user.id}</p>
                        </div>
                      </div>
            )
          }
           </div>)}
    </>)
}
export default UserData;