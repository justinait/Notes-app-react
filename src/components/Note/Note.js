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
            <p>{body}</p>
            
            {/* {
                body.map((e, i) => {
                    return(
                        <div className='item' key={i}>
                            <input type="checkbox"></input>
                            <label> {e} </label>
                        </div>
                        
                    )
                })
            } */}
            
            <button className='button' onClick={() => clear(id)}>borrar</button>
        </div>
    )
}

export default Note