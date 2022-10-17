import BoardBox from '../BoardBox/BoardBox'
import React, { useEffect, useState } from 'react'
import { getDocs, collection } from 'firebase/firestore'
import db from '../../firebaseConfig';

function BoardBoxContainer() {

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


  return (
    <div>
        <BoardBox list={listNotes}/>
    </div>
  )
}

export default BoardBoxContainer