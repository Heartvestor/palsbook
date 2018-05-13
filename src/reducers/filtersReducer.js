
const initialFiltersReducerState = {
    text: ''
};

export default (state = initialFiltersReducerState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text,
            };
        default:
            return state;
    }
};