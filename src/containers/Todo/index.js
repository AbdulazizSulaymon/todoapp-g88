import React, { Component } from 'react'
import "./Todo.css";
import { Button, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ListGroup, ListGroupItem } from 'reactstrap';


export default class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = { typing: "", data: props.data }
    }


    typing = (event) => {
        console.log(event.target.value);

        this.setState((state) => {
            return { typing: event.target.value }
        })
    }

    add = () => {
        this.setState((state) => {
            //variant 1
            // let list = [...state.data];
            // list.push({ title: state.typing })
            //return { data: list }

            //variant 2
            // let list = [...state.data, { title: state.typing }]
            // return { data: list }

            //variant 3
            return { data: [...state.data, { title: state.typing }], typing: "" }
        })
    }

    render() {
        return (
            <div className="bg-white rounded p-3 shadow">
                <h1>Todo App</h1>
                <div className="d-flex mb-2">
                    <Input placeholder="new task" className="me-2" value={this.state.typing} onChange={this.typing} />
                    <Button color="primary" onClick={this.add}>
                        <FontAwesomeIcon icon={faPlus} />
                    </Button>
                </div>
                <ListGroup>
                    {this.state.data.map((value, index) => {
                        return <ListGroupItem key={index} tag="a" href="#" action>{index + 1}. {value.title}</ListGroupItem>
                    })}
                </ListGroup>
            </div>
        )
    }
}
