import React from 'react'
import BoardBoxContainer from '../BoardBoxContainer/BoardBoxContainer'
import ModalForm from '../ModalForm/ModalForm'
import './Board.css'

function Board() {
  return (
    <div>
        <ModalForm />
        <BoardBoxContainer />
    </div>
  )
}

export default Board
