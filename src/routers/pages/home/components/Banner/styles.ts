import styled from 'styled-components'

export const BannerComponent = styled.div`
  display: flex;
  margin-top: 5.87rem;
  min-width: 36rem;

  gap: 9rem;
`

export const BannerAdvertise = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    font-weight: 800;
  }

  ul {
    margin-top: 4rem;

    display: grid;
    grid-template-columns: repeat(2, 1fr);

    gap: 1.2rem 2.5rem;
    list-style-type: none;

    li {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
  }
`
