import Note from '../Note/Note';
import '../Note/Note.css'

function BoardBox({list}) {
  
  return(
    <div className='notesContainer'>
      {
        list.map((e, i) => {
          return (
            <Note data={e} key={i} />   
          )
        })
      }
    </div>
  )
}

export default BoardBox;