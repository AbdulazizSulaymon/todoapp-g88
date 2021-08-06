import React, { useState } from 'react'
import "./Todo.css";
import { Button, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';

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
                    return <ListGroupItem key={index} tag="a" href="#" action
                        className="d-flex align-items-center justify-content-between">
                        <span>{index + 1}. {value.title}</span>
                        <Button color="danger" onClick={() => deleteTask(index)}>
                            <FontAwesomeIcon icon={faTrash} />
                        </Button>
                    </ListGroupItem>
                })}
            </ListGroup>
        </div>
    )
}

export default Todo;