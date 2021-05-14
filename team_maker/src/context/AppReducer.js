export default (state, action) => {
    switch(action.type) {
        case 'REMOVE_CHARACTER':
            return {
                characters: state.characters.filter(character => {
                    return character.id !== action.payload
                })
            }
        case 'ADD_CHARACTER':
            return {
                characters: [action.payload, ...state.characters]
            }

        case 'EDIT_CHARACTER':
            const updateCharacter = action.payload;
            const updateCharacters = state.characters.map(character => {
                if(character.id === updateCharacter.id){
                    return updateCharacter;
                }
                return character;
            })

            return{
                characters: updateCharacters
            }

            return {
                characters: [action.payload, ...state.characters]
            }

        default:
            return state
    }
}