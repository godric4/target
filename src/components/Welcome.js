import React from 'react'
import styled from 'styled-components'
import bullseye from '../assets/images/bullseye-svgrepo-com.svg'
import Alert from './Alert'
import ProjectCard from './ProjectCard'

/**
 * @description Component that contains welcome message and inspiring quotes
 */

const Welcome = () => {
  return (
    <Wrapper>
      <section className='app-header'>
        <h1>Targets</h1>
        <span>
          <img src={bullseye} alt='bullseyes' />
        </span>
      </section>
      <div className='center'>
        <div className='welcome'>
          <p>
            Hello <strong>Godric,</strong>
          </p>

          <section className='quote-container'>
            <p>
              <strong>"</strong>
              Lorem ipsum dolor sit amet adipisicing elit. Quaerat mque qui
              ipsam velit tempore cum?<strong>"</strong>
            </p>
          </section>
          <section>
            <h3 className='text-center'>Today's Targets</h3>
            <p className='text-center'>Date</p>
            <Alert />
            <ProjectCard />
          </section>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .app-header {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    color: white;
    padding: 1rem;
  }

  img {
    width: 50px;
    margin-top: -0.5rem;
  }

  .welcome {
    margin-top: 1rem;
  }

  .quote-container {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`

export default Welcome
