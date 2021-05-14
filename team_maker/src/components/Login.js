import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LoginForm from './LoginForm';

export const Login = () => {

        const adminUser = {
            email: "admin@admin.com",
            password: "admin123"
        }

        const [user, setUser] = useState({name: "", email:""});
        const [error, setError] = useState("");

        const Login = details => {
            console.log(details);
            if(details.email == adminUser.email && details.password == adminUser.password){

                setUser({
                    name: details.name,
                    email: details.email
                });
            }else{
                
                setError("DETAILS DON'T MATCH :( ");
            }
        }

        const Logout = () => {
            setUser({
                name: "",
                email: ""
            });

        }

    return (

        <div style={{ maxWidth: "15rem", margin: "4rem auto" }}>

             {(user.email != "") ? (
                <div className="welcome">
                    <h2>Welcome, <span>{user.name} ! </span></h2>
                    <button className="btn btn-warning mt-4" onClick={Logout}> Logout </button>
                    <Link to="/home" className="btn btn-danger ml-2 mt-4"> Next</Link>
                </div>
             ) : (
                <LoginForm Login={Login}  error={error} />
             )}
         </div>

    )
}