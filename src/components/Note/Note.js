import React from 'react'

function Note({data}) {

    const {title, body} = data;

    return (
        <div>
            <h1>{title}</h1>
            <p>{body}</p>
            <button>borrar nota</button>
        </div>
    )
}

export default Note