import { faArrowDown, faArrowUp, faBars, faEdit, faSave, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { ListGroupItem } from 'reactstrap';
import { Button, Input } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import styled from 'styled-components';

const ItemWrapper = styled(ListGroupItem)`
    .completed{
        text-decoration: line-through;
    }
`

const Item = ({ value: { title, completed }, index, deleteTask, editTask, up, down, toggleCompleted }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);

    const [isEdit, setIsEdit] = useState(false);
    const [value, setValue] = useState(title);

    const save = () => {
        setIsEdit(false);
        editTask(value, index)
    }

    const cancel = () => {
        setIsEdit(false);
        setValue(title);
    }

    return (
        <ItemWrapper key={index} tag="a" href="#" action
            onDoubleClick={() => toggleCompleted(index)}
            className="d-flex align-items-center justify-content-between">
            {isEdit ?
                <Input value={value} onChange={(e) => setValue(e.target.value)} className="me-3 border-0" />
                : <span className={`${completed && "completed" || ""}`}>
                    {index + 1}. {title}
                </span>}

            {isEdit ?
                <div className="d-flex align-items-center">
                    <Button onClick={save} color="success" className="me-2"><FontAwesomeIcon icon={faSave} /> </Button>
                    <Button onClick={cancel} color="danger"><FontAwesomeIcon icon={faTimes} /> </Button>
                </div>
                : <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle caret>
                        <FontAwesomeIcon icon={faBars} />
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>Functions</DropdownItem>
                        <DropdownItem onClick={() => deleteTask(index)}>
                            <FontAwesomeIcon icon={faTrash} /> Delete
                        </DropdownItem>
                        <DropdownItem onClick={() => { setIsEdit(true) }}>
                            <FontAwesomeIcon icon={faEdit} /> Edit
                        </DropdownItem>
                        <DropdownItem onClick={() => { up(index) }}>
                            <FontAwesomeIcon icon={faArrowUp} /> Up
                        </DropdownItem>
                        <DropdownItem onClick={() => { down(index) }}>
                            <FontAwesomeIcon icon={faArrowDown} /> Down
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>

            }
        </ItemWrapper>
    )
}

export default Item;
