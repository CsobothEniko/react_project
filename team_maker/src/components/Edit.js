import React,{ useContext, useState, useEffect } from 'react';
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

export const Edit = (props) => {
    const [selectedCharacter, setSelectedCharacter] = useState({
        id: '',
        name: '',
        quote: ''
    });
    const { characters, editCharacter } = useContext(GlobalContext);
    const history = useHistory();
    const currentUserId = props.match.params.id;

    useEffect(() => {
        const characterId = currentCharacterId;
        const selectedCharacter = characters.find(character => character.id === characterId)

        setSelectedCharacter(selectedCharacter)
    }, [currentCharacterIdId, characters])

    const onSubmit = () => {
    editCharacter(selectedCharacter)
        history.push('/home');
    }

    const onChange = (e) => {
     setSelectedCharacter({...selectedCharacter, [e.target.name]: e.target.value})
    }

    return (
         <Form onSubmit={onSubmit}>
             <FormGroup>
                <Label>New Character&apos;s Name: </Label>
                <Input type="text" name="name" value={selectedCharacter.name} onChange ={onChange} placeholder ="Enter new character Name"></Input>
             </FormGroup>
             <Button type="submit">Edit Name</Button>
             <Link to="/home" className="btn btn-danger ml-2"> Cancel</Link>
         </Form>
    )
}