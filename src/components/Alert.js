import React from 'react'
import styled from 'styled-components'
import { useAppContext } from '../context'

const Alert = () => {
  const { showAlert } = useAppContext()
  const { msg, type } = showAlert

  return (
    <Wrapper>
      <p className={`alert alert-${type}`}>{msg}</p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .alert {
    margin-bottom: 1rem;
    margin-top: 1rem;
    height: 1.25rem;
    display: grid;
    align-items: center;
    text-align: center;
    font-size: 0.7rem;
    border-radius: 0.25rem;
    letter-spacing: var(--spacing);
    text-transform: capitalize;
  }
  .alert-danger {
    color: #721c24;
    background: #f8d7da;
  }
  .alert-success {
    color: #155724;
    background: #d4edda;
  }
`

export default Alert
