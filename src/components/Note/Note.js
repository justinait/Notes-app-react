import React from 'react';
import './Note.css';
import ConfirmModal from '../ConfirmModal/ConfirmModal';

function Note({data}) {

    const {title, body, id} = data;

    return (
        <div className='note'>
            
            <h4 className='noteTitle'>{title}</h4>
            <p>{body}</p>
            
            <ConfirmModal id={id} />

        </div>
    )
}

export default Note