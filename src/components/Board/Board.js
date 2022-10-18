import ModalForm from '../ModalForm/ModalForm'
import './Board.css'
import BoardBox from '../BoardBox/BoardBox'
import React, { useContext, useEffect, useState } from 'react'
import { getDocs, collection } from 'firebase/firestore'
import db from '../../firebaseConfig';
import { CountContext } from '../../context/CountContext'

function Board() {

  const {defineCount, count} = useContext(CountContext);

  const [listNotes, setListNotes] = useState([]);
  const [amount, setAmount] = useState(0);

  let quantity = 0;

  const getNotes = async () => {
    const noteCollection = collection(db, 'notes')
    const noteSnapshot = await getDocs(noteCollection)

    const noteList = noteSnapshot.docs.map( (e) => {
      let note = e.data();
      note.id = e.id;
      quantity = quantity + 1;
      
      return note;
    })
    setAmount(quantity);
    defineCount(amount);
    return noteList;
  }

  useEffect(() => {
    getNotes()
      .then((res) => {
        setListNotes(res);
      })
  }, [count])


  return (
    <div>
      <ModalForm />
      <BoardBox list={listNotes} />
    </div>
  )
}

export default Board
