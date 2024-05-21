import styled from 'styled-components'

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
`

export const Coffees = styled.div`
  margin-top: 2rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
  }
`

export const ListContainer = styled.div`
  margin-top: 3.5rem;

  display: grid;
  grid-template-columns: repeat(4, 0fr);

  gap: 2rem;
`
