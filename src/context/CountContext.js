import { deleteDoc, doc } from 'firebase/firestore';
import React, { useState } from 'react'
import { createContext } from 'react';
import db from '../firebaseConfig';

const CountContext = createContext();

function CountProvider({children}) {

  const [count, setCount] = useState(0);

  const deleteNote = (id) => {
    deleteDoc(doc(db, "notes", id));
    setCount(count - 1);
  }

  const defineCount = (amount) => {
    setCount(amount);
  }

  const data = {deleteNote, defineCount, count, setCount};

  return (
    <CountContext.Provider value={ data } >
      { children }
    </CountContext.Provider>
  );
}

export default CountProvider

export { CountContext }