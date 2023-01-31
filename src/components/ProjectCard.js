import React from 'react'
import { FaCheck, FaEdit, FaTrash } from 'react-icons/fa'
import styled from 'styled-components'

const ProjectCard = () => {
  return (
    <Wrapper className='targets'>
      <div className='target-item'>
        <p>Create wireframes</p>

        <div className='target-control'>
          <button className='btn edit'>
            <FaEdit />
          </button>
          <button className='btn delete'>
            <FaTrash />
          </button>
          <button className='btn completed'>
            <FaCheck />
          </button>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-color: black;
  color: white;
  margin: 0.8rem 0;

  .targets {
    background-color: black;
    color: white;
    margin: 0.8rem 0;
    border-radius: 35px;
  }

  .target-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }
  /* background: none; */
  .edit {
    color: yellow;
  }

  .delete {
    color: red;
  }

  .completed {
    color: greenyellow;
  }
`

export default ProjectCard
