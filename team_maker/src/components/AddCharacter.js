import React,{ useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Link, useHistory } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import Axios from 'axios';

import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';

export const AddCharacter = () => {

    //quotes generating
    const[quote, setQuote] = useState("");

    const getQuote = () => {
            Axios.get("https://api.kanye.rest/").then(
            (response) =>{
                setQuote(response.data.quote);
                }
              );

        };

    const [name, setName] = useState('');
    const { addCharacter } = useContext(GlobalContext);
    const history = useHistory();

    const onSubmit = () => {
        const newCharacter = {
            "id": uuid(),
            "name": name,
            "quote" : quote
        }
        addCharacter(newCharacter);
        history.push('/home');
    }

    const onChange = (e) => {
        setName(e.target.value);
    }





    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label className="mb-2">Name of your Character:</Label>

                <Input type="text" value={name}  onChange={onChange} placeholder ="Enter Name"></Input>
                <div className="mt-2 text-danger" > PLEASE CLICK HERE FOR THE QUOTE! </div>
                <Button className = "btn btn-warning mt-2" onClick={getQuote} >random quote</Button>
            </FormGroup>
            <Button className = "mt-3 mr-4" type="submit">Submit</Button>
            <Link to="/home" className="btn btn-danger mt-3"> Cancel</Link>
        </Form>
    )
}