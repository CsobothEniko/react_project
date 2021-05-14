import React, { useEffect, useState } from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';

function LoginForm({ Login,error }) {
    const [details, setDetails] = useState({name:"", email:"", password:""});

    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }

    return (
        <Form onSubmit={submitHandler}>
            <FormGroup>
                <h1> LOGIN PAGE </h1>
                <p> Please open the README file on github and use the admin user! </p>

                {(error != "") ? (<div className="error"> {error} </div> ) : ""}

                <div className ="form-group">
                    <label htmlFor="name">Name: </label>
                </div>
                    <input type="text" name ="name"  id ="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name} />
            </FormGroup>
            <FormGroup className = "mt-2">

                <div className ="form-group">
                     <label htmlFor="email">Email: </label>
                </div>

                     <input type="email" name ="email"  id ="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
            </FormGroup>
            <FormGroup className = "mt-2">
                <div className ="form-group">
                     <label htmlFor="password" >Password: </label>
                </div>
                     <input type="password" name ="password"  id ="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>

            </FormGroup>
                <input  className = "btn btn-warning mt-4" type="submit" value ="LOGIN"  />



        </Form>
    )
}

export default LoginForm;