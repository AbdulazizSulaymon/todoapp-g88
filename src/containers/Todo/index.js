import React, { useState } from 'react'
import { Button, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ListGroup } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import Item from './Item';

const Todo = (props) => {
    const dispatch = useDispatch();

    const value = useSelector(state => state.value);
    const data = useSelector(state => state.tasks);

    // const {value, data} = useSelector(state => state);

    const typing = (event) => {
        const action = { type: "SET_VALUE", payload: event.target.value };
        dispatch(action);
    }

    const add = () => {
        const action = { type: "ADD_TASK", payload: value }
        dispatch(action);
    }

    const deleteTask = (index) => {
        const action = { type: "DELETE_TASK", payload: index };
        dispatch(action);
    }

    const editTask = (value, index) => {
        const action = { type: "EDIT_TASK", payload: { value, index } };
        dispatch(action)
    }

    const up = (index) => {
        const action = { type: "UP", payload: index };
        dispatch(action);
    }

    const down = (index) => {
        const action = { type: "DOWN", payload: index };
        dispatch(action);
    }

    const toggleCompleted = (index) => {
        console.log(index, "toggleCompleted");

        const action = { type: "TOGGLE_COMPLETED", payload: index };
        dispatch(action);
    }

    return (
        <div className="bg-white rounded p-3 shadow">
            <h1>Todo App</h1>

            <div className="d-flex mb-2">
                <Input placeholder="new task" className="me-2" value={value} onChange={typing} />
                <Button color="primary" onClick={add}>
                    <FontAwesomeIcon icon={faPlus} />
                </Button>
            </div>
            <ListGroup>
                {data?.map((value, index) => {
                    return <Item
                        value={value}
                        index={index}
                        deleteTask={deleteTask}
                        editTask={editTask}
                        up={up}
                        down={down}
                        toggleCompleted={toggleCompleted} />
                })}
            </ListGroup>
        </div>
    )
}

export default Todo;