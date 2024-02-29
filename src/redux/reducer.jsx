const initialState = {
    loading: false,
    data: [],
    erro: null
}


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_DATA_REQUEST':
            return {
                ...state,
                loading: true,
                error: null
            };
        case 'FETCH_DATA_SUCCESS':
            console.log('REDUCER', action.payload);
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        case 'FETCH_DATA_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }

}

