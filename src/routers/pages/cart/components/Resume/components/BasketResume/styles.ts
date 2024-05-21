import styled from 'styled-components'

export const CostsContainer = styled.div`
  margin-top: 2rem;

  display: flex;
  flex-direction: column;

  gap: 1rem;

  color: ${(props) => props.theme['gray-800']};
`

export const DescriptionCost = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

  p {
    font-size: 0.9rem;
  }

  h4 {
    font-size: 1.25rem;
    font-weight: 700;
  }
`
