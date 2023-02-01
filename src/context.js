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
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  })

  // Handle Form submit"
  const targetValue = (e) => {
    setTargetName(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!targetName) {
      showAlert(true, 'danger', 'Enter a project')
    } else {
      const newTarget = {
        title: targetName,
        id: new Date().getTime().toString(),
      }
      setList([...list, newTarget])
      setTargetName('')
      setIsModalOpen(false)
    }
  }

  // delete project
  const deleteItem = (id) => {
    setList(list.filter((item) => item.id !== id))
    showAlert(true, 'danger', 'project deleted')
  }

  // Handle Alert
  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg })
  }

  // Handle Modal
  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <AppContext.Provider
      value={{
        list,
        isModalOpen,
        openModal,
        closeModal,
        targetName,
        deleteItem,
        handleSubmit,
        targetValue,
        showAlert,
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
