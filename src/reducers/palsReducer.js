const palsReducerInitialState = {};

export default (state = palsReducerInitialState, action) => {
    switch (action.type) {
        case 'ADD_PAL':
            return [
                ...state,
                action.pal
            ];
        case 'REMOVE_PAL':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_PAL':
            return state.map((pal) => {
                if (pal.id === action.id) {
                    return {
                        ...pal,
                        ...action.updates
                    };
                } 
                else {
                    return { pal };
                }
            });
        case 'SET_PALS':
            return action.pals;
        default:
            return state;
    }
};