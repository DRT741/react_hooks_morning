import React, {useContext} from 'react';
import Event from './Event';
import AppContext from '../contexts/AppContext';

const Events = ({ state, dispatch }) => {
    const value = useContext(AppContext)
    return (
        <>
            <div>{value}</div>
            <h4>イベント一覧</h4>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">ID</th>
                        <th scope="col">TITLE</th>
                        <th scope="col">BODY</th>
                    </tr>
                </thead>
                <tbody>
                    {state.map((event, index) => (<Event key={index} event={event} dispatch={dispatch} />))}
                </tbody>
            </table>
        </>
    )
}

export default Events;