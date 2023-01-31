import React, { useContext, useState } from 'react'

/**
 * @description This is the context file
 * @param {isModalOpen} - parameter to check open state of modal
 * @param {setIsModalOpen} - parameter to control state of modal
 * @param {openModal} - function to open modal
 * @param {closeModal} - function to close modal
 */

// Set up global context
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  // States
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [list, setList] = useState([])
  const [targetName, setTargetName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const newTarget = { title: targetName, id: new Date().getTime().toString() }
    setList(...list, newTarget)
    setTargetName('')

    console.log(targetName)
  }

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const targetValue = (e) => {
    setTargetName(e.target.value)
  }

  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        targetName,
        handleSubmit,
        targetValue,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
//  use custom "use" hook to consume Global context
const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider, useAppContext }
