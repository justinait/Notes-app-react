import React from 'react'
import './Note.css'
import { doc, deleteDoc } from "firebase/firestore";
import db from '../../firebaseConfig';
import ConfirmModal from '../ConfirmModal/ConfirmModal';


function Note({data}) {

    const {title, body, id} = data;


    return (
        <div className='note'>
            
            <h1 className='noteTitle'>{title}</h1>
            <p>{body}</p>
                        
            {/* <button className='button' onClick={(handleDelete)}>borrar</button> */}
            <ConfirmModal id={id} />
        </div>
    )
}

export default Note