import React from 'react'

function Note({data}) {

    const {title, body} = data;

    return (
        <div>
            <h1>{title}</h1>
            <ul>
            {
                body.map((e) => {
                    return(
                        <li>{e}</li>
                    )
                })
            }
            </ul>
            
            <button>borrar nota</button>
        </div>
    )
}

export default Note