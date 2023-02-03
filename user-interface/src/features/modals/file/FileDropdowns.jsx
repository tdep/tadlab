import React from 'react'
import { useDispatch } from 'react-redux'
import { openModal } from '../modalSlice'
import '../../../styling/Modals.css'

export function FileDropdowns() {
  
  const dispatch = useDispatch()

  const handleModalOpen = (e) => {
    let menuItem = e.target.id
    dispatch(openModal({ open: true, menuItem: menuItem }))
        
  }
  
  return (
    <>
      <a id="new-project" className="menu-item" onClick={handleModalOpen}>New Project</a>
      <br />
      <a id="save-project" className="menu-item" onClick={handleModalOpen}>Save Project</a>
      <br />
      <a id="open-project" className="menu-item" onClick={handleModalOpen}>Open Project</a>
    </>
  )
}