import React from 'react'
import { FaTimes } from 'react-icons/fa'
import styled from 'styled-components'

const ModalForm = () => {
  return (
    <Wrapper>
      <div className={`modal-overlay show-modl`}>
        <div className='modal-container'>Modal Content</div>
        <button className='close-modal-btn'>
          <FaTimes />
        </button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: grid;
    place-items: center;
    transition: all 0.3s linear;
    visibility: hidden;
    z-index: -1;
  }
  /* OPEN/CLOSE MODAL */
  .show-modal {
    visibility: visible;
    z-index: 10;
  }
  .modal-container {
    background: white;
    border-radius: 5px;
    width: 90vw;
    height: 30vh;
    max-width: 620px;
    text-align: center;
    display: grid;
    place-items: center;
    position: relative;
  }
  .close-modal-btn {
    position: absolute;
    top: 2rem;
    right: 1rem;
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: red;
    cursor: pointer;
  }
`

export default ModalForm
