import React from 'react'
import { FaCheck, FaEdit, FaTrash } from 'react-icons/fa'
import styled from 'styled-components'
import { useAppContext } from '../context'
import EmptyList from './EmptyList'

const ProjectCard = () => {
  const { list, deleteItem } = useAppContext()

  if (list.length === 0) {
    return <EmptyList />
  }

  return (
    <Wrapper>
      {list.map((item, index) => {
        const { title, id } = item

        if (list.length === 0) {
          return (
            <div className='waiting'>
              <h1>Waiting</h1>
            </div>
          )
        } else {
          return (
            <div className='targets' key={id}>
              <div className='target-item'>
                <p>{title}</p>

                <div className='target-control'>
                  <button className='btn edit'>
                    <FaEdit />
                  </button>
                  <button className='btn delete' onClick={() => deleteItem(id)}>
                    <FaTrash />
                  </button>
                  <button className='btn completed'>
                    <FaCheck />
                  </button>
                </div>
              </div>
            </div>
          )
        }
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .targets {
    background-color: black;
    color: white;
    margin: 0.8rem 0;
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
