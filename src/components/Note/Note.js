import React from 'react'
import './Note.css'
import { doc, deleteDoc } from "firebase/firestore";
import db from '../../firebaseConfig';


function Note({data}) {

    const {title, body, id} = data;

    const clear = (id) => {
        deleteDoc(doc(db, "notes", id));
    }

    return (
        <div className='note'>
            
            <h1 className='noteTitle'>{title}</h1>
            <p>{body}</p>
                        
            <button className='button' onClick={() => clear(id)}>borrar</button>

        </div>
    )
}

export default Note