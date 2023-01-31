import React from 'react'
import { FaCheck, FaEdit, FaTrash } from 'react-icons/fa'

const ProjectCard = () => {
  return (
    <section className='targets'>
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
    </section>
  )
}

export default ProjectCard
