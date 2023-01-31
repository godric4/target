import styled from 'styled-components'
import AddProjectModal from './components/AddProjectModal'
import ModalForm from './components/ModalForm'
import Welcome from './components/Welcome'

function App() {
  return (
    <Wrapper>
      <Welcome />
      <AddProjectModal />
      <ModalForm />
    </Wrapper>
  )
}

const Wrapper = styled.main`
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

  @media screen and (min-width: 992px) {
    .center {
      width: 95vw;
    }
  }
`

export default App
