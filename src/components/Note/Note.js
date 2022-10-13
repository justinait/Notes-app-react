import React from 'react'
import './Note.css'

function Note({data}) {

    const {title, body, id} = data;

    const clear = () =>{
        //estas seguro q quieres borrar
    }

    return (
        <div className='note'>
            <h1 className='noteTitle'>{title}</h1>
            <ul className='noteItems'>
            {
                body.map((e) => {
                    return(
                        <div className='item'>
                            <input type="checkbox"></input>
                            <label> {e} </label>
                        </div>
                        
                    )
                })
            }
            </ul>
            
            <button className='button' onClick={() => clear(id)}>borrar</button>
        </div>
    )
}

export default Note