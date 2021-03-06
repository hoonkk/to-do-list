import React from 'react';
import { ListGroupItem } from 'reactstrap';

const TodoItem = ({item, onToggle}) => {
    const { id, content, done} = item;
    return (
        <ListGroupItem onClick={() => onToggle(id)}>{content}</ListGroupItem>
    );    
};

export default TodoItem;