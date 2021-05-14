import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
import {
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';

export const List = () => {

    const { characters, removeCharacter } = useContext(GlobalContext);

    return (
        <ListGroup className= "mt-4">
        {characters.length > 0 ? (
          <>
           {characters.map(character => (
               <ListGroupItem className="" key={character.id}>
                   <strong>Name:</strong>
                   <div>{character.name} {"\n"}</div>
                   <div className="d-flex flex-column ">
                    <strong> Your quote: </strong>  &apos;{character.quote}&apos;
                   </div>
                   <div className="mt-2 ml-auto">

                       <Link to={`/edit/${character.id}`} className="btn btn-warning mr-10" >Edit</Link>
                       <Button onClick={() => removeCharacter(character.id)} color="danger" className = "ml-2">Delete</Button>
                   </div>
        </ListGroupItem>
          ))}
          </>
        ) : (
            <h4 className="text-center"> THERE ARE NO CHARACTERS! </h4>
        )}


        </ListGroup>
    )
}