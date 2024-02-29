import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../redux/actions'

function Home() {

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(fetchData())
    }

    const data = useSelector(state => state.data);
    const loading = useSelector(state => state.loading);
    const error = useSelector(state => state.error);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <button onClick={handleClick}>Click Me To Show Users</button>
            <ul>
                {data.map(user => (
                    <li style={{ color: 'red' }} key={user.id}>{user.name}</li>
                ))}
            </ul>    </div>
    )
}

export default Home
