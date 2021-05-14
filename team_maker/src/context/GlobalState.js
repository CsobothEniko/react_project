import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

//initial State
const initialState = {
    characters: [
    ]
};

//create context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({children})  => {
    const [state , dispatch] = useReducer(AppReducer, initialState, () => {
        const localData = localStorage.getItem('characters');
        return localData ? JSON.parse(localData) : initialState;
    });

    //using localStorage
    useEffect(() => {
        localStorage.setItem('characters', JSON.stringify(state.characters))
    }, [state])

    //Actions
    const removeCharacter = (id) => {
        dispatch({
            type: 'REMOVE_CHARACTER',
            payload: id
        })
    }

    const addCharacter = (character) => {
        dispatch({
            type: 'ADD_CHARACTER',
            payload: character
        })
    }

    const editCharacter = (character) => {
        dispatch({
            type: 'EDIT_CHARACTER',
            payload: character
        })
    }

    return(
        <GlobalContext.Provider value= {{
            characters: state.characters,
            removeCharacter: removeCharacter,
            addCharacter,
            editCharacter
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
