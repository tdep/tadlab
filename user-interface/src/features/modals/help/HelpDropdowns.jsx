import React from 'react'
import { useDispatch } from 'react-redux'
import { openModal } from '../modalSlice'
import '../../../styling/Modals.css'

export function HelpDropdowns() {

  const dispatch = useDispatch()

  const handleModalOpen = (e) => {
    let menuItem = e.target.id
    dispatch(openModal({ open: true, menuItem: menuItem }))

  }

  return (
    <>
      <a 
        id="about" 
        className="menu-item" 
        onClick={handleModalOpen}
      >About</a>
      <br />
      <a 
        href="https://en.wikipedia.org/wiki/Synthesizer" 
        target="_blank" 
        id="save-project" 
        className="menu-item" 
      >Synthesizers</a>
      <br />
      <a 
        href="https://tonejs.github.io/" 
        target="_blank" 
        id="open-project" 
        className="menu-item" 
      >Tone.js</a>
    </>
  )
}