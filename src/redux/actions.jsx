import axios from "axios"


export const fetchDataRequest = () =>{
    return{
        type:'FETCH_DATA_REQUEST'
    }
}

export const fetchDataSuccess = (data) =>{
    console.log('ACTION',data);
    return{
        type:'FETCH_DATA_SUCCESS',
        payload:data
    }
}
export const fetchDataError = (error) =>{
    return{
        type:'FETCH_DATA_ERROR',
        payload:error
    }
}


export const fetchData = () => {
    return (dispatch) => {
        dispatch(fetchDataRequest());
        return axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                console.log(response.data);
                dispatch(fetchDataSuccess(response.data))
            })
                .catch((error) => {
                    dispatch(fetchDataError(error));
                });                    
            
    }
}