import React, { useEffect, useState } from 'react'
import { getDocs, collection } from 'firebase/firestore'
import db from '../../firebaseConfig';
import Note from '../Note/Note';

function BoardBox() {
  const [listNotes, setListNotes] = useState([])

  const getNotes = async () => {
    const noteCollection = collection(db, 'notes')
    const noteSnapshot = await getDocs(noteCollection)

    const noteList = noteSnapshot.docs.map( (e) => {
        let note = e.data();
        note.id = e.id;

        return note;
    } )

    return noteList;

  }

  useEffect(() => {
    getNotes()
      .then((res) => {
        setListNotes(res);
      })
  }, [])

  return(
    <div>
      {
        listNotes.map((e) => {
          return          <Note data={e} key={e.id} />   
        })
      }
    </div>
  )
}

export default BoardBox;